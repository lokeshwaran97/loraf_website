import { useEffect, useId, useRef, useState } from 'react'
import type { ChangeEvent as ReactChangeEvent, DragEvent as ReactDragEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  extractPrescription,
  formatFrequency,
  type PrescriptionExtractResponse,
  type PrescriptionMedicine,
} from '../lib/extractPrescription'
import { SITE_NAME } from '../data/nav'

type Status = 'idle' | 'ready' | 'extracting' | 'done' | 'error'

const FREQUENCY_KEYS = ['morning', 'afternoon', 'evening', 'bedtime'] as const

function MedicineCard({ med, index }: { med: PrescriptionMedicine; index: number }) {
  return (
    <li className="rx-med">
      <div className="rx-med__header">
        <p className="rx-med__name">
          {index + 1}. {med.medicine_name}
        </p>
        {med.match_score != null ? (
          <span className="rx-med__score">{med.match_score.toFixed(1)}% match</span>
        ) : null}
      </div>
      <p>
        <span>Form:</span> {med.dosage_form || '—'}
      </p>
      <p>
        <span>Per dose:</span> {med.tablets_per_dose}
      </p>
      <p>
        <span>Days:</span> {med.number_of_days}
      </p>
      <div className="rx-med__freq">
        <span className="rx-med__freq-label">Frequency</span>
        <div className="rx-freq-pills" aria-label={formatFrequency(med.frequency)}>
          {FREQUENCY_KEYS.map((key) => (
            <span
              key={key}
              className={`rx-freq-pill${med.frequency[key] ? ' rx-freq-pill--on' : ''}`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </li>
  )
}

export function PrescriptionReaderPage() {
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dragging, setDragging] = useState(false)
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<PrescriptionExtractResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  function acceptFile(next: File | null) {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setResult(null)
    setError(null)

    if (!next) {
      setFile(null)
      setPreviewUrl(null)
      setStatus('idle')
      return
    }

    if (!next.type.startsWith('image/')) {
      setFile(null)
      setPreviewUrl(null)
      setStatus('error')
      setError('Please upload an image file (JPG, PNG, or similar).')
      return
    }

    setFile(next)
    setPreviewUrl(URL.createObjectURL(next))
    setStatus('ready')
  }

  function onInputChange(e: ReactChangeEvent<HTMLInputElement>) {
    acceptFile(e.target.files?.[0] ?? null)
  }

  function onDrop(e: ReactDragEvent) {
    e.preventDefault()
    setDragging(false)
    acceptFile(e.dataTransfer.files?.[0] ?? null)
  }

  async function onExtract() {
    if (!file || status === 'extracting') return
    setStatus('extracting')
    setError(null)
    setResult(null)
    try {
      const data = await extractPrescription(file)
      setResult(data)
      setStatus('done')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not extract details. Please try again.')
    }
  }

  function onClear() {
    if (inputRef.current) inputRef.current.value = ''
    acceptFile(null)
  }

  return (
    <div className="rx-page">
      <Helmet>
        <title>Prescription Reader | {SITE_NAME}</title>
        <meta
          name="description"
          content="Upload a prescription image to extract medicines, dosage form, frequency, and duration."
        />
      </Helmet>

      <header className="rx-page__bar">
        <div className="container rx-page__bar-inner">
          <Link to="/#products" className="rx-page__back">
            ← Back to Products
          </Link>
          <span className="rx-page__brand">{SITE_NAME}</span>
        </div>
      </header>

      <main className="container rx-page__main">
        <div className="rx-page__intro">
          <h1>Prescription Reader</h1>
          <p>Upload a prescription image to extract medicines, forms, frequency, and duration.</p>
        </div>

        <div className="rx-page__grid">
          <section className="rx-panel" aria-labelledby="rx-upload-heading">
            <h2 id="rx-upload-heading">Upload</h2>

            <div
              className={`rx-dropzone${dragging ? ' rx-dropzone--active' : ''}${previewUrl ? ' rx-dropzone--has-file' : ''}`}
              onDragOver={(e) => {
                e.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <input
                ref={inputRef}
                id={inputId}
                type="file"
                accept="image/*"
                className="rx-dropzone__input"
                onChange={onInputChange}
              />

              {previewUrl ? (
                <div className="rx-preview">
                  <img src={previewUrl} alt="Selected prescription preview" />
                  <p className="rx-preview__name">{file?.name}</p>
                </div>
              ) : (
                <label htmlFor={inputId} className="rx-dropzone__label">
                  <span className="rx-dropzone__title">Drop an image here</span>
                  <span className="rx-dropzone__hint">or click to browse</span>
                </label>
              )}
            </div>

            <div className="rx-actions">
              {previewUrl && (
                <button type="button" className="btn btn--outline rx-actions__secondary" onClick={onClear}>
                  Clear
                </button>
              )}
              {!previewUrl && (
                <label htmlFor={inputId} className="btn btn--outline rx-actions__secondary">
                  Browse
                </label>
              )}
              <button
                type="button"
                className="btn btn--primary"
                disabled={!file || status === 'extracting'}
                onClick={onExtract}
              >
                {status === 'extracting' ? 'Extracting…' : 'Extract'}
              </button>
            </div>
          </section>

          <section className="rx-panel" aria-labelledby="rx-results-heading" aria-live="polite">
            <h2 id="rx-results-heading">Extracted medicines</h2>

            {status === 'idle' || status === 'ready' ? (
              <p className="rx-empty">Upload a prescription to see extracted details.</p>
            ) : null}

            {status === 'extracting' ? (
              <p className="rx-loading">Extracting prescription details…</p>
            ) : null}

            {status === 'error' && error ? <p className="rx-error">{error}</p> : null}

            {status === 'done' && result ? (
              <div className="rx-results">
                {result.medicines.length === 0 ? (
                  <p className="rx-empty">No medicines were found in this image.</p>
                ) : (
                  <>
                    <p className="rx-results__count">
                      {result.medicines.length} medicine
                      {result.medicines.length === 1 ? '' : 's'} found
                    </p>
                    <ul className="rx-meds">
                      {result.medicines.map((med, index) => (
                        <MedicineCard
                          key={`${med.medicine_name}-${index}`}
                          med={med}
                          index={index}
                        />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ) : null}
          </section>
        </div>
      </main>
    </div>
  )
}

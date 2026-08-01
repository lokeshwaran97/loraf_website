export type MedicineFrequency = {
  morning: boolean
  afternoon: boolean
  evening: boolean
  bedtime: boolean
}

export type PrescriptionMedicine = {
  medicine_name: string
  dosage_form: string
  frequency: MedicineFrequency
  tablets_per_dose: number
  number_of_days: number
  match_score: number | null
}

export type PrescriptionExtractResponse = {
  status: string
  medicines: PrescriptionMedicine[]
}

const DEFAULT_API_URL =
  'https://hfp0usops8.execute-api.ap-south-2.amazonaws.com/prescription/extract'

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result
      if (typeof result !== 'string') {
        reject(new Error('Could not read image as base64.'))
        return
      }
      const comma = result.indexOf(',')
      resolve(comma >= 0 ? result.slice(comma + 1) : result)
    }
    reader.onerror = () => reject(new Error('Could not read the selected image.'))
    reader.readAsDataURL(file)
  })
}

export function formatFrequency(frequency: MedicineFrequency): string {
  const parts: string[] = []
  if (frequency.morning) parts.push('Morning')
  if (frequency.afternoon) parts.push('Afternoon')
  if (frequency.evening) parts.push('Evening')
  if (frequency.bedtime) parts.push('Bedtime')
  return parts.length ? parts.join(', ') : 'Not specified'
}

export async function extractPrescription(file: File): Promise<PrescriptionExtractResponse> {
  const apiUrl = import.meta.env.VITE_PRESCRIPTION_API_URL || DEFAULT_API_URL
  const image_base64 = await fileToBase64(file)
  const mime_type = file.type || 'image/jpeg'

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image_base64, mime_type }),
  })

  let data: unknown
  try {
    data = await response.json()
  } catch {
    throw new Error(`Extraction failed (${response.status}). Invalid response from server.`)
  }

  if (!response.ok) {
    const message =
      typeof data === 'object' &&
      data !== null &&
      'message' in data &&
      typeof (data as { message: unknown }).message === 'string'
        ? (data as { message: string }).message
        : `Extraction failed (${response.status}). Please try again.`
    throw new Error(message)
  }

  const payload = data as PrescriptionExtractResponse & { message?: string }
  if (!payload || payload.status !== 'ok' || !Array.isArray(payload.medicines)) {
    throw new Error(payload?.message || 'Unexpected response from prescription API.')
  }

  return payload
}

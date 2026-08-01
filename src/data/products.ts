export type Product = {
  title: string
  slug: string
  href: string
  description: string
  items: string[]
  ctaLabel: string
}

export const products: Product[] = [
  {
    title: 'Prescription Reader',
    slug: 'prescription-reader',
    href: '/products/prescription-reader',
    description:
      'AI-powered prescription digitization that reads handwritten and printed prescriptions, extracts medicines and dosages, and structures them for pharmacy and clinic workflows.',
    items: [
      'Handwritten & printed Rx OCR',
      'Medicine name & dosage extraction',
      'Structured digital output',
      'Pharmacy & clinic ready',
    ],
    ctaLabel: 'Open Prescription Reader',
  },
]

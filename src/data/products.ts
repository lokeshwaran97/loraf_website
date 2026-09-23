export type ProductImage = {
  src: string
  alt: string
}

export type Product = {
  id: string
  title: string
  description: string
  items: string[]
  videoUrl?: string
  videoId?: string
  images?: ProductImage[]
}

export const products: Product[] = [
  {
    id: 'pharmacy-dispensing',
    title: 'Automated Pharmacy Medicine Dispensing System',
    description:
      'An automated pharmacy medicine dispensing system designed to make medicine retrieval faster, more efficient, and reliable—reducing wait time and improving accuracy at the counter.',
    items: [
      'Faster medicine retrieval',
      'Reliable automated dispensing',
      'Efficient pharmacy workflows',
      'Reduced manual picking errors',
    ],
    videoUrl: 'https://youtu.be/nz06HmNuXe4',
    videoId: 'nz06HmNuXe4',
  },
  {
    id: 'vision-defect-detection',
    title: 'Computer Vision Defect Detection',
    description:
      'AI-powered computer vision that inspects manufactured parts—such as impellers—and automatically finds surface defects including pin holes, scratches, shrinkage, blow holes, and fettling issues.',
    items: [
      'Automated visual inspection',
      'Pin hole, scratch & blow hole detection',
      'Shrinkage and fettling issue identification',
      'Confidence-scored defect labels',
    ],
    images: [
      {
        src: '/assets/vision_image_1.jpeg',
        alt: 'Impeller inspection showing a detected pin hole defect',
      },
      {
        src: '/assets/vision_image_2.jpeg',
        alt: 'Impeller inspection showing shrinkage, scratch, pin hole, and fettling defects',
      },
      {
        src: '/assets/vision_image_3.jpeg',
        alt: 'Impeller inspection showing scratch and blow hole defects',
      },
    ],
  },
]

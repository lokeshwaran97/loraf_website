import type { ElementType, ReactNode } from 'react'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

type RevealProps = {
  as?: 'div' | 'article'
  className?: string
  children: ReactNode
}

export function Reveal({ as = 'div', className, children }: RevealProps) {
  const ref = useRevealOnScroll<HTMLElement>()
  const Tag = as as ElementType

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}

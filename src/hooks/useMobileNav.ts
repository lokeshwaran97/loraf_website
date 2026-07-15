import { useCallback, useEffect, useState } from 'react'

export function useMobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((open) => !open), [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return { isOpen, toggle, close }
}

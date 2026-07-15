import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

export function Analytics() {
  useEffect(() => {
    if (!GA_ID || typeof document === 'undefined') return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      // Match GA snippet: push Arguments-like payload into dataLayer
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID)

    return () => {
      script.remove()
    }
  }, [])

  return null
}

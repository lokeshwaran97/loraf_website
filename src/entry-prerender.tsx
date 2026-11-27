import type { ReactElement } from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import { DataRetentionPolicyPage } from './pages/DataRetentionPolicyPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'

const pages: Record<string, () => ReactElement> = {
  '/privacy-policy': () => <PrivacyPolicyPage />,
  '/terms-of-service': () => <TermsOfServicePage />,
  '/data-retention-policy': () => <DataRetentionPolicyPage />,
}

export const routes = Object.keys(pages)

export function render(url: string): { html: string; head: string } {
  const page = pages[url]
  if (!page) throw new Error(`No pre-render page for route: ${url}`)

  const helmetContext: { helmet?: HelmetServerState } = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[url]}>{page()}</MemoryRouter>
    </HelmetProvider>,
  )

  const { helmet } = helmetContext
  const head = helmet
    ? [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString()]
        .filter(Boolean)
        .join('\n    ')
    : ''

  return { html, head }
}

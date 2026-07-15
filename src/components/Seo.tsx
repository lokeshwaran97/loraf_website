import { Helmet } from 'react-helmet-async'
import { contactInfo } from '../data/contact'
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../data/nav'

export function Seo() {
  const ogImage = `${SITE_URL}/og-image.jpg`
  const logoUrl = `${SITE_URL}/assets/logo.png`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: logoUrl,
    description: SITE_DESCRIPTION,
    knowsAbout: [
      'Automation',
      'Robotics',
      'Artificial Intelligence',
      'Software Engineering',
    ],
    email: contactInfo.email,
    telephone: contactInfo.phones.map((p) => p.href.replace('tel:', '')),
    address: {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.addressSchema.streetAddress,
      addressLocality: contactInfo.addressSchema.addressLocality,
      postalCode: contactInfo.addressSchema.postalCode,
      addressCountry: contactInfo.addressSchema.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: contactInfo.phones[0].href.replace('tel:', ''),
      contactType: 'customer service',
      email: contactInfo.email,
      areaServed: 'IN',
      availableLanguage: 'English',
    },
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{SITE_TITLE}</title>
      <meta name="description" content={SITE_DESCRIPTION} />
      <meta name="keywords" content={SITE_KEYWORDS} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={`${SITE_URL}/`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_OG_DESCRIPTION} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={SITE_TITLE} />
      <meta name="twitter:description" content={SITE_OG_DESCRIPTION} />
      <meta name="twitter:image" content={ogImage} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

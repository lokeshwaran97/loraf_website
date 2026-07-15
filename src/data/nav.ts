export const SITE_URL = 'https://www.lorafintel.com'

export const SITE_NAME = 'Loraf Intelligence'

export const SITE_LEGAL_NAME = 'Loraf Intelligence Private Ltd'

export const SITE_TITLE =
  'Loraf Intelligence | Automation, Robotics, AI & Software Engineering'

export const SITE_DESCRIPTION =
  'Loraf Intelligence builds automation, robotics, AI, and software engineering solutions for industry and intelligent systems.'

export const SITE_KEYWORDS =
  'automation, robotics, artificial intelligence, AI, software engineering, industrial automation, Loraf Intelligence'

export const SITE_OG_DESCRIPTION = 'Automation, Robotics, AI & Software Engineering'

export type NavItem = {
  label: string
  href: string
  cta?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact', cta: true },
]

import { SITE_LEGAL_NAME, navItems } from '../data/nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer__copy">
          <p>
            &copy; {year} {SITE_LEGAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

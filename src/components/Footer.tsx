import { Link } from 'react-router-dom'
import { SITE_LEGAL_NAME, navItems } from '../data/nav'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href.startsWith('#') ? `/${item.href}` : item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="footer__legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/terms-of-service">Terms of Service</Link>
          <span aria-hidden="true">·</span>
          <Link to="/data-retention-policy">Data Retention Policy</Link>
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

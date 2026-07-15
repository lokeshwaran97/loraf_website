import { navItems } from '../data/nav'
import { useMobileNav } from '../hooks/useMobileNav'
import { useScrollHeader } from '../hooks/useScrollHeader'

export function Header() {
  const scrolled = useScrollHeader()
  const { isOpen, toggle, close } = useMobileNav()

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={close}>
          <img src="/assets/logo.png?v=2" alt="Loraf Intelligence" width={160} height={48} />
        </a>
        <button
          className={`nav__toggle${isOpen ? ' active' : ''}`}
          id="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggle}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav__menu${isOpen ? ' active' : ''}`} id="nav-menu">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav__link${item.cta ? ' nav__link--cta' : ''}`}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

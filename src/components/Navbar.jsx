import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#oddzialy', label: 'Oddziały' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>REQUIEM</span>
          <span className={styles.logoSub}>Zakład Pogrzebowy</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+48669509782" className={styles.navPhone}>
            ☎ 669 509 782
          </a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>REQUIEM</span>
          <span className={styles.sub}>Zakład Pogrzebowy</span>
        </div>

        <nav className={styles.links} aria-label="Stopka nawigacja">
          <a href="#uslugi">Usługi</a>
          <a href="#o-nas">O nas</a>
          <a href="#oddzialy">Oddziały</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className={styles.phones}>
          <a href="tel:+48669509782">669 509 782</a>
          <a href="tel:+48661869243">661 869 243</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            © {year} Zakład Pogrzebowy REQUIEM. Wszelkie prawa zastrzeżone. | NIP: 8822087474
          </p>
          <p className={styles.seoText}>
            Zakład pogrzebowy Ząbkowice Śląskie · Zakład pogrzebowy Kamieniec Ząbkowicki ·
            Zakład pogrzebowy Duszniki Zdrój · Zakład pogrzebowy Szczytna
          </p>
        </div>
      </div>
    </footer>
  )
}

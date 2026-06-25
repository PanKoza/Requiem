import { useScrollReveal } from '../hooks/useAnimations'
import styles from './Contact.module.css'

export default function Contact() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [leftRef, leftVisible] = useScrollReveal()
  const [rightRef, rightVisible] = useScrollReveal()

  return (
    <section id="kontakt" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Kontakt</h2>
          <div className="divider" />
          <p className="section-subtitle">Jesteśmy dostępni 24 godziny na dobę – zadzwoń w każdej chwili</p>
        </div>

        <div className={styles.grid}>
          <div ref={leftRef} className={`${styles.infoBlock} reveal-left ${leftVisible ? 'visible' : ''}`}>
            <div className={styles.highlight}>
              <p className={styles.available}>⏰ Dostępni 24h / 7 dni w tygodniu</p>
            </div>

            <div className={styles.phones}>
              <a href="tel:+48669509782" className={styles.phone}>
                <span className={styles.phoneIcon}>📞</span>
                <div>
                  <span className={styles.phoneLabel}>Telefon 1</span>
                  <span className={styles.phoneNumber}>669 509 782</span>
                </div>
              </a>
              <a href="tel:+48661869243" className={styles.phone}>
                <span className={styles.phoneIcon}>📞</span>
                <div>
                  <span className={styles.phoneLabel}>Telefon 2</span>
                  <span className={styles.phoneNumber}>661 869 243</span>
                </div>
              </a>
            </div>

            <div className={styles.addressList}>
              <h3 className={styles.addressTitle}>Nasze lokalizacje</h3>
              <ul>
                <li><strong>Ząbkowice Śląskie</strong> – ul. Proletariatczyków 10</li>
                <li><strong>Duszniki Zdrój</strong> – ul. Kłodzka 16</li>
                <li><strong>Kamieniec Ząbkowicki</strong> – ul. Ząbkowicka 4</li>
                <li><strong>Szczytna</strong> – ul. Kościelna 4</li>
              </ul>
            </div>

            <p className={styles.nip}>NIP: 8822087474</p>
          </div>

          <div ref={rightRef} className={`${styles.ctaBlock} reveal-right ${rightVisible ? 'visible' : ''}`}>
            <div className={styles.ctaBox}>
              <p className={styles.ctaEyebrow}>Potrzebujesz pomocy?</p>
              <h3 className={styles.ctaTitle}>Zadzwoń teraz</h3>
              <p className={styles.ctaDesc}>
                Nasi specjaliści są gotowi pomóc Ci przez całą dobę.
                Zapewniamy dyskretną, profesjonalną i pełną szacunku obsługę
                w najtrudniejszych chwilach.
              </p>
              <a href="tel:+48669509782" className={`${styles.ctaBtn} pulse-ring`}>
                669 509 782
              </a>
              <a href="tel:+48661869243" className={styles.ctaBtnSecond}>
                661 869 243
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

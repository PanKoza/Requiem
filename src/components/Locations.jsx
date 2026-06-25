import { useScrollReveal } from '../hooks/useAnimations'
import styles from './Locations.module.css'

const locations = [
  {
    city: 'Ząbkowice Śląskie',
    address: 'ul. Proletariatczyków 10',
    keyword: 'zakład pogrzebowy Ząbkowice Śląskie',
    mapQuery: 'ul.+Proletariatczyków+10,+Ząbkowice+Śląskie',
  },
  {
    city: 'Duszniki Zdrój',
    address: 'ul. Kłodzka 16',
    keyword: 'zakład pogrzebowy Duszniki Zdrój',
    mapQuery: 'ul.+Kłodzka+16,+Duszniki+Zdrój',
  },
  {
    city: 'Kamieniec Ząbkowicki',
    address: 'ul. Ząbkowicka 4',
    keyword: 'zakład pogrzebowy Kamieniec Ząbkowicki',
    mapQuery: 'ul.+Ząbkowicka+4,+Kamieniec+Ząbkowicki',
  },
  {
    city: 'Szczytna',
    address: 'ul. Kościelna 4',
    keyword: 'zakład pogrzebowy Szczytna',
    mapQuery: 'ul.+Kościelna+4,+Szczytna',
  },
]

export default function Locations() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="oddzialy" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Nasze oddziały</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Obsługujemy klientów z Ząbkowic Śląskich, Kamieńca Ząbkowickiego,<br />
            Dusznik Zdroju, Szczytnej i całego powiatu ząbkowickiego
          </p>
        </div>
        <div ref={gridRef} className={`${styles.grid} stagger ${gridVisible ? 'visible' : ''}`}>
          {locations.map((loc) => (
            <article key={loc.city} className={styles.card} aria-label={loc.keyword}>
              <div className={styles.cardHeader}>
                <span className={styles.pin}>📍</span>
                <h3 className={styles.city}>{loc.city}</h3>
              </div>
              <p className={styles.address}>{loc.address}</p>
              <div className={styles.actions}>
                <a
                  href={`https://maps.google.com/?q=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapLink}
                >
                  Pokaż na mapie →
                </a>
                <a href="tel:+48669509782" className={styles.phoneLink}>
                  Zadzwoń
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

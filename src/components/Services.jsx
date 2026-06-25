import { useScrollReveal } from '../hooks/useAnimations'
import styles from './Services.module.css'

const services = [
  {
    icon: '⚰',
    title: 'Usługi pogrzebowe',
    desc: 'Kompleksowa organizacja pogrzebu – od przejęcia zwłok po pochówek. Zajmujemy się każdym szczegółem z należną troską i szacunkiem.',
  },
  {
    icon: '🕯',
    title: 'Kremacje i ekshumacje',
    desc: 'Profesjonalne usługi kremacji oraz ekshumacji. Działamy zgodnie z obowiązującymi przepisami prawa.',
  },
  {
    icon: '🪦',
    title: 'Grobowce',
    desc: 'Grobowce pojedyncze i podwójne. Trwałe, estetyczne konstrukcje dopasowane do indywidualnych potrzeb.',
  },
  {
    icon: '⚱',
    title: 'Trumny i urny',
    desc: 'Szeroki wybór trumien i urn w różnych stylach i materiałach. Każdy produkt wykonany z najwyższą starannością.',
  },
  {
    icon: '✝',
    title: 'Tabliczki i krzyże',
    desc: 'Wykonujemy tabliczki pamiątkowe i krzyże nagrobne. Napis według życzenia rodziny.',
  },
  {
    icon: '💐',
    title: 'Wieńce i wiązanki',
    desc: 'Kompozycje kwiatowe: wieńce, wiązanki i bukiety żałobne przygotowywane na każdą uroczystość.',
  },
  {
    icon: '📋',
    title: 'Formalności',
    desc: 'Pomagamy załatwić wszelkie formalności urzędowe i kościelne. Odciążamy rodzinę w trudnym czasie żałoby.',
  },
]

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal()
  const [gridRef, gridVisible] = useScrollReveal()

  return (
    <section id="uslugi" className={styles.section}>
      <div className="container">
        <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Nasze usługi</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Świadczymy pełen zakres usług pogrzebowych na terenie Ząbkowic Śląskich,<br />
            Kamieńca Ząbkowickiego, Dusznik Zdroju i Szczytnej
          </p>
        </div>
        <div ref={gridRef} className={`${styles.grid} stagger ${gridVisible ? 'visible' : ''}`}>
          {services.map((s) => (
            <article key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

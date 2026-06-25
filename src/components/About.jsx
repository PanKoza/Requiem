import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useAnimations'
import styles from './About.module.css'

const stats = [
  { value: '24', suffix: 'h', label: 'Dostępność' },
  { value: '4', suffix: '', label: 'Oddziały' },
  { value: '100', suffix: '%', label: 'Zaangażowania' },
  { value: null, display: '∞', label: 'Szacunku' },
]

function StatCard({ value, suffix, display, label, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || value === null) return
    const target = Number(value)
    const duration = 1600
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active])

  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>
        {value !== null ? `${count}${suffix}` : display}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}

export default function About() {
  const [textRef, textVisible] = useScrollReveal()
  const [statsRef, statsVisible] = useScrollReveal()

  return (
    <section id="o-nas" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div
            ref={textRef}
            className={`${styles.textBlock} reveal-left ${textVisible ? 'visible' : ''}`}
          >
            <p className={styles.eyebrow}>Kim jesteśmy</p>
            <h2 className={styles.title}>Zakład Pogrzebowy<br /><span>REQUIEM</span></h2>
            <div className={styles.divider} />
            <p className={styles.lead}>
              Zakład Pogrzebowy REQUIEM to firma z wieloletnim doświadczeniem, działająca
              na terenie powiatu ząbkowickiego i okolic. Świadczymy kompleksowe usługi
              pogrzebowe w Ząbkowicach Śląskich, Kamieńcu Ząbkowickim, Dusznikach Zdroju
              oraz Szczytnej.
            </p>
            <p className={styles.text}>
              Rozumiemy, że każde pożegnanie jest wyjątkowe. Z pełnym szacunkiem
              i profesjonalizmem towarzyszymy rodzinom w jednym z najtrudniejszych momentów
              życia. Nasi pracownicy są dostępni przez całą dobę, 7 dni w tygodniu –
              zawsze gdy nas potrzebujesz.
            </p>
            <p className={styles.text}>
              Oferujemy kompleksową obsługę: od przejęcia zwłok, przez organizację
              ceremonii, aż po pomoc w formalnościach urzędowych i kościelnych.
              Działamy w powiecie ząbkowickim, kłodzkim i okolicach.
            </p>
            <a href="tel:+48669509782" className={styles.btn}>Zadzwoń do nas</a>
          </div>

          <div
            ref={statsRef}
            className={`${styles.statsBlock} reveal-right ${statsVisible ? 'visible' : ''}`}
          >
            {stats.map(s => (
              <StatCard key={s.label} {...s} active={statsVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

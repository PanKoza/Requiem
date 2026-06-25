import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let W, H

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.4 + 0.15,
      opacity: Math.random() * 0.55 + 0.1,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.018 + 0.005,
    }))

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.y -= p.speed / H * 1.5
        p.wobble += p.wobbleSpeed
        if (p.y < 0) { p.y = 1.05; p.x = Math.random() }

        const x = p.x * W + Math.sin(p.wobble) * 22
        const y = p.y * H
        const grd = ctx.createRadialGradient(x, y, 0, x, y, p.r * 4)
        grd.addColorStop(0, `rgba(201,168,76,${p.opacity})`)
        grd.addColorStop(1, 'rgba(201,168,76,0)')

        ctx.beginPath()
        ctx.arc(x, y, p.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.particles} aria-hidden="true" />
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Zakład Pogrzebowy Requiem – strona główna">
      <div className={styles.overlay} />
      <Particles />

      <div className={`container ${styles.content}`}>
        <p className={`${styles.eyebrow} ${styles.animEyebrow}`}>Profesjonalne usługi pogrzebowe</p>
        <h1 className={`${styles.title} ${styles.animTitle}`}>
          Zakład Pogrzebowy<br />
          <span className={`${styles.brand} shimmer`}>REQUIEM</span>
        </h1>
        <div className={`${styles.phoneBadge} ${styles.animBadge} pulse-ring`}>
          <span>TEL.</span>
          <a href="tel:+48669509782">669&nbsp;509&nbsp;782</a>
          <span className={styles.sep}>|</span>
          <a href="tel:+48661869243">661&nbsp;869&nbsp;243</a>
        </div>
        <p className={`${styles.available} ${styles.animAvail}`}>Dostępni 24h na dobę, 7 dni w tygodniu</p>
        <div className={`${styles.actions} ${styles.animActions}`}>
          <a href="tel:+48669509782" className={styles.btnPrimary}>Zadzwoń teraz</a>
          <a href="#uslugi" className={styles.btnSecondary}>Nasze usługi</a>
        </div>
        <p className={`${styles.regions} ${styles.animRegions}`}>
          Ząbkowice Śląskie · Kamieniec Ząbkowicki · Duszniki Zdrój · Szczytna
        </p>
      </div>

      <div className={styles.scrollIndicator}>
        <span /><span /><span />
      </div>
    </section>
  )
}

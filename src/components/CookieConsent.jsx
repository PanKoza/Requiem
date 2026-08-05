import { useState, useEffect } from 'react'
import styles from './CookieConsent.module.css'

function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <p className={styles.text}>
          Używamy plików cookie, aby zapewnić najlepsze wrażenia z korzystania z naszej strony.
          Możesz zaakceptować wszystkie pliki cookie lub je odrzucić.
        </p>
        <div className={styles.buttons}>
          <button className={styles.reject} onClick={reject}>Odrzuć</button>
          <button className={styles.accept} onClick={accept}>Akceptuj</button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent

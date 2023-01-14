'use client'
import Link from 'next/Link'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Transcreva os exames de um paciente com facilidade!
        </p>
        <div>
          <div>Por:</div>
          <Link href="https://www.instagram.com/guilhermecirillo/" target={'_blank'}><p>Guilherme Gnipper</p></Link>
          <Link href="https://www.instagram.com/peusgarbi/" target={'_blank'}><p>Pedro Sgarbi</p></Link>
        </div>
      </div>

      <div className={styles.center}>
        <div><h1>LabsInCor</h1></div>
      </div>
      <div className={styles.center}>
        <div><input type="file" accept="application/pdf" change="onChange"></input></div>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Doação! <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Ajude-nos a manter este site de pé e atualizado!
          </p>
        </a>

        <Link
          href="https://github.com/ggnipper98/labsincor"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GitHub <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Quer nos ajudar codando?</p>
        </Link>
      </div>
    </main>
  )
}

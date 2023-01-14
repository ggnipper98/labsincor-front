import Image from 'next/image'
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
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Por Guilherme Gnipper
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>
          LabsInCor
        </h1>
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

        <a
          href="#"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GitHub <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Quer nos ajudar codando?</p>
        </a>
      </div>
    </main>
  )
}

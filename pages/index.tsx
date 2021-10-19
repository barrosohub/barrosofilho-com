import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barroso Filho - Page Under Construction</title>
        <meta name="description" content="Barroso Filho - Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Barroso Filho
        </h1>
        <span>(page under construction...)</span>    
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/barroso-filho-13bb94ab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/barroso-filho-13bb94ab/         
        </a>       
      </footer>
    </div>
  )
}

export default Home

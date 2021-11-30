import type { NextPage } from 'next'
import Head from 'next/head'
import SocialLinks from './components/Generic/SocialLinks'
import Footer from './components/Footer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barroso Filho (Front-end Engineer)</title>
        <meta name="description" content="Barroso Filho (Front-end Engineer)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Barroso Filho
        </h1>
        
        <section id="aboutMe">
          <p className={styles.subtitle}>(Front-end Engineer)</p>
          <p>Javascript | ReactJS | React Native | NextJS | NestJS | AdonisJS | GraphQL | PostgreSQL/MySQL | Jest | DevOps | UI/UX | Amazon AWS</p>         
        </section>
        <span className="followMeText"><em>Talk to me or follow me on the networks:</em></span>
        <SocialLinks />
      </main>

      <Footer />
     
    </div>
 
  )
}

export default Home

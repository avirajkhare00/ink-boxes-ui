import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function InkBoxes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ink Boxes</title>
        <meta name="description" content="Ink Boxes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Ink Boxes!
        </h1>

        <p className={styles.description}>
          View our collection of Ink Boxes.
        </p>
      </main>
    </div>
  )
}

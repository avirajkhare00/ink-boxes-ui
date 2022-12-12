import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
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
          Ink boxes are a collection of helpful Ink smart contract boilerplates along with it&apos;s frontend. It will already have polkadot.js library using which frontend can talk with the smart contract deployed. Got inspired by truffle boxes on how easily one can spin up the boilerplate code in no time.
          <br />
          Click here to explore Ink Boxes.
        </p>
      </main>
    </div>
  )
}

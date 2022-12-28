import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Ink Boxes</title>
          <meta name="description" content="Ink Boxes" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Ink Boxes!
          </h1>

          <center>
            <Image alt="Picture of boxes" src={'/boxes.svg'} width={400} height={400}></Image>
          </center>

          <p className={styles.description}>
            Ink boxes are a collection of helpful Ink smart contract boilerplates along with it&apos;s frontend. It will already have polkadot.js library using which frontend can talk with the smart contract deployed. Got inspired by truffle boxes on how easily one can spin up the boilerplate code in no time.
            <br />
            Click <a href='../ink-boxes'>here</a> to explore Ink Boxes.
            <br />
            Click <a href='https://github.com/avirajkhare00/ink-boxes'>here</a> to raise PR for a new ink box.
          </p>
        </main>
      </div>
    </div>
  )
}

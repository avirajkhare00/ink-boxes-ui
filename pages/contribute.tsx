import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'

export default function Contribute() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>Ink Boxes</title>
                    <meta name="description" content="Ink Boxes" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <h1 className={styles.title}>
                        Contribute to Ink Boxes!
                    </h1>

                    <p className={styles.description}>
                        Here are the following things you need to keep in mind in order to create an ink box:
                    </p>
                    <ul className={styles.description}>
                        <li>Your project should have a proper README.</li>
                        <li>It should have either MIT or Apache V2 license.</li>
                        <li>One directory should contain entire source code, check existing ink boxes for directory structure.</li>
                        <li>Your smart contracts and UI both should have tests.</li>
                        <li>Once you create an ink box, you can clone ink-boxes repo provided below. Place the ink box inside the repo and create a pull request.</li>
                    </ul>
                    <p className={styles.description}>
                        Click <a href='https://github.com/avirajkhare00/ink-boxes'>here</a> to raise PR for a new ink box.
                    </p>
                </main>
            </div>
        </div>
    )
}

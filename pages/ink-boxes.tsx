import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

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
                <br />
                <h2 className={styles.title}>
                    Live
                </h2>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="Flipper"
                        src="https://i.imgur.com/EyZ1i2G.png"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            Flipper
                        </CardTitle>
                        <CardText>
                            This ink box contains flipper smart contract along with the UI.
                        </CardText>
                        <Button>
                            Download
                        </Button>
                    </CardBody>
                </Card>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="ERC-20"
                        src="https://i.imgur.com/y1V49R6.png"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            ERC-20
                        </CardTitle>
                        <CardText>
                            This ink box contains ERC-20 smart contract along with the UI.
                        </CardText>
                        <Button>
                            Download
                        </Button>
                    </CardBody>
                </Card>
                <Card
                    style={{
                        width: '18rem'
                    }}
                >
                    <img
                        alt="ERC-721"
                        src="https://i.imgur.com/YRyn4wh.png"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            ERC-721
                        </CardTitle>
                        <CardText>
                            This ink box contains ERC-721 smart contract along with the UI.
                        </CardText>
                        <Button>
                            Download
                        </Button>
                    </CardBody>
                </Card>
                <h2 className={styles.title}>
                    Coming Soon
                </h2>
            </main>
        </div>
    )
}

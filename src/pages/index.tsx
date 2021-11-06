import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Template React</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
        <span>👏🏼 Hey, welcome</span>
        <h1>Template <span>React</span>.</h1>
        <p>
          To start your app <br />
          <span>for free</span>
        </p>
        </section>

        {/* <img src="/images/avatar.svg" alt="avatar" /> */}
      </main>
    </>
  )
}

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
          <span>👏🏼 Hey, welcome to</span>
          <h1>About <span>Cork</span>.</h1>
          <p>
            <span>for brazilians 🇧🇷</span>
          </p>
        </section>

        <img src="/images/irish.png" alt="ireland" />
      </main>
    </>
  )
}

import Head from 'next/head';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Cork</title>
      </Head>
      <div className={styles.containerHome}>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏🏼 Hey, welcome to</span>
            <h1>About <span>Cork</span></h1>
            <p>
              <span>...for brazilians 🇧🇷</span>
            </p>
          </section>

          <img src="/images/irish.png" alt="ireland" />
        </main>
      </div>
      <div className={styles.containerHistory}>
        <main className={styles.contentContainerB}>
          <div className={styles.left}>
            <h1>Histórias e Experiências</h1>
            <p>
              <span>...for brazilians 🇧🇷</span>
            </p>
          </div>
          <div className={styles.right}>
            <h1>Histórias e Experiências</h1>
            <p>
              <span>...for brazilians 🇧🇷</span>
            </p>
          </div>


        </main>
      </div>
    </>
  )
}

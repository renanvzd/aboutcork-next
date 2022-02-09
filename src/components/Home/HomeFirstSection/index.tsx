import styles from "./styles.module.scss";
import MyParticles from '../Particles'

export function HomeFirstSection() {
  return (
    <>
      <div data-aos="fade-up" >
        <MyParticles></MyParticles>
        <div className={styles.containerHome}>
          <main className={styles.contentContainer}>
            <MyParticles></MyParticles>
            <div className={styles.left}>
              <span>👏🏼 Hey, welcome to</span>
              <h1>About <span>Cork</span></h1>
              <p>
                <span>...for brazilians 🇧🇷</span>
              </p>
            </div>
            <MyParticles></MyParticles>
            <div className={styles.right}>
              <img src="/images/irish.png" alt="ireland" />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
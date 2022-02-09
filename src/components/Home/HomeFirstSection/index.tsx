import { useEffect } from "react";
import styles from "./styles.module.scss";
import Particles from "react-particles-js";
// import MyParticles from '../Particles'

export function HomeFirstSection() {
  useEffect(() => {
    Particles
  }, [])
  return (
    <>
      <div data-aos="fade-up" >

        <div className={styles.containerHome}>
          <Particles
            className={styles.particles}
            params={{
              "particles": {
                "number": {
                  "value": 150,
                  "density": {
                    "enable": true,
                    "value_area": 1500
                  }
                },
                "line_linked": {
                  "enable": false,
                },
                "move": {
                  // "direction": "down",
                  "speed": 0.1
                },
                "size": {
                  "value": 2
                },
                "opacity": {
                  "anim": {
                    "enable": true,
                    "speed": 1.5,
                    "opacity_min": 0.05
                  }
                }
              },
              "interactivity": {
                "events": {
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  }
                },
                "modes": {
                  "push": {
                    "particles_nb": 1
                  }
                }
              },
              "retina_detect": true
            }} />
          <main className={styles.contentContainer}>
            <div className={styles.left}>
              <span>👏🏼 Hey, welcome to</span>
              <h1>About <span>Cork</span></h1>
              <p>
                <span>...for brazilians 🇧🇷</span>
              </p>
            </div>

            <div className={styles.right}>
              <img src="/images/irish.png" alt="ireland" />
            </div>
          </main>


        </div>
      </div>
    </>
  );
}
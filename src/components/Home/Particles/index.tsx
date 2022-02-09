import Particles from "react-particles-js";
import styles from './styles.module.scss';

export default function MyParticles() {
  return (
    <div className={styles.particles}>
      <Particles
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
    </div>
  );
}
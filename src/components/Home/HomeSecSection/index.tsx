import SectionTitle from "../SectionTitle";
import styles from "./styles.module.scss";

export function HomeSecSection() {
  return (
    <>

      <div className={styles.container} >
        <div className={styles.sectionTitle} data-aos="zoom-in-up">
          <SectionTitle title="What is it About?" description="" />


          <div className={styles.itemContainer}>
            <div>
              <p>About Cork é um blog que quer trazer os relatos e experiências vividas por brasileiros em Cork que possam inspirar e ensinar outros brasileiros.
              </p>
              <p>Também trazemos conteúdo de forma simples, rápida e direta sobre dúvidas, dicas e recomendações!</p>
              <p>Disponibilizamos o espaço para que todos possam contribuir com aquilo que possa somar para a nossa comunidade! </p>
              <p>After all, this is Cork for brazilians!!</p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
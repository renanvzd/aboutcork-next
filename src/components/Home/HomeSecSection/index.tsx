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
              <p>About Cork é um blog que quer descomplicar várias assuntos para a comunidade brasileira que vive em Cork, na Irlanda.</p>
              <p>A ideia é trazer conteúdo de forma simples, rápida e direta sobre dúvidas, dicas, histórias e recomendações!</p>
              <p>Ficamos à disposição para disponibilizar o espaço para qualquer assunto que possam auxiliar outros brasileiros!</p>
              <p>After all, this is Cork for brazilians!!</p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
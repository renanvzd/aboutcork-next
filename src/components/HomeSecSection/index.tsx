import styles from "./styles.module.scss";

export function HomeSecSection() {
  return (
    <>
      <div className={styles.container}>
        <section data-aos="fade-right">
          <h1># About Cork</h1>
        </section>

        <div className={styles.itemContainer}>
          <div data-aos="fade-right">
            <p>Este blog que tem o objetivo de integrar a comunidade brasileira vivendo na cidade de Cork, na Irlanda.</p>
            <p>A ideia é trazer conteúdo de forma simples, rápida e direta sobre dúvidas, dicas, recomendações e histórias!</p>
          </div>

        </div>
      </div>
    </>
  );
}
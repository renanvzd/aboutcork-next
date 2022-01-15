import Head from 'next/head';
import { HomeFirstSection } from '../components/HomeFirstSection';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Cork</title>
      </Head>

      <HomeFirstSection />

      <div className={styles.containerHistory}>
        <main className={styles.contentContainerB}>
          <div className={styles.contentText}>
            <p><b>About Cork</b> é um blog que tem o objetivo de integrar a comunidade brasileira na cidade de Cork, na Irlanda.</p>
            <p>A ideia é trazer conteúdo de forma simples, rápida e direta sobre dúvidas, dicas, histórias e recomendações!</p>
            <p>Se você deseja contribuir indicando perguntas ou complementar respostas, divulgar sua história ou trabalho, teremos o maior prazer em disponibilizar o espaço.</p>
            <p>After all, this is Cork for brazilians!!</p>

          </div>

          <div className={styles.containerTopics}>

            <div className={styles.topics}>
              <div className={styles.left}>
                <div className={styles.contentTopic}>
                  <h1>Histórias e experiências</h1>
                  <p>
                    <span>Conheça histórias de quem já foi!</span>
                  </p>
                </div>
              </div>

              <div className={styles.topics}>
                <div className={styles.right}>
                  <div className={styles.contentTopic}>
                    <h1>Dúvidas frequentes</h1>
                    <p>
                      <span>Encontre a resposta para aquela dúvida que cedo ou tarde vai acontecer!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.topics}>
                <div className={styles.left}>
                  <div className={styles.contentTopic}>
                    <h1>Dicas</h1>
                    <p>
                      <span>Conheça histórias de quem já foi!</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.topics}>
                <div className={styles.right}>
                  <div className={styles.contentTopic}>
                    <h1>Galeria</h1>
                    <p>
                      <span>Confira fotos de lugares turísticos e eventos!</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}

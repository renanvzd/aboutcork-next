import Head from 'next/head';
import styles from './styles.module.scss';


export default function Recomendacoes() {
  return (
    <>
      <Head>
        <title>Recomendações | Cork</title>
      </Head>

      <main className={styles.container}>
        <div>

          <div className={styles.profile}>
            <h2>Perfis Instagram/Youtube</h2>

            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Casal em Cork</p>
              </div>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/bahcork.jpg" alt="Bah Cork" />
              <div>
                <p>Bah Cork</p>
                <p></p>
              </div>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/MarlleyraBR.jpg" alt="MarlleyraBR" />
              <div>
                <p>MarlleyraBR</p>
                <p></p>
              </div>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/nosduaspelaestrada.jpg" alt="Nós Duas pela Estrada" />
              <div>
                <p>Nós Duas pela Estrada</p>
                <div className={styles.socialMedia}>
                  <div>
                    <a
                      href="https://www.facebook.com/pousadatramandai"
                      target="_blank"
                      title="Visite nosso facebook"
                      rel="noreferrer"
                    >
                      <img src="/images/Facebook.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg"
                      target="_blank"
                      title="Visite nosso canal"
                      rel="noreferrer"
                    >
                      <img src="/images/YouTube.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/moradas_do_pe_grande_tramandai/"
                      target="_blank"
                      title="Visite nosso Instagram"
                      rel="noreferrer"
                    >
                      <img src="/images/Instagram_new.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className={styles.profile}>
            <h2>Sites de Interesse Público</h2>

            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Casal em Cork</p>
              </div>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/bahcork.jpg" alt="Bah Cork" />
              <div>
                <p>Casal em Cork</p>
              </div>
            </div>

          </div>

          <div className={styles.profile}>
            <h2>Comunidade Brasileira</h2>
            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Renan Veronez Drechsler</p>
              </div>
            </div>

          </div>




        </div>
      </main>
    </>
  )
}
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
            <div className={styles.title}>
              <h2>Instagram e Youtube</h2>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Casal em Cork</p>
                <div className={styles.socialMedia}>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UCb8Jf1A0laXF7O-b6up1FJg"
                      target="_blank"
                      title="Visite nosso canal"
                      rel="noreferrer"
                    >
                      <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
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
            <div className={styles.title}>
              <h2>Interesse Público</h2>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Casal em Cork</p>
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
                      <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
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
            <div className={styles.title}>
              <h2>Comunidade Brasileira</h2>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/casalemcork.jpg" alt="ireland" />
              <div>
                <p>Renan Veronez Drechsler</p>
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
                      <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
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
        </div>
      </main>
    </>
  )
}
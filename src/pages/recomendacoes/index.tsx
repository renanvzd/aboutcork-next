import Head from 'next/head';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

interface HomeProps {
  influencers: {
    uid?: string;
    data: {
      name: string;
      youtube: string;
      instagram?: string;
      logo: string;
    }
  }[];
}


export default function Recomendacoes({ influencers }: HomeProps) {

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
            {influencers.map((influencer) => (
              <div key={influencer.uid} className={styles.profileDetails}>
                <img src={influencer.data.logo} alt="ireland" />
                <div>
                  <p>{influencer.data.name}</p>
                  <div className={styles.socialMedia}>
                    <div>
                      <a
                        href={influencer.data.youtube}
                        target="_blank"
                        title="Visite nosso Canal"
                        rel="noreferrer"
                      >
                        <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
                      </a>
                    </div>
                    <div>
                      <a
                        href={influencer.data.instagram}
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
            ))}
          </div>

          <div className={styles.profile}>
            <div className={styles.title}>
              <h2>Interesse Público</h2>
            </div>

            <a
              href='https://www.daft.ie/'
              target="_blank"
              title="Visite nosso Instagram"
              rel="noreferrer"
            >
              <div className={styles.profileDetails}>

                <img src="https://i.imgur.com/iNE9JAh.png" alt="Leap Card"
                  className={styles.businessImage}
                />
                <div className={styles.businessData}>
                  <p className={styles.business}>Daft.ie</p>
                  <p className={styles.tema}>
                    [Imobiliária]
                  </p>
                </div>
              </div>
            </a>

          </div>

          <div className={styles.profile}>
            <div className={styles.title}>
              <h2>Comunidade Brasileira</h2>
            </div>

            <div className={styles.profileDetails}>
              <img src="/images/renan.jpg" alt="ireland" />
              <div>
                <p>Renan Veronez Drechsler</p>
                <div className={styles.socialMedia}>

                  <div>
                    <a
                      href="https://www.linkedin.com/in/renan-veronez-drechsler-54a4801a3/"
                      target="_blank"
                      title="Visite nosso canal"
                      rel="noreferrer"
                    >
                      <img src="/images/linkedin.svg" alt="Facebook" className={styles.mediaImg} />
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://www.facebook.com/renan.veronezdrechsler"
                      target="_blank"
                      title="Visite nosso facebook"
                      rel="noreferrer"
                    >
                      <img src="/images/Facebook.svg" alt="Facebook" className={styles.mediaImg} />
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


export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const influencersResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'influencer')],
  );

  const influencers = influencersResponse.results.map(influencer => {
    return {
      uid: influencer.uid,
      data: {
        name: influencer.data.name,
        youtube: influencer.data.youtube,
        instagram: influencer.data.instagram,
        logo: influencer.data.logo.url,
      },
    };
  });

  return {
    props: {
      influencers,
    },
  };
};

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
      youtube?: string;
      instagram?: string;
      logo: string;
    }
  }[];
  business: {
    uid?: string;
    data: {
      name: string;
      segment: string;
      logo: string;
      link: string;
    }
  }[];
  comunidade: {
    uid?: string;
    data: {
      name: string;
      linkedin: string;
      facebook: string;
      instagram?: string;
      logo: string;
    }
  }[];
}


export default function Recomendacoes({ influencers, business, comunidade }: HomeProps) {

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
                <div className={styles.logo}>
                  <img src={influencer.data.logo} alt="ireland" />
                </div>
                <div>
                  <p>{influencer.data.name}</p>
                  <div className={styles.socialMedia}>
                    {influencer.data.youtube ?
                      (<div>
                        <a
                          href={influencer.data.youtube}
                          target="_blank"
                          title="Visite nosso Canal"
                          rel="noreferrer"
                        >
                          <img src="/images/Youtube.svg" alt="Facebook" className={styles.mediaImg} />
                        </a>
                      </div>)
                      : ''
                    }
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
            {business.map((busi) => (
              <a
                href={busi.data.link}
                target="_blank"
                title="Visite nosso Instagram"
                rel="noreferrer"
                key={busi.uid}
              >
                <div className={styles.profileDetails}>
                  <div className={styles.logo}>
                    <img src={busi.data.logo} alt={busi.data.name}
                      className={styles.businessImage}
                    />
                  </div>
                  <div className={styles.businessData}>
                    <p className={styles.business}>{busi.data.name}</p>
                    <p className={styles.tema}>
                      ({busi.data.segment})
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className={styles.profile}>
            <div className={styles.title}>
              <h2>Comunidade Brasileira</h2>
            </div>

            {comunidade.map((comunidad) => (
              <div key={comunidad.uid} className={styles.profileDetails}>
                <div className={styles.logo}>
                  <img src={comunidad.data.logo} alt={comunidad.data.name} />
                </div>
                <div>
                  <p>{comunidad.data.name}</p>
                  <div className={styles.socialMedia}>
                    {comunidad.data.linkedin ?
                      (<div>
                        <a
                          href={comunidad.data.linkedin}
                          target="_blank"
                          title="Conectar no Linkedin"
                          rel="noreferrer"
                        >
                          <img src="/images/linkedin.svg" alt="Linkedin" className={styles.mediaImg} />
                        </a>
                      </div>)
                      : null
                    }

                    {comunidad.data.facebook ?
                      (<div>
                        <a
                          href={comunidad.data.facebook}
                          target="_blank"
                          title="Adicione no Facebook"
                          rel="noreferrer"
                        >
                          <img src="/images/Facebook.svg" alt="Facebook" className={styles.mediaImg} />
                        </a>
                      </div>)
                      : null
                    }

                    {comunidad.data.instagram ?
                      (<div>
                        <a
                          href={comunidad.data.instagram}
                          target="_blank"
                          title="Adicione no Instagram"
                          rel="noreferrer"
                        >
                          <img src="/images/Instagram_new.svg" alt="Instagram" className={styles.mediaImg} />
                        </a>
                      </div>)
                      : null
                    }
                  </div>
                </div>
              </div>
            ))}
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

  const businessResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'interessepublico')],
  );

  const business = businessResponse.results.map(interessepublico => {
    return {
      uid: interessepublico.uid,
      data: {
        name: interessepublico.data.name,
        segment: interessepublico.data.segment,
        logo: interessepublico.data.logo.url,
        link: interessepublico.data.link,
      },
    };
  });


  const comunidadeResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'comunidade')],
  );

  const comunidade = comunidadeResponse.results.map(comunidade => {
    return {
      uid: comunidade.uid,
      data: {
        name: comunidade.data.name,
        linkedin: comunidade.data.linkedin,
        facebook: comunidade.data.facebook,
        instagram: comunidade.data.instagram,
        logo: comunidade.data.logo.url,
      },
    };
  });

  return {
    props: {
      influencers,
      business,
      comunidade,
    },
  };
};

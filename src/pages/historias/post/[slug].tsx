import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { FiCalendar, FiUser, FiClock } from 'react-icons/fi';

import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';
import { useRouter } from 'next/router';
import { getPrismicClient } from '../../../services/prismic';

import styles from './post.module.scss';

import { formatDate } from '../../../utils';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
    content: {
      heading: string;
      textContent: {
        text: string;
      }[];
      imageContent: {
        url: string;
      };
    }[];
    body: {
      text: string;
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps): JSX.Element {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Carregando...</h1>;
  }

  const totalWords = post.data.content.reduce(
    (totalContent, currentContent) => {
      const headingWords = currentContent.heading?.split(' ').length || 0;

      const bodyWords = currentContent.textContent.reduce((totalBody, currentBody) => {
        const textWords = currentBody.text.split(' ').length;
        return totalBody + textWords;
      }, 0);

      return totalContent + headingWords + bodyWords;
    },
    0
  );

  const timeEstimmed = Math.ceil(totalWords / 200);

  return (
    <>
      <Head>
        <title>{post.data.title} | spacetraveling</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.hero}>

          <div className={styles.titlePost}>{post.data.title}</div>
          <div className={styles.subsection}>
            <div className={styles.schedule}>
              <FiCalendar />
              <span>{formatDate(post.first_publication_date)}</span>
            </div>
            <div className={styles.author}>
              <FiUser />
              <span> {post.data.author}</span>
            </div>
            <div className={styles.timeReading}>
              <time>
                <FiClock />
                <span>{timeEstimmed} min</span>
              </time>
            </div>
          </div>

        </section>
        {post.data.content.map(content => {
          return (
            <section className={styles.containerContent}>
              <div key={content.heading} className={styles.postContent}>
                {/* <img
                  src={content.imageContent.url}
                  alt="image"
                  className={styles.banner}
                /> */}
                <h2 className={styles.headerPost}>{content.heading}</h2>
                <div
                  className={styles.contentBody1}
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(content.textContent),
                  }}
                />
              </div>

            </section>
          );
        })}
        <section className={styles.containerContent}>
          <div
            className={styles.contentBody2}
            dangerouslySetInnerHTML={{
              __html: RichText.asHtml(post.data.body),
            }}
          />
        </section>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.Predicates.at('document.type', 'history'),
  ]);

  const paths = posts.results.map(post => {
    return {
      params: {
        slug: post.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('history', String(slug), {});

  // console.log("Resposta do getByUID");
  // console.log(JSON.stringify(response, null, 2));

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      content: response.data.content.map(content => {
        return {
          heading: content.heading,
          textContent: [...content.textcontent],
          imageContent: {
            url: content.imagecontent.url,
          },
        };
      }),
      body: response.data.body,
    },
  };

  return {
    props: {
      post,
    },
  };
};

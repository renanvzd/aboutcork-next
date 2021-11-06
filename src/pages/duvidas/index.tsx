import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import Link from 'next/link';
import styles from './styles.module.scss';

type Duvida = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
}

interface DuvidasProps {
  duvidas: Duvida[]
}

export default function Duvidas({ duvidas }: DuvidasProps) {
  return (
    <>
      <Head>
        <title>Duvidas | Cork</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.duvidas}>
          {duvidas.map(duvida => (
            <Link href={`/duvidas/${duvida.slug}`}>
              <a key={duvida.slug} >
                <time>{duvida.updatedAt}</time>
                <strong>{duvida.title}</strong>
                <p>{duvida.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'duvida')
  ], {
    fetch: ['duvida.title', 'duvida.content'],
    pageSize: 100,
  })

  const duvidas = response.results.map(duvida => {
    return {
      slug: duvida.uid,
      title: RichText.asText(duvida.data.title),
      excerpt: duvida.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(duvida.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    };
  });

  return {
    props: {
      duvidas
    }
  }
}
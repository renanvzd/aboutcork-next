import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import Head from 'next/head';
import styles from './styles.module.scss';
import { MdArrowForward } from 'react-icons/md'


type Duvida = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
  isOpen: boolean;
}

interface DuvidasProps {
  duvidas: Duvida[]
}

export default function Dicas({ duvidas }: DuvidasProps) {
  const [excerpt, setExcerpt] = useState<Duvida[]>(duvidas)

  function handleToggleShowAnswer(index: number) {
    const copyOfArray = [...excerpt];

    copyOfArray[index].isOpen = !copyOfArray[index].isOpen;

    setExcerpt(copyOfArray)

  }

  return (
    <>
      <Head>
        <title>Duvidas | Cork</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.duvidas}>
          {duvidas.map((duvida, index) => (
            <section key={duvida.slug} >
              <time>{duvida.updatedAt}</time>
              <strong
                onClick={() => handleToggleShowAnswer(index)}>
                <MdArrowForward />{' '}
                {duvida.title}
              </strong>
              {excerpt[index].isOpen ?
                <div
                  dangerouslySetInnerHTML={{ __html: duvida.excerpt }}
                />
                : null
              }
            </section>
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
      excerpt: RichText.asHtml(duvida.data.content),
      updatedAt: new Date(duvida.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
      isOpen: false,
    };
  });

  return {
    props: {
      duvidas,
    },
    redirect: 60 * 60 * 12 // 30 minutes
  }
}


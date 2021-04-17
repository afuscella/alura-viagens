import React from 'react';
import Head from 'next/head';

interface ISEO {
  headTitle?: string;
}

export function SEO({ headTitle }: ISEO) {
  const hasHeadTitle = Boolean(headTitle);
  const baseTitle = 'Alura Viagens';
  const title = hasHeadTitle
    ? `${headTitle} | ${baseTitle}`
    : `${baseTitle}`;

  const description = 'Está preparado para sua próxima viagem? Venha e agende já seu próximo destino!';
  const image = 'https://alura-viagens-oarthursilva.vercel.app/images/alura-viagens.png';
  const urlBase = 'https://alura-viagens-oarthursilva.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

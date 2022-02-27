import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

function CustomPageTitle({ title }: Props) {
  return (
    <Head>
      {/* viewport meta is here because of https://nextjs.org/docs/messages/no-document-viewport-meta */}
      <meta name='viewport' content='viewport-fit=cover' />
      <title>{title}</title>
    </Head>
  );
}

export default CustomPageTitle;

import React from 'react';
import Head from 'next/head';

interface Props {
  title: string;
}

function CustomPageTitle({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default CustomPageTitle;

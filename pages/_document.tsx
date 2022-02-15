import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          {/* Eczar */}
          <link href='https://fonts.googleapis.com/css2?family=Eczar&display=swap' rel='stylesheet'></link>

          {/* font-family: 'Andika', sans-serif; */}
          <link href='https://fonts.googleapis.com/css2?family=Martel&display=swap' rel='stylesheet' />

          {/* font-family: 'Averia Serif Libre', cursive; */}
          <link href='https://fonts.googleapis.com/css2?family=Averia+Serif+Libre&display=swap' rel='stylesheet'></link>

          {/* font-family: 'Roboto', sans-serif; */}
          <link href='https://fonts.googleapis.com/css2?family=Belleza&display=swap' rel='stylesheet' />

          {/* font-family: 'Belleza', sans-serif; */}
          <link href='https://fonts.googleapis.com/css2?family=Belleza&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

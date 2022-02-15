import type { AppProps } from 'next/app';
import Layout from '@comp/Layout';
import GlobalStyle from '@style/GlobalStyle';
import { theme } from '@style/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;

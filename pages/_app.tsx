import {AppProps} from 'next/app';

import '../dank-mono.css';
import '../global.css';
import {Header, Footer, Layout} from '../components';

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Layout>
  );
}

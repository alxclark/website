import {AppProps} from 'next/app';

import '../dank-mono.css';
import '../global.css';
import {Header, Footer} from '../components';

export default function App({Component, pageProps}: AppProps) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

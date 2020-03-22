import {AppProps} from 'next/app';

import '../dank-mono.css';
import '../global.css';
import {Header, Footer, Layout, PostTime, Italic} from '../components';
import {MDXProvider} from '@mdx-js/react';
import {Post} from '../types';
import {BackDrop} from '../components/BackDrop';
import {BlockStack} from '../components/BlockStack';

interface WrapperProps {
  frontMatter: Post;
  children: React.ReactNode;
}

const Wrapper = ({children, frontMatter}: WrapperProps) => {
  return (
    <div>
      <h1 style={{visibility: 'hidden', height: 0}}>{frontMatter.title}</h1>
      <BlockStack>
        <BackDrop poster={frontMatter.poster} alignment="center" />
        <BlockStack spacing="tight">
          <h2>{frontMatter.subtitle}</h2>
          <Italic post={frontMatter}>{frontMatter.date}</Italic>
          <PostTime post={frontMatter} />
        </BlockStack>
        <BlockStack>{children}</BlockStack>
      </BlockStack>
    </div>
  );
};

const MDX = ({children}: any) => (
  <MDXProvider
    components={{wrapper: Wrapper, em: (props) => <Italic {...props} />}}
  >
    {children}
  </MDXProvider>
);

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Header />
      <main>
        <MDX>
          <Component {...pageProps} />
        </MDX>
      </main>
      <Footer />
    </Layout>
  );
}

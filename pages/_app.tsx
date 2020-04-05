import {AppProps} from 'next/app';

import '../dank-mono.css';
import '../global.css';
import React from 'react';
import {
  Header,
  Footer,
  Layout,
  PostTime,
  Italic,
  CodeBlock,
  Link,
} from '../components';
import {MDXProvider} from '@mdx-js/react';
import {Post} from '../types';
import {BackDrop} from '../components/BackDrop';
import {BlockStack} from '../components/BlockStack';
import {Code} from '../components/Code';
import {List} from '../components/List';
import Head from 'next/head';

interface WrapperProps {
  frontMatter: Post;
  children: React.ReactNode;
}

export const PostContext = React.createContext<Post | undefined>(undefined);

export function usePost() {
  const post = React.useContext(PostContext);

  if (post == null) {
    throw new Error('No Post available in context');
  }

  return post;
}

function PostItalic({children}: {children: React.ReactNode}) {
  const post = usePost();
  return <Italic post={post}>{children}</Italic>;
}

function PostInlineCode({children}: {children: React.ReactNode}) {
  const post = usePost();
  return <Code post={post}>{children}</Code>;
}

function PostLink({children, href}: {children: React.ReactNode; href: string}) {
  const post = usePost();
  return (
    <Link href={href} post={post}>
      {children}
    </Link>
  );
}

function PostList({children}: {children: React.ReactNode}) {
  const post = usePost();
  return <List post={post}>{children}</List>;
}

// Tweet @alxclark
// https://twitter.com/intent/tweet?screen_name=alxclrk&ref_src=twsrc%5Etfw
// <a href="https://twitter.com/intent/tweet?screen_name=alxclrk&ref_src=twsrc%5Etfw" class="twitter-mention-button" data-text="About jest basic" data-lang="en" data-show-count="false">Tweet to @alxclrk</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

// Share https://twitter.com/intent/tweet?in_reply_to=tweet_id
// Like https://twitter.com/intent/like?in_reply_to=tweet_id
// Comment https://twitter.com/intent/tweet?in_reply_to=tweet_id

const Wrapper = ({children, frontMatter}: WrapperProps) => {
  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{visibility: 'hidden', height: 0}}>{frontMatter.title}</h1>
      <BlockStack>
        <BackDrop posts={[frontMatter]} alignment="center" />
        <BlockStack spacing="tight">
          <h2>{frontMatter.subtitle}</h2>
          <Italic post={frontMatter}>{frontMatter.date}</Italic>
          <PostTime post={frontMatter} />
        </BlockStack>
        <BlockStack>
          <PostContext.Provider value={frontMatter}>
            {children}
          </PostContext.Provider>
        </BlockStack>
      </BlockStack>
    </div>
  );
};

const MDX = ({children}: any) => (
  <MDXProvider
    components={{
      wrapper: Wrapper,
      em: (props) => <PostItalic {...props} />,
      code: (props) => <CodeBlock {...props} />,
      inlineCode: (props) => <PostInlineCode {...props} />,
      a: (props) => <PostLink {...props} />,
      ul: (props) => <PostList {...props} />,
    }}
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

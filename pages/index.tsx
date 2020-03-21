import Head from 'next/head';
import {BackDrop} from '../components/BackDrop';
import {MeLink, PostsLink} from '../components';
import {BlockStack} from '../components/BlockStack';

const Meta = () => (
  <Head>
    <title>Alex Clark</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

const Home = () => {
  return (
    <>
      <Meta />
      <div className="container">
        <BackDrop />
        <BlockStack alignment="center" spacing="loose">
          <MeLink />
          <PostsLink />
        </BlockStack>
      </div>
    </>
  );
};

export default Home;

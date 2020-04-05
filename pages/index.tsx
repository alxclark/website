import Head from 'next/head';
import {GetStaticProps} from 'next';
import {BackDrop} from '../components/BackDrop';
import * as fse from 'fs-extra';
import matter from 'gray-matter';
import {Post} from '../types';
import {PostThumbnail} from '../components';
import {BlockStack} from '../components/BlockStack';

const Meta = () => (
  <Head>
    <title>Alex Clark</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

interface Props {
  posts: Post[];
}

export default function Home({posts}: Props) {
  return (
    <>
      <Meta />
      <div className="container">
        <BackDrop posts={posts} />
        <BlockStack spacing="loose" as="ul">
          {posts.map((post) => (
            <PostThumbnail post={post} key={post.slug} />
          ))}
        </BlockStack>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (_context) => {
  return {
    props: {
      posts: await getPosts(),
    },
  };
};

async function getPosts() {
  try {
    const posts: Post[] = [];
    const filenames = await fse.readdir('./pages/posts');

    for (const filename of filenames) {
      const path = `./pages/posts/${filename}`;
      const content = await fse.readFile(path, 'UTF8');
      const md = matter(content);
      posts.push({
        ...md.data,
        slug: filename
          .split('.')
          .slice(0, -1)
          .join('.'),
      } as Post);
    }
    return posts;
  } catch (error) {
    throw new Error('Failed reading /pages/posts directory');
  }
}

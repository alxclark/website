import Link from 'next/link';
import styles from './PostsLink.module.css';
import {InlineStack} from '../InlineStack';

export function PostsLink() {
  return (
    <Link href="/posts">
      <a>
        <InlineStack spacing="tight">
          <div className={styles.text}>posts</div>
          <div className={styles.emoji}>📪</div>
        </InlineStack>
      </a>
    </Link>
  );
}

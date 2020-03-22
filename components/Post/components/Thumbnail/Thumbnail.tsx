import Link from 'next/link';
import {Post} from '../../../../types';

import {Time} from '../Time';

import styles from './Thumbnail.module.css';

export interface Props {
  post: Post;
  onHover?: (post: Post) => void;
}

export function Thumbnail({post, onHover}: Props) {
  return (
    <li>
      <Link href={`posts/${post.slug}`}>
        <a className={styles.Link} onMouseEnter={() => onHover?.(post)}>
          <h2>{post.title}</h2>
        </a>
      </Link>
      <h3>{post.subtitle}</h3>
      <Time post={post} />
    </li>
  );
}

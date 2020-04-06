import Link from 'next/link';
import {useState} from 'react';

import {Post} from '../../../../types';
import {Time} from '../Time';

import styles from './Thumbnail.module.css';

export interface Props {
  post: Post;
  onHover?: (post: Post) => void;
}

export function Thumbnail({post, onHover}: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      <Link href={`posts/${post.slug}`}>
        <a
          className={styles.Link}
          onFocus={() => {
            onHover?.(post);
            setHovered(true);
          }}
          onMouseEnter={() => {
            onHover?.(post);
            setHovered(true);
          }}
          onMouseOut={() => {
            setHovered(false);
          }}
          onBlur={() => {
            setHovered(false);
          }}
          style={hovered ? {color: `#${post.color}`} : {}}
        >
          <h2>{post.title}</h2>
        </a>
      </Link>
      <h3>{post.subtitle}</h3>
      <Time post={post} />
    </li>
  );
}

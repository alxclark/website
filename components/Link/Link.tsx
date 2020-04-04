import React from 'react';

import styles from './Link.module.css';
import {Post} from '../../types';

export interface Props {
  children: React.ReactNode;
  post?: Post;
  href?: string;
}

export function Link({children, post, href}: Props) {
  return (
    <a
      href={href}
      style={post ? {color: `#${post.color}`} : {}}
      className={styles.Link}
    >
      {children}
    </a>
  );
}

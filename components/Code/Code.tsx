import React from 'react';

import styles from './Code.module.css';
import {Post} from '../../types';

export interface Props {
  children: React.ReactNode;
  post?: Post;
}

export function Code({children, post}: Props) {
  return (
    <code style={post ? {color: `#${post.color}`} : {}} className={styles.Code}>
      {children}
    </code>
  );
}

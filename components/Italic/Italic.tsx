import React from 'react';

import styles from './Italic.module.css';
import {Post} from '../../types';

export interface Props {
  children: React.ReactNode;
  post?: Post;
}

export function Italic({children, post}: Props) {
  return (
    <i style={post ? {color: `#${post.color}`} : {}} className={styles.Italic}>
      {children}
    </i>
  );
}

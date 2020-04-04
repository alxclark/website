import React from 'react';

import styles from './List.module.css';
import {Post} from '../../types';

export interface Props {
  children: React.ReactNode;
  post?: Post;
}

export function List({children, post}: Props) {
  return (
    <ul className={styles.List}>
      {React.Children.map(children, (child) => (
        <div className={styles.Container}>
          <div
            className={styles.Dot}
            style={post ? {background: `#${post.color}`} : {}}
          />
          {child}
        </div>
      ))}
    </ul>
  );
}

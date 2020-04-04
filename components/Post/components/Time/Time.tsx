import React from 'react';
import {Post} from '../../../../types';

import styles from './Time.module.css';

export interface Props {
  post: Post;
}

export function Time({post}: Props) {
  function TimeEmoji() {
    if (post.time < 10) {
      return <>☕</>;
    } else if (post.time < 20) {
      return <>🥤</>;
    } else {
      return <>🍿</>;
    }
  }

  return (
    <span className={styles.Time}>
      {post.time} min read <TimeEmoji />
    </span>
  );
}

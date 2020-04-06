import classNames from 'classnames';

import {Post} from '../../types';

import styles from './BackDrop.module.css';

export interface Props {
  posts: Post[];
  alignment?: 'center' | 'right';
}

export function BackDrop({posts, alignment = 'right'}: Props) {
  return (
    <>
      <div className={classNames(styles.BackDrop, {[styles[alignment]]: true})}>
        {posts.slice(0, 3).map((post) => (
          <picture key={post.slug}>
            <source type="image/webp" srcSet={`/${post.poster}.webp`} />
            <source type="image/png" srcSet={`/${post.poster}.png`} />
            <img src={`/${post.poster}.png`} alt={post.title} />
          </picture>
        ))}
      </div>
      {alignment && alignment === 'center' && <div className={styles.block} />}
    </>
  );
}

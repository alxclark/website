import classNames from 'classnames';
import styles from './BackDrop.module.css';
import {Poster1, Poster0} from '../../icons';
import {Post} from '../../types';

export interface Props {
  posts: Post[];
  alignment?: 'center' | 'right';
}

export function BackDrop({posts, alignment = 'right'}: Props) {
  return (
    <>
      <div className={classNames(styles.BackDrop, {[styles[alignment]]: true})}>
        {posts.slice(0, 3).map((post) => {
          switch (post.poster) {
            case 'Poster0':
              return <Poster0 key={post.slug} />;
            case 'Poster1':
              return <Poster1 key={post.slug} />;
            default:
              return null;
          }
        })}
      </div>
      {alignment && alignment === 'center' && <div className={styles.block} />}
    </>
  );
}

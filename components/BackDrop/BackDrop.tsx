import classNames from 'classnames';
import styles from './BackDrop.module.css';
import {Poster1, Poster0} from '../../icons';
import {Post} from '../../types';

export interface Props {
  poster: Post['poster'];
  alignment?: 'center' | 'right';
}

export function BackDrop({poster, alignment = 'right'}: Props) {
  return (
    <>
      <div className={classNames(styles.BackDrop, {[styles[alignment]]: true})}>
        {poster === 'Poster1' && <Poster1 />}
        {poster === 'Poster0' && <Poster0 />}
      </div>
      {alignment && alignment === 'center' && <div className={styles.block} />}
    </>
  );
}

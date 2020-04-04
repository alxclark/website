import styles from './FixedContainer.module.css';

export interface Props {
  side: 'left' | 'right';
  children: React.ReactNode;
}

export function FixedContainer({children}: Props) {
  return <div className={styles.FixedContainer}>{children}</div>;
}

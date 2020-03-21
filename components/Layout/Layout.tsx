import styles from './Layout.module.css';

export interface Props {
  children: React.ReactNode;
}

export function Layout({children}: Props) {
  return <div className={styles.Layout}>{children}</div>;
}

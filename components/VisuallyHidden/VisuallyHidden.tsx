import styles from './VisuallyHidden.module.css';

interface Props {
  children: React.ReactNode;
}

export const VisuallyHidden = ({children}: Props) => (
  <span className={styles.VisuallyHidden} children={children} />
);

import styles from './Header.module.css';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <a>{'<alex.clark />'}</a>
      </Link>
    </header>
  );
}

import Link from 'next/link';
import styles from './MeLink.module.css';
import {InlineStack} from '../InlineStack';

export function MeLink() {
  return (
    <Link href="/about">
      <a>
        <InlineStack spacing="tight">
          <div className={styles.text}>me</div>
          <div className={styles.emoji}>👋</div>
        </InlineStack>
      </a>
    </Link>
  );
}

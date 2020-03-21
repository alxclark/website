import NextLink, {LinkProps} from 'next/link';

import styles from './Link.module.css';
import {CSSProperties} from 'react';

export interface Props extends LinkProps {
  children: React.ReactNode;
  external?: boolean;
  style?: CSSProperties;
}

export function Link(props: Props) {
  if (props.external) {
    if (typeof props.href === 'string') {
      return (
        <a href={props.href} style={props.style}>
          <span className={styles.Link}>{props.children}</span>
        </a>
      );
    }
    throw new Error('A link cannot be external and have an object href');
  }
  return (
    <NextLink {...props}>
      <a>
        <span className={styles.Link}>{props.children}</span>
      </a>
    </NextLink>
  );
}

import NextLink, {LinkProps} from 'next/link';

import styles from './Link.module.css';

export interface Props extends LinkProps {
  children: React.ReactNode;
  external?: boolean;
}

export function Link(props: Props) {
  if (props.external) {
    if (typeof props.href === 'string') {
      return (
        <a className={styles.Link} href={props.href}>
          {props.children}
        </a>
      );
    }
    throw new Error('A link cannot be external and have an object href');
  }
  return (
    <NextLink {...props}>
      <a className={styles.Link}>{props.children}</a>
    </NextLink>
  );
}

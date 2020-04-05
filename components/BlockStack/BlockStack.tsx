import classNames from 'classnames';

import styles from './BlockStack.module.css';

type Alignment = 'leading' | 'center' | 'trailing' | 'unset';

type Spacing = 'tight' | 'base' | 'loose';

export interface Props {
  alignment?: Alignment;
  spacing?: Spacing;
  children: React.ReactNode;
  as?: 'div' | 'ul';
}

export function BlockStack({
  alignment = 'unset',
  spacing = 'base',
  children,
  as: Element = 'div',
}: Props) {
  const className = classNames(styles.BlockStack, {
    [styles[alignment]]: true,
    [styles[spacing]]: true,
  });
  return <Element className={className}>{children}</Element>;
}

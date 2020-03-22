import classNames from 'classnames';

import styles from './BlockStack.module.css';

type Alignment = 'leading' | 'center' | 'trailing' | 'unset';

type Spacing = 'tight' | 'base' | 'loose';

export interface Props {
  alignment?: Alignment;
  spacing?: Spacing;
  children: React.ReactNode;
}

export function BlockStack({
  alignment = 'unset',
  spacing = 'base',
  children,
}: Props) {
  const className = classNames(styles.BlockStack, {
    [styles[alignment]]: true,
    [styles[spacing]]: true,
  });
  return <div className={className}>{children}</div>;
}

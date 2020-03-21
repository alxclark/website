import classNames from 'classnames';

import styles from './BlockStack.module.css';

type Alignment = 'leading' | 'center' | 'trailing';

type Spacing = 'tight' | 'loose';

export interface Props {
  alignment?: Alignment;
  spacing?: Spacing;
  children: React.ReactNode;
}

export function BlockStack({
  alignment = 'leading',
  spacing = 'tight',
  children,
}: Props) {
  const className = classNames(styles.BlockStack, {
    [styles[alignment]]: true,
    [styles[spacing]]: true,
  });
  return <div className={className}>{children}</div>;
}

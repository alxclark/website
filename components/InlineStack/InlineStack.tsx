import classNames from 'classnames';

import styles from './InlineStack.module.css';

type Spacing = 'tight' | 'base' | 'loose';
type Distribution = ('fill' | 'auto')[];
type Alignment = 'leading' | 'center' | 'trailing' | 'apart';

export interface Props {
  spacing?: Spacing;
  fill?: boolean;
  alignment?: Alignment;
  distribution?: Distribution;
  children: React.ReactNode;
  as?: 'div' | 'ul';
}

export function InlineStack({
  spacing = 'tight',
  alignment = 'leading',
  distribution,
  children,
  as: Element = 'div',
}: Props) {
  const className = classNames(styles.InlineStack, {
    [styles[spacing]]: true,
    [styles[alignment]]: true,
  });

  const style = distribution
    ? {gridTemplateColumns: convertDistributionValues(distribution)}
    : undefined;

  return (
    <Element className={className} style={style}>
      {children}
    </Element>
  );
}

function convertDistributionValues(distribution: Distribution) {
  const newDistribution = distribution.map((value) => {
    if (value === 'fill') {
      return '1fr';
    }
    return value;
  });

  return newDistribution.join(' ');
}

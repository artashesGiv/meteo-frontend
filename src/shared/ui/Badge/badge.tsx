import { memo, useMemo } from 'react';

import './badge.scss';

export type BadgeProps = DefaultProps<{
  text?: string;
}>;

export const Badge = memo<BadgeProps>(props => {
  const { text } = props;

  const classes = useBadgeClasses(props);

  return <div className={classes}>{text}</div>;
});

Badge.displayName = 'Button';

const useBadgeClasses = ({ className }: BadgeProps) =>
  useMemo(() => {
    const classes = [className, 'badge'];

    return classes.join(' ');
  }, [className]);

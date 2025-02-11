import { memo, useMemo } from 'react';

import './divider.scss';

type DividerView = 'dark' | 'light';

export type DividerProps = DefaultProps<{
  view?: DividerView;
}>;

export const Divider = memo<DividerProps>(props => {
  const classes = useDividerClasses(props);

  return <div className={classes} />;
});

Divider.displayName = 'Divider';

const useDividerClasses = ({ className, view }: DividerProps) =>
  useMemo(() => {
    const classes = [className, 'divider', `divider--view--${view}`];

    return classes.join(' ');
  }, [className, view]);

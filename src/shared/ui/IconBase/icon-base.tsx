import { memo, useMemo } from 'react';

import './icon-base.scss';

export type IconBaseProps = DefaultProps<{
  name: Icons;
}>;

export const IconBase = memo<IconBaseProps>(({ name, className }) => {
  const classes = useMemo(
    () => `${className} icon-base icon-${name}`,
    [name, className],
  );

  return <i className={classes} />;
});

IconBase.displayName = 'IconBase';

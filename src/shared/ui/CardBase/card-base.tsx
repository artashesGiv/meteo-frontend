import { memo, useMemo } from 'react';

import './card-base.scss';

export type CardBaseProps = DefaultPropsWithChildren<{
  size?: 's' | 'm' | 'l';
  view?: 'base' | 'fill';
  href?: string;
}>;

export const CardBase = memo<CardBaseProps>(
  ({ children, className = '', size = 'm', view = 'base', href, onClick }) => {
    const classes = useProjectCardClasses({
      className,
      size,
      view,
      onClick,
    });

    return (
      <div className={classes} onClick={onClick || undefined}>
        {children}
        {href && <a href={href} className='card-base__href' />}
      </div>
    );
  },
);

CardBase.displayName = 'CardBase';

const useProjectCardClasses = ({
  className,
  size,
  view,
  onClick,
}: CardBaseProps) =>
  useMemo(() => {
    const classes = [
      className,
      'card-base',
      `card-base--size--${size}`,
      `card-base--view--${view}`,
    ];

    if (onClick) {
      classes.push('is-interactive');
    }

    return classes.join(' ');
  }, [className, size, view, onClick]);

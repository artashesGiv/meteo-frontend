import { memo, useMemo } from 'react';

import Link from 'next/link';

import { IconBase } from '../IconBase';
import { TransitionBase } from '../TransitionBase';

import './nav-link.scss';

export type NavLinkProps = DefaultProps<{
  icon: Icons;
  href: string;
  title: string;
  isActive?: boolean;
  isCollapse?: boolean;
}>;

export const NavLink = memo<NavLinkProps>(props => {
  const { icon, href, title, isCollapse } = props;
  const classes = useNavLinkClasses(props);

  return (
    <Link href={href} className={classes}>
      <IconBase className='nav-link__icon' name={icon} />
      <TransitionBase isVisible={!isCollapse}>
        <span>{title}</span>
      </TransitionBase>
    </Link>
  );
});

NavLink.displayName = 'NavLink';

const useNavLinkClasses = ({ isActive, className, isCollapse }: NavLinkProps) =>
  useMemo(() => {
    const classes = [className, 'nav-link'];

    if (isCollapse) {
      classes.push('nav-link--collapse');
    }

    if (isActive) {
      classes.push('nav-link--active');
    }

    return classes.join(' ');
  }, [className, isActive, isCollapse]);

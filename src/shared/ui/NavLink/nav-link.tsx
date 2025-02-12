import { memo, useMemo } from 'react';

import Link from 'next/link';

import { IconBase, TransitionBase } from '@/shared';

import './nav-link.scss';

export type NavLinkProps = DefaultProps<{
  icon: Icons;
  href: string;
  title: string;
  isActive?: boolean;
  isHidden?: boolean;
}>;

export const NavLink = memo<NavLinkProps>(
  ({ className, icon, href, title, isActive, isHidden }) => {
    const classes = useNavLinkClasses(className, isActive);

    return (
      <Link href={href} className={classes}>
        <IconBase className='nav-link__icon' name={icon} />
        <TransitionBase isVisible={!isHidden}>
          <span>{title}</span>
        </TransitionBase>
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';

const useNavLinkClasses = (
  className: NavLinkProps['className'],
  isActive: NavLinkProps['isActive'],
) =>
  useMemo(() => {
    const classes = [className, 'nav-link', isActive && 'nav-link--active'];

    return classes.join(' ');
  }, [className, isActive]);

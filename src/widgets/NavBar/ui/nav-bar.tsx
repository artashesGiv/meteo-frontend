'use client';

import { memo, useMemo, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button, TransitionBase } from '@/shared';
import { NavLink, type NavLinkProps } from '@/shared/ui/NavLink';

import './nav-bar.scss';

export type NavBarProps = DefaultProps;

export const NavBar = memo<NavBarProps>(({ className }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const routes: NavLinkProps[] = [
    {
      href: '/data-collection',
      title: 'Сбор данных с метеостанций',
      icon: 'cross',
    },
    {
      href: '/geoinformation-system',
      title: 'Геоинформационная система',
      icon: 'chevron-bar-right',
    },
    {
      href: '/weather-forecast',
      title: 'Прогноз погоды',
      icon: 'chevron-bar-left',
    },
    {
      href: '/technological-maps',
      title: 'Технологические карты',
      icon: 'chevron-up',
    },
    {
      href: '/diseases',
      title: 'Болезни',
      icon: 'chevron-down',
    },
  ];

  const classes = useNavBarClasses(className, isCollapse);
  const pathname = usePathname();
  return (
    <div className={classes}>
      <div className='nav-bar__controls'>
        <TransitionBase isVisible={!isCollapse}>
          <Link href='/'>
            <Image
              src='https://placehold.co/220x50'
              alt='logo'
              width={220}
              height={46}
            />
          </Link>
        </TransitionBase>
        <Button
          squared={true}
          icon={isCollapse ? 'chevron-bar-right' : 'chevron-bar-left'}
          view='secondary'
          size='l'
          onClick={() => setIsCollapse(!isCollapse)}
        />
      </div>

      <aside className='nav-bar__aside'>
        {routes.map(route => {
          const isActive = route.href === pathname;
          return (
            <NavLink
              className='nav-bar__link'
              {...route}
              isActive={isActive}
              key={route.href}
              isCollapse={isCollapse}
            />
          );
        })}
      </aside>
    </div>
  );
});

NavBar.displayName = 'NavBar';

const useNavBarClasses = (
  className: NavBarProps['className'],
  isHidden: boolean,
) =>
  useMemo(() => {
    const classes = [className, 'nav-bar', isHidden && 'nav-bar--hidden'];

    return classes.join(' ');
  }, [className, isHidden]);

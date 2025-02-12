'use client';

import { memo, useMemo, useState } from 'react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Button, TransitionBase } from '@/shared';
import { NavLink, type NavLinkProps } from '@/shared/ui/NavLink';

import './nav-bar.scss';

export type NavBarProps = DefaultProps;

export const NavBar = memo<NavBarProps>(({ className }) => {
  const [isHidden, setIsHidden] = useState(false);

  const routes: NavLinkProps[] = [
    {
      href: '/data-collection',
      title: 'Сбор данных с метеостанций',
      icon: 'cross',
    },
    {
      href: '/diseases',
      title: 'Геоинформационная система',
      icon: 'cross',
    },
    {
      href: '/geoinformation-system',
      title: 'Прогноз погоды',
      icon: 'cross',
    },
    {
      href: '/technological-maps',
      title: 'Технологические карты',
      icon: 'cross',
    },
    {
      href: '/weather-forecast',
      title: 'Болезни',
      icon: 'cross',
    },
  ];

  const classes = useNavBarClasses(className, isHidden);
  const pathname = usePathname();
  return (
    <div className={classes}>
      <div className='nav-bar__controls'>
        <TransitionBase isVisible={!isHidden}>
          <Image
            src='https://placehold.co/220x50'
            alt='logo'
            width={220}
            height={46}
          />
        </TransitionBase>
        <Button
          squared={true}
          icon={isHidden ? 'chevron-bar-right' : 'chevron-bar-left'}
          view='secondary'
          size='l'
          onClick={() => setIsHidden(!isHidden)}
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
              isHidden={isHidden}
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

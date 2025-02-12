'use client';

import { memo, useMemo } from 'react';

import { Button } from '@/shared';

import './header.scss';

export type HeaderProps = DefaultProps;

export const Header = memo<HeaderProps>(({ className }) => {
  const classes = useHeaderClasses(className);
  return (
    <div className={classes}>
      <input placeholder='Поиск по местоположению' />
      <div className='header__lk'>
        <Button text='Начать' />
        <Button size='l' rounded={true} view='secondary' icon='person-fill' />
      </div>
    </div>
  );
});

Header.displayName = 'Header';

const useHeaderClasses = (className: HeaderProps['className']) =>
  useMemo(() => {
    const classes = [className, 'header'];

    return classes.join(' ');
  }, [className]);

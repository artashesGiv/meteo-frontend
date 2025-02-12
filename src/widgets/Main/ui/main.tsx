'use client';

import { memo, type ReactNode, useMemo } from 'react';

import './main.scss';

export type MainProps = DefaultPropsWithChildren<{
  children?: ReactNode;
}>;

export const Main = memo<MainProps>(({ className, children }) => {
  const classes = useMainClasses(className);
  return <div className={classes}>{children}</div>;
});

Main.displayName = 'Main';

const useMainClasses = (className: MainProps['className']) =>
  useMemo(() => {
    const classes = [className, 'main'];

    return classes.join(' ');
  }, [className]);

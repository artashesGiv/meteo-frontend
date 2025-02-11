import { type ReactNode } from 'react';

import { type IconsId } from '@/shared';

declare global {
  type Maybe<T> = T | null | undefined;
  type Icons = IconsId;
  type DefaultProps<T = object> = {
    className?: string;
    onClick?: () => void;
  } & T;
  type DefaultPropsWithChildren<T> = DefaultProps<T> & { children?: ReactNode };
}

export {};

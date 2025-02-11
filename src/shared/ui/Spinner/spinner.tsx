import { memo, useMemo } from 'react';

import './spinner.scss';

type SpinnerSize = 's' | 'm' | 'l' | 'xxl';
type SpinnerView = 'primary' | 'dark' | 'light';

export type SpinnerProps = {
  size?: SpinnerSize;
  view?: SpinnerView;
};

export const Spinner = memo<SpinnerProps>(
  ({ size = 's', view = 'primary' }) => {
    const gradientsId = useMemo(
      () => ({
        a: `spinner-a-${Math.random().toString(36).substring(2, 15)}`,
        b: `spinner-b-${Math.random().toString(36).substring(2, 15)}`,
      }),
      [],
    );

    const svgAttrs = useMemo(() => {
      const mapColors: Record<SpinnerView, string> = {
        dark: '#5a79ad',
        primary: '#db6a19',
        light: '#a5b4ca',
      };
      return {
        color: mapColors[view],
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 200 200',
        width: '200',
        height: '200',
      };
    }, [view]);

    return (
      <div className={`spinner spinner--size-${size}`}>
        <svg {...svgAttrs}>
          <defs>
            <linearGradient id={gradientsId.a}>
              <stop offset='0%' stopOpacity='0' stopColor='currentColor' />
              <stop offset='100%' stopOpacity='.5' stopColor='currentColor' />
            </linearGradient>
            <linearGradient id={gradientsId.b}>
              <stop offset='0%' stopColor='currentColor' />
              <stop offset='100%' stopOpacity='.5' stopColor='currentColor' />
            </linearGradient>
          </defs>
          <g strokeWidth='15'>
            <path
              stroke={`url(#${gradientsId.a})`}
              d='M15 100a85 85 0 0 1 170 0'
            />
            <path
              stroke={`url(#${gradientsId.b})`}
              d='M185 100a85 85 0 0 1-170 0'
            />
          </g>
        </svg>
      </div>
    );
  },
);

Spinner.displayName = 'Spinner';

import { memo, useMemo, useState } from 'react';

import Image from 'next/image';

import { CardBase, type CardBaseProps } from '../CardBase';
import { IconBase } from '../IconBase';
import { TransitionExpand } from '../TransitionExpand';

import './card-collapse.scss';

export type CardCollapseProps = DefaultPropsWithChildren<{
  title: string;
  cardProps?: CardBaseProps;
  imageSrc?: string;
}>;

export const CardCollapse = memo<CardCollapseProps>(
  ({ className = '', title, children, cardProps, imageSrc }) => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useCardCollapseClasses(className, isOpen);

    return (
      <CardBase
        {...cardProps}
        className={classes}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className='card-collapse__header'>
          {imageSrc && (
            <Image src={imageSrc} alt={title} width={88} height={88} />
          )}
          <span className='card-collapse__title'>{title}</span>
          <IconBase name='chevron-down' className='card-collapse__icon' />
        </div>
        <TransitionExpand>
          {isOpen && <div className='card-collapse__content'>{children}</div>}
        </TransitionExpand>
      </CardBase>
    );
  },
);

CardCollapse.displayName = 'CardCollapse';

const useCardCollapseClasses = (
  className: CardCollapseProps['className'],
  isOpen: boolean,
) =>
  useMemo(() => {
    const classes = [className, 'card-collapse'];

    if (isOpen) {
      classes.push('is-open');
    }

    return classes.join(' ');
  }, [className, isOpen]);

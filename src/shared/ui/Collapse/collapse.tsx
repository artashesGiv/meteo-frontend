import {
  type Dispatch,
  memo,
  type ReactNode,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { TransitionExpand } from '../TransitionExpand';

import './collapse.scss';

export type CollapseProps = DefaultProps<{
  children: [ReactNode, ReactNode];
  onToggle?: (isOPen: boolean) => void;
}>;

export const Collapse = memo<CollapseProps>(
  ({ children, className = '', onToggle }) => {
    const classes = useCollapseClasses(className);
    const [isOpen, setIsOpen] = useCollapseToggle(onToggle);

    const [title, content] = children;
    return (
      <div className={classes}>
        <div
          className='collapse__title'
          onClick={() => setIsOpen(prev => !prev)}
        >
          {title}
        </div>
        <TransitionExpand>{isOpen && content}</TransitionExpand>
      </div>
    );
  },
);

Collapse.displayName = 'Collapse';

const useCollapseToggle = (
  onToggle: CollapseProps['onToggle'],
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

  return [isOpen, setIsOpen];
};

const useCollapseClasses = (className: CollapseProps['className']) =>
  useMemo(() => {
    const classes = [className, 'collapse'];

    return classes.join(' ');
  }, [className]);

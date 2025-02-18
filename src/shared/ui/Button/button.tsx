import { memo, useMemo } from 'react';

import { IconBase } from '../IconBase';
import { Spinner, type SpinnerProps } from '../Spinner';
import { TransitionBase } from '../TransitionBase';

import './button.scss';

type ButtonView = 'primary' | 'base' | 'flat' | 'secondary' | 'outline';
type ButtonSize = 's' | 'm' | 'l';

export type ButtonProps = DefaultProps<{
  text?: string;
  view?: ButtonView;
  size?: ButtonSize;
  icon?: Icons;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  squared?: boolean;
}>;

export const Button = memo<ButtonProps>(props => {
  const normalizedProps = {
    ...props,
    view: props.view ?? 'primary',
    size: props.size ?? 'm',
  };

  const {
    text,
    icon,
    onClick,
    loading,
    view = 'primary',
    size = 'm',
  } = normalizedProps;

  const classes = useButtonClasses(normalizedProps);
  const spinnerProps = useSpinnerProps({ view, size });

  return (
    <button className={classes} onClick={onClick}>
      <TransitionBase
        isVisible={true}
        keyProp={loading ? 'loading' : 'default'}
        className='button__content'
      >
        {loading ? (
          <Spinner {...spinnerProps} />
        ) : (
          <>
            {icon && <IconBase name={icon} className='button__icon' />}
            {text}
          </>
        )}
      </TransitionBase>
    </button>
  );
});

Button.displayName = 'Button';

const useButtonClasses = ({
  disabled,
  className,
  size,
  view,
  loading,
  icon,
  text,
  rounded,
  squared,
}: ButtonProps) =>
  useMemo(() => {
    const classes = [
      'button',
      `button--size--${size}`,
      `button--view--${view}`,
    ];

    if (className) {
      classes.push(className);
    }

    if (disabled || loading) {
      classes.push('is-disabled');
    }

    if (icon && !text) {
      classes.push('is-only-icon');
    }

    if (rounded) {
      classes.push('is-rounded');
    }

    if (squared) {
      classes.push('is-squared');
    }

    return classes.join(' ');
  }, [disabled, className, size, view, loading, icon, text, rounded, squared]);

const SPINNER_VIEW_MAP: Record<ButtonView, SpinnerProps['view']> = {
  base: 'dark',
  flat: 'primary',
  primary: 'light',
  secondary: 'light',
  outline: 'primary',
};

const SPINNER_SIZE_MAP: Record<ButtonSize, SpinnerProps['size']> = {
  s: 's',
  m: 's',
  l: 's',
};

const useSpinnerProps = ({
  view,
  size,
}: Pick<Required<ButtonProps>, 'view' | 'size'>): SpinnerProps => ({
  view: SPINNER_VIEW_MAP[view],
  size: SPINNER_SIZE_MAP[size],
});

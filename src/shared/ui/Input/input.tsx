import { memo, useMemo } from 'react';

import { Controller, type FieldError } from 'react-hook-form';

import { IconBase, TransitionBase } from '@/shared';

import './input.scss';

export type InputProps = DefaultProps<{
  label?: string;
  placeholder?: string;
  name: string;
  control: any; // TODO: типизировать
  rules?: Record<string, any>;
  successMessage?: string;
  isSuccess?: boolean;
  error?: FieldError;
  message?: string;
  size?: 's' | 'm' | 'l';
}>;

export const Input = memo<InputProps>(props => {
  const normalizedProps = {
    ...props,
    size: props.size ?? 'l',
  };

  const {
    error,
    label,
    placeholder,
    name,
    control,
    rules,
    successMessage,
    isSuccess,
    message,
  } = normalizedProps;

  const classes = useInputClasses(normalizedProps);
  return (
    <div className={classes}>
      {label && <div className='input__label'>{label}</div>}
      <div className='input__field-wrapper'>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <input
              className='input__field'
              {...field}
              placeholder={placeholder}
            />
          )}
        />
        <TransitionBase isVisible={!!error}>
          <IconBase className='input__error-icon' name='exclamation-circle' />
        </TransitionBase>
      </div>
      <div className='input__message'>
        {error && (
          <TransitionBase isVisible={!!error}>{error?.message}</TransitionBase>
        )}

        {!!isSuccess && !error && (
          <TransitionBase isVisible={isSuccess && !error}>
            {successMessage}
          </TransitionBase>
        )}

        {!!message && !error && !isSuccess && (
          <TransitionBase isVisible={!!message && !error && !isSuccess}>
            {message}
          </TransitionBase>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

const useInputClasses = ({
  className,
  size,
  message,
  successMessage,
  isSuccess,
  error,
}: InputProps) =>
  useMemo(() => {
    const classes = [className, 'input', `input--size--${size}`];

    if (message) {
      classes.push('input--message');
    }

    if (isSuccess && successMessage) {
      classes.push('input--success');
    }

    if (error?.message) {
      classes.push('input--error');
    }

    return classes.join(' ');
  }, [className, size, message, successMessage, isSuccess, error]);

import { memo, useMemo } from 'react';

import { Controller, type FieldError, useWatch } from 'react-hook-form';

import { IconBase } from '../IconBase';
import { TransitionBase } from '../TransitionBase';

import './input.scss';

export type InputProps = DefaultProps<{
  label?: string;
  placeholder?: string;
  name: string;
  control: any; // TODO: типизировать
  rules?: Record<string, any>;
  defaultValue?: string;
  successMessage?: string;
  isSuccess?: (value: any) => boolean;
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
    defaultValue,
  } = normalizedProps;

  const fieldValue = useWatch({ control, name, defaultValue });

  const success = isSuccess ? isSuccess(fieldValue) : false;

  const classes = useInputClasses(normalizedProps, success);

  return (
    <div className={classes}>
      {label && <div className='input__label'>{label}</div>}
      <div className='input__field-wrapper'>
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue || ''}
          render={({ field }) => {
            return (
              <input
                className='input__field'
                {...field}
                placeholder={placeholder}
              />
            );
          }}
        />
        <TransitionBase isVisible={!!error}>
          <IconBase className='input__error-icon' name='exclamation-circle' />
        </TransitionBase>
      </div>
      <div className='input__message'>
        {error && (
          <TransitionBase isVisible={!!error}>{error?.message}</TransitionBase>
        )}

        {success && !error && (
          <TransitionBase isVisible={success && !error}>
            {successMessage}
          </TransitionBase>
        )}

        {!!message && !error && !success && (
          <TransitionBase isVisible={!!message && !error && !success}>
            {message}
          </TransitionBase>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

const useInputClasses = (
  { className, size, message, successMessage, error }: InputProps,
  success: boolean,
) =>
  useMemo(() => {
    const classes = [className, 'input', `input--size--${size}`];

    if (message) {
      classes.push('input--message');
    }

    if (success && successMessage) {
      classes.push('input--success');
    }

    if (error?.message) {
      classes.push('input--error');
    }

    return classes.join(' ');
  }, [success, className, size, message, successMessage, error]);

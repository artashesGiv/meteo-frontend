import { memo, useMemo } from 'react';

import { Controller, type FieldError } from 'react-hook-form';

import { IconBase } from '@/shared';

import './input.scss';

export type InputProps = DefaultProps<{
  label?: string;
  placeholder?: string;
  name: string;
  control: any;
  rules?: Record<string, any>;
  successMessage?: string;
  error?: FieldError;
  message?: string;
  size?: 's' | 'm' | 'l';
}>;

export const Input = memo<InputProps>(props => {
  const {
    error,
    label,
    placeholder,
    name,
    control,
    rules,
    successMessage,
    message,
  } = props;

  const classes = useInputClasses(props);
  return (
    <div className={classes}>
      {label && <span>{label}</span>}
      <div>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => <input {...field} placeholder={placeholder} />}
        />
        {error && <IconBase name='chevron-up' />}
      </div>
      {error ? (
        <span>{error.message}</span>
      ) : successMessage ? (
        <span>{successMessage}</span>
      ) : message ? (
        <span>{message}</span>
      ) : (
        ''
      )}
    </div>
  );
});

Input.displayName = 'Input';

const useInputClasses = ({ className }: InputProps) =>
  useMemo(() => {
    const classes = [className, 'input'];

    return classes.join(' ');
  }, [className]);

import { memo, useMemo } from 'react';

import {
  type Control,
  Controller,
  type FieldError,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';

import { IconBase } from '@/shared';

import './input.scss';

export type InputProps<T extends FieldValues> = DefaultProps<{
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  successMessage?: string;
  error?: FieldError;
  message?: string;
  size?: 's' | 'm' | 'l';
}>;

export const Input = memo(<T extends FieldValues>(props: InputProps<T>) => {
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

const useInputClasses = <T extends FieldValues>({ className }: InputProps<T>) =>
  useMemo(() => {
    const classes = [className, 'input'];

    return classes.join(' ');
  }, [className]);

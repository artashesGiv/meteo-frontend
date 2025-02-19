import { memo, useMemo } from 'react';

import { type FieldError, useForm } from 'react-hook-form';

import { Button, type ButtonProps } from '../Button';
import { Input, type InputProps } from '../Input';

import './form-creator.scss';

export type FormCreatorProps = DefaultProps<{
  fields: InputProps[];
  buttonProps: ButtonProps;
  onSubmit: (formData: Record<string, any>) => void;
}>;

export const FormCreator = memo<FormCreatorProps>(props => {
  const { fields, buttonProps, onSubmit } = props;

  const classes = useFormCreatorClasses(props);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Record<string, any>>({
    mode: 'onChange',
  });

  return (
    <div className={classes}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(field => (
          <Input
            key={field.name}
            {...field}
            error={errors[field.name] as FieldError | undefined}
            control={control}
          />
        ))}
        <Button {...buttonProps} type='submit' />
      </form>
    </div>
  );
});

FormCreator.displayName = 'FormCreator';

const useFormCreatorClasses = ({ className }: FormCreatorProps) =>
  useMemo(() => {
    const classes = [className, 'form-creator'];

    return classes.join(' ');
  }, [className]);

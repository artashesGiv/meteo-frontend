import { type JSX } from 'react';

import type { Meta } from '@storybook/react';
import { type FieldValues, useForm } from 'react-hook-form';

import { Input } from './input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;
interface FormFields extends FieldValues {
  myInput: string;
}
export const Base: () => JSX.Element = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    defaultValues: { myInput: '' },
    mode: 'onChange',
  });
  const myInputValue = watch('myInput');

  return (
    <div>
      <Input
        name='myInput'
        control={control}
        rules={{ required: 'Required field' }}
        error={errors.myInput}
      />
      {myInputValue}
    </div>
  );
};

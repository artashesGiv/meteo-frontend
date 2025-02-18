import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Input } from './input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = () => {
  const { control, watch } = useForm<{ myInput: string }>({
    defaultValues: { myInput: '' },
    mode: 'onChange',
  });
  const myInputValue = watch('myInput');

  return (
    <div>
      <Input<{ myInput: string }>
        name='myInput'
        control={control}
        rules={{ required: 'Required field' }}
      />
      {myInputValue}
    </div>
  );
};

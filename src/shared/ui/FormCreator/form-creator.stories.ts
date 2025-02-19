import type { Meta, StoryObj } from '@storybook/react';

import { FormCreator } from './form-creator';

const meta = {
  title: 'Shared/FormCreator',
  component: FormCreator,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof FormCreator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    fields: [
      {
        name: 'password',
        control: 'password',
        isSuccess: value => {
          return value?.length > 8;
        },
        successMessage: 'Looks good!',
        message: 'Enter your password',
        label: 'Password',
        rules: {
          required: 'Is Required Field',
        },
        placeholder: '********',
      },
      {
        name: 'email',
        control: 'email',
        message: 'Enter your email',
        label: 'Email',
        rules: {
          required: 'Is Required Field',
        },
        placeholder: 'ivan.2003@gmail.com',
      },
    ],
    buttonProps: {
      text: 'Submit',
    },
    onSubmit: data => {
      console.log(data);
    },
  },
};

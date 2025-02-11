import type { Meta, StoryObj } from '@storybook/react';

import { Spinner, type SpinnerProps } from './spinner';

const meta = {
  title: 'Shared/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    view: {
      control: 'select',
      options: ['primary', 'dark', 'light'] as SpinnerProps['view'][],
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'] as SpinnerProps['size'][],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    view: 'dark',
    size: 's',
  },
};

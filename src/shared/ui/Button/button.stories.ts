import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, type ButtonProps } from './button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  args: {
    onClick: fn(),
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l', 'xl'] as ButtonProps['size'][],
    },
    view: {
      control: 'select',
      options: ['primary', 'base', 'flat'] as ButtonProps['view'][],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
  },
};

export const Primary: Story = {
  args: {
    text: 'Button',
    view: 'primary',
    size: 'l',
  },
};

export const Base: Story = {
  args: {
    text: 'Button',
    view: 'base',
    size: 'l',
  },
};

export const Flat: Story = {
  args: {
    text: 'Button',
    view: 'flat',
    size: 'l',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Button',
    view: 'primary',
    size: 'l',
    icon: 'cross',
  },
};

export const IsOnlyIcon: Story = {
  args: {
    view: 'primary',
    size: 'l',
    icon: 'cross',
  },
};

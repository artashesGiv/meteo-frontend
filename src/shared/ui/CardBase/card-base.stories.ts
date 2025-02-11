import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CardBase, type CardBaseProps } from './card-base';

const meta = {
  title: 'Shared/CardBase',
  component: CardBase,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['s', 'm', 'l'] as CardBaseProps['size'][],
    },
    view: {
      control: 'select',
      options: ['base', 'fill'] as CardBaseProps['view'][],
    },
  },
} satisfies Meta<typeof CardBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Test Card',
    size: 'm',
  },
};

export const Interactive: Story = {
  args: {
    children: 'Test Card',
    size: 'm',
    onClick: fn(),
  },
};

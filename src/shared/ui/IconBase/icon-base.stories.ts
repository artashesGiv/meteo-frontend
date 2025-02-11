import type { Meta, StoryObj } from '@storybook/react';

import { IconBase } from './icon-base';

const meta = {
  title: 'Shared/IconBase',
  component: IconBase,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof IconBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Cross: Story = {
  args: {
    name: 'cross',
  },
};

export const Trash: Story = {
  args: {
    name: 'trash',
  },
};

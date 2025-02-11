import type { Meta, StoryObj } from '@storybook/react';

import { Collapse } from './collapse';

const meta = {
  title: 'Shared/Collapse',
  component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: ['Test Collapse', 'Collapsed text'],
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './nav-link';

const meta = {
  title: 'Shared/Title',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    icon: 'chevron-bar-left',
    href: '/data-collection',
    title: 'Сбор данных с метеостанций',
  },
};

export const Active: Story = {
  args: {
    icon: 'chevron-bar-left',
    href: '/test',
    title: 'NavLink',
    isActive: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { CardCollapse } from '../CardCollapse';

const meta = {
  title: 'Shared/CardCollapse',
  component: CardCollapse,
} satisfies Meta<typeof CardCollapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim fugiat impedit minima quibusdam voluptates? Commodi dolore iste minus sint veritatis. Alias animi blanditiis corporis cumque deserunt distinctio eaque expedita fugit in ipsa laboriosam minima nemo nihil perferendis, tempore veritatis.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Title',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque enim fugiat impedit minima quibusdam voluptates? Commodi dolore iste minus sint veritatis. Alias animi blanditiis corporis cumque deserunt distinctio eaque expedita fugit in ipsa laboriosam minima nemo nihil perferendis, tempore veritatis.',
    imageSrc: 'https://placehold.co/80x80',
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { Circle } from "./Circle";
import "../app/globals.css";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: 'select'
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジの円
*/
export const Primary: Story = {};

export const Green: Story = {
  args: {
    variant: 'green',
  }
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
  }
};

export const GroupedCircle: Story = {
  render: () => (
    <div>
      <Circle />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  )
}

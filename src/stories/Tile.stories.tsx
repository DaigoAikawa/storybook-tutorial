import { Meta, StoryObj } from "@storybook/react";
import { Tile } from "./Tile";

const meta: Meta<typeof Tile> = {
  component: Tile,
  title: "Tile",
  argTypes: {
    color: {
      control: 'color',
      description: '色を指定します',
    },
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
      description: '透過度を0〜1の範囲で指定します',
    },
    shape: {
      control: 'radio',
      description: '形を指定します',
    }
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 四角形
*/
export const Square: Story = {};

/**
 * 円形
*/
export const Circle: Story = {
  args: {
    shape: 'circle',
  }
};

/**
 * 色付き
*/
export const Colored: Story = {
  args: {
    color: '#00FF00',
  }
};

/**
 * 並べて使う
*/
export const GroupedTile: Story = {
  render: (props) => (
    <div>
      <Tile color={props.color}/>
      <Tile color={props.color} shape="circle" />
      <Tile color={props.color} opacity={0.5}/>
    </div>
  )
}

import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: { type: "select" }, //デフォルトのラジオボタン→セレクトボタン
    },
  },
};

export default meta;

export const BaseCircle = {
  args: {
    variant: "orange",
  },
};
export const GreenCircle = {
  args: {
    variant: "green",
  },
};
export const YellowCircle = {
  args: {
    variant: "yellow",
  },
};


export const GroupedCircle = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};

"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Spinner, type SpinnerProps } from "./spinner";

type Size = SpinnerProps["size"];
type Color = SpinnerProps["color"];

const sizes: Size[] = ["xs", "sm", "md", "lg", "xl"];
const colors: Color[] = [
  "blue",
  "gray",
  "green",
  "red",
  "yellow",
  "pink",
  "purple",
];

const meta = {
  title: "UI/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    size: "md",
    color: "blue",
  },
  argTypes: {
    size: {
      control: "select",
      options: sizes,
    },
    color: {
      control: "select",
      options: colors,
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-8">
      {sizes.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Spinner {...args} size={size} />
          <span className="text-xs text-gray-600">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: (args) => (
    <div className="flex items-center gap-8">
      {colors.map((color) => (
        <div key={color} className="flex flex-col items-center gap-2">
          <Spinner {...args} color={color} />
          <span className="text-xs text-gray-600">{color}</span>
        </div>
      ))}
    </div>
  ),
};

export const InContext: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 items-center p-8">
      <Spinner {...args} />
      <p className="text-sm text-gray-600">Loading...</p>
    </div>
  ),
};

"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button, type ButtonProps } from "./button";

type Appearance = ButtonProps["appearance"];

const appearances: Appearance[] = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
  "transparent",
];

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    appearance: "default",
    disabled: false,
    loading: false,
  },
  argTypes: {
    appearance: {
      control: "select",
      options: appearances,
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Destructive: Story = {
  args: {
    appearance: "destructive",
    children: "Delete",
  },
};

export const Outline: Story = {
  args: {
    appearance: "outline",
    children: "Outline",
  },
};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "Secondary",
  },
};

export const Ghost: Story = {
  args: {
    appearance: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    appearance: "link",
    children: "Link button",
  },
};

export const Transparent: Story = {
  args: {
    appearance: "transparent",
    children: "Transparent",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
};

export const AllAppearances: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {appearances.map((appearance) => (
        <Button key={appearance} {...args} appearance={appearance}>
          {appearance}
        </Button>
      ))}
    </div>
  ),
};

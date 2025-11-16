"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Toggle, type ToggleProps } from "./toggle";

type Color = ToggleProps["color"];
type Size = ToggleProps["size"];

const colors: Color[] = ["blue", "gray", "green"];
const sizes: Size[] = ["sm", "default", "lg"];

const meta = {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    checked: false,
    color: "blue",
    size: "default",
  },
  argTypes: {
    color: {
      control: "select",
      options: colors,
    },
    size: {
      control: "select",
      options: sizes,
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: "Notifications enabled",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled toggle",
  },
};

export const AllColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {colors.map((color) => (
        <Toggle
          key={color}
          {...args}
          color={color}
          label={`Toggle (${color})`}
        />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {sizes.map((size) => (
        <Toggle key={size} {...args} size={size} label={`Toggle (${size})`} />
      ))}
    </div>
  ),
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label="Interactive toggle"
      />
    );
  },
};

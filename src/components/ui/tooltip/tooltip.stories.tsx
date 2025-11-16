"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tooltip } from "./tooltip";
import { Button } from "../button/button";

const meta = {
  title: "UI/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "This is a tooltip",
    children: <Button>Hover me</Button>,
  },
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "auto",
        "auto-start",
        "auto-end",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    trigger: {
      control: "select",
      options: ["hover", "click"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-screen p-16">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Top: Story = {
  args: {
    placement: "top",
    content: "Tooltip on top",
    children: <Button>Hover me (top)</Button>,
  },
};

export const Bottom: Story = {
  args: {
    placement: "bottom",
    content: "Tooltip on bottom",
    children: <Button>Hover me (bottom)</Button>,
  },
};

export const Left: Story = {
  args: {
    placement: "left",
    content: "Tooltip on left",
    children: <Button>Hover me (left)</Button>,
  },
};

export const Right: Story = {
  args: {
    placement: "right",
    content: "Tooltip on right",
    children: <Button>Hover me (right)</Button>,
  },
};

export const ClickTrigger: Story = {
  args: {
    trigger: "click",
    content: "Click to show tooltip",
    children: <Button>Click me</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content:
      "This is a longer tooltip message that demonstrates how the tooltip handles content that extends beyond a single line.",
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const AllPlacements: Story = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-12 items-center justify-center pt-32 pb-32 pl-32 pr-32 min-h-screen">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <div className="flex gap-4">
        <Tooltip content="Top" placement="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip content="Top Start" placement="top-start">
          <Button>Top Start</Button>
        </Tooltip>
        <Tooltip content="Top End" placement="top-end">
          <Button>Top End</Button>
        </Tooltip>
      </div>
      <div className="flex gap-4">
        <Tooltip content="Left" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <div className="w-32" />
        <Tooltip content="Right" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <div className="flex gap-4">
        <Tooltip content="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip content="Bottom Start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </Tooltip>
        <Tooltip content="Bottom End" placement="bottom-end">
          <Button>Bottom End</Button>
        </Tooltip>
      </div>
    </>
  ),
};

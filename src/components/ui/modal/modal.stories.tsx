"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Modal } from "./modal";
import { Button } from "../button/button";
import { ThemeInit } from "../../../../.flowbite-react/init";

const meta = {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    title: "Modal Title",
    show: false,
    children: "This is the modal content. You can put any content here.",
  },
  argTypes: {
    show: {
      control: "boolean",
    },
    onClose: { action: "closed" },
  },
  decorators: [
    (Story) => (
      <>
        <ThemeInit />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    show: true,
    title: "Confirm Action",
    children: "Are you sure you want to proceed with this action?",
  },
};

export const WithoutTitle: Story = {
  args: {
    show: true,
    children: "This modal doesn't have a title.",
  },
};

export const LongContent: Story = {
  args: {
    show: true,
    title: "Long Content Modal",
    children: (
      <div className="space-y-4">
        <p>
          This is a modal with longer content. It demonstrates how the modal
          handles content that extends beyond the initial viewport.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal
          {...args}
          show={show}
          onClose={() => setShow(false)}
          title="Interactive Modal"
        >
          <div className="space-y-4">
            <p>This is an interactive modal that can be opened and closed.</p>
            <Button onClick={() => setShow(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const Dismissible: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);
    return (
      <>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        <Modal
          {...args}
          show={show}
          onClose={() => setShow(false)}
          title="Dismissible Modal"
          dismissible
        >
          <div className="space-y-4">
            <p>This is an interactive modal that can be opened and closed.</p>
            <Button onClick={() => setShow(false)}>Close</Button>
          </div>
        </Modal>
      </>
    );
  },
};

"use client";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { useRef } from "react";
import { Input, type InputProps, type InputRef } from "./input";
import { Button } from "../button/button";

type State = InputProps["state"];

const states: State[] = ["default", "error"];

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Enter text...",
    state: "default",
    disabled: false,
  },
  argTypes: {
    state: {
      control: "select",
      options: states,
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "example@email.com",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    state: "error",
    error: "Please enter a valid email address",
    placeholder: "example@email.com",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    disabled: true,
    value: "Disabled value",
  },
};

export const Readonly: Story = {
  args: {
    label: "Readonly Input",
    readOnly: true,
    value: "Readonly value",
  },
};

export const Shake: Story = {
  render: (args) => {
    const inputRef = useRef<InputRef>(null);
    return (
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Input
          {...args}
          ref={inputRef}
          label="Shake Input"
          placeholder="Click the button to shake"
        />
        <Button
          onClick={() => {
            inputRef.current?.shake();
          }}
        >
          Shake Input
        </Button>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4 w-full max-w-md">
      {states.map((state) => (
        <Input
          key={state}
          {...args}
          state={state}
          label={`Input (${state})`}
          placeholder={`${state} state`}
          error={state === "error" ? "This is an error message" : undefined}
        />
      ))}
    </div>
  ),
};

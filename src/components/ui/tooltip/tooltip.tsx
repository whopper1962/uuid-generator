"use client";

import {
  Tooltip as FlowbiteTooltip,
  TooltipProps as FlowbiteTooltipProps,
  createTheme,
} from "flowbite-react";

export interface TooltipProps extends FlowbiteTooltipProps {
  children: React.ReactNode;
}

const customTheme = createTheme({
  base: "font-normal",
});

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return (
    <FlowbiteTooltip {...props} theme={customTheme}>
      {children}
    </FlowbiteTooltip>
  );
};

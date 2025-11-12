"use client";

import {
  Tooltip as FlowbiteTooltip,
  TooltipProps as FlowbiteTooltipProps,
} from "flowbite-react";

export interface TooltipProps extends FlowbiteTooltipProps {
  children: React.ReactNode;
}

export const Tooltip = ({ children, ...props }: TooltipProps) => {
  return <FlowbiteTooltip {...props}>{children}</FlowbiteTooltip>;
};

import {
  createTheme,
  Modal as FlowbiteModal,
  ModalBody,
  ModalHeader,
} from "flowbite-react";
import type { ModalProps as FlowbiteModalProps } from "flowbite-react";

export interface ModalProps extends FlowbiteModalProps {
  title?: string;
  children: React.ReactNode;
}

const customTheme = createTheme({
  header: {
    base: "py-3 items-center",
    title: "text-base sm:text-xl font-medium",
    close: {
      base: "cursor-pointer",
    },
  },
});

export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <FlowbiteModal {...props} theme={customTheme}>
      {title && <ModalHeader>{title}</ModalHeader>}
      <ModalBody>{children}</ModalBody>
    </FlowbiteModal>
  );
};

import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  hideHeader?: boolean;
};

const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
}: ModalProps) => {
  return <div></div>;
};

export default Modal
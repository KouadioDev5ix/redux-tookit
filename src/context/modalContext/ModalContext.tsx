import React from "react";
import { ModalDaysui } from "../fraisScolaire/ModalDaysui";

type ModalProps = {
  content: string;
  cancelButton: string;
  actionButton: string;
  title: string;
  bothBtnClassName: string;
  titleClassName: string;
  saveBtnClassName: string;
  cancelBtnClassName: string;
  descriptionClassName: string;
  isModalOpen?: boolean;
  closeModal?: boolean;
  handleOpenModal?: () => void;
};

type OpenModalProps = Omit<ModalProps, "handleOpenModal">;

type ModalContextType = {
  openModal: (props: OpenModalProps) => void;
  closeModal: () => void;
};

const ModalContext = React.createContext<ModalContextType | null>(null);

// ModalProvider.tsx
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalProps, setModalProps] = React.useState(null);

  const openModal = (props: any) => {
    setModalProps(props);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalProps(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {isOpen && <ModalDaysui {...modalProps} closeModal={closeModal} />}
    </ModalContext.Provider>
  );
};

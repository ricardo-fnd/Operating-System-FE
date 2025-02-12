"use client";
import CloseButton from "./Close";
import Footer from "./Footer";

import type { ReactNode } from "react";
import type { FooterProps } from "./Footer";

type ModalProps = FooterProps & {
  isOpen: boolean;
  close?: () => void;
  children: ReactNode;
};

const StyledOverlay =
  "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50";
const StyledModal =
  "flex flex-col gap-6 w-full pt-6 px-6 bg-gray-900 text-white rounded-lg shadow-lg md:max-w-2xl md:pt-10 md:px-16 lg:max-w-4xl";

const Modal = ({ isOpen, close, advance, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={StyledOverlay} onClick={close && close}>
      <div className={StyledModal} onClick={(e) => e.stopPropagation()}>
        {close && <CloseButton onClick={close} />}
        <div>{children}</div>
        <Footer advance={advance} />
      </div>
    </div>
  );
};

export default Modal;

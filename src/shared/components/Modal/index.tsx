"use client";
import { twMerge } from "tailwind-merge";

import CloseButton from "./Close";
import Footer from "./Footer";

import type { ModalProps } from "./types";

const StyledOverlay =
  "fixed inset-0 flex items-center justify-center bg-black/25 z-[100]";
const StyledModal = `relative flex flex-col gap-6 w-screen h-screen shadow-lg sm:rounded-xl sm:max-w-lg sm:h-fit md:max-w-2xl lg:max-w-4xl
  data-[theme="light"]:bg-slate-200 data-[theme="light"]:text-black
  data-[theme="dark"]:bg-gray-800 data-[theme="dark"]:text-slate-200`;
const StyledContent =
  "flex flex-col gap-4 p-8 [&_h2]:text-3xl [&_h2]:font-medium xs:p-14 md:p-16";

const Modal = ({
  close,
  advance,
  children,
  className,
  theme = "light",
}: ModalProps) => {
  const style = twMerge(StyledModal, className);

  return (
    <div className={StyledOverlay} onClick={close && close}>
      <div
        className={style}
        data-theme={theme}
        onClick={(e) => e.stopPropagation()}
      >
        {close && <CloseButton theme={theme} onClick={close} />}
        <section className={StyledContent}>{children}</section>
        <Footer advance={advance} />
      </div>
    </div>
  );
};

export default Modal;

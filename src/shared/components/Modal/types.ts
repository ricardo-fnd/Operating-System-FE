import { ReactNode } from "react";

type ModalProps = Footer & {
  className?: string;
  close?: () => void;
  children: ReactNode;
  theme?: "light" | "dark";
};

type Close = { onClick: () => void; theme: "light" | "dark" };

type Footer = { advance?: () => void };

export type { Footer, ModalProps, Close };

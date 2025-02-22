import type { DraggableData, DraggableEvent } from "react-draggable";
import type { Application } from "src/types";
import type { RefObject } from "react";

type AppShortcut = {
  app: Application;
};

type ResizeShortcut = {
  ref: RefObject<HTMLDivElement>;
  app: Application;
  callback: (args: { app: Application; x: number; y: number }) => void;
};

type SaveShortcut = {
  app: Application;
  x: number;
  y: number;
};

export type {
  AppShortcut,
  ResizeShortcut,
  SaveShortcut,
  DraggableData,
  DraggableEvent,
};

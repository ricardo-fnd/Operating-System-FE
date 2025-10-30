import type { DraggableData, DraggableEvent } from "react-draggable";
import type { Application, User } from "src/types";
import type { RefObject } from "react";

type AppShortcut = {
  user?: User | null;
  app: Application;
};

type ResizeShortcut = {
  ref: RefObject<HTMLDivElement>;
  app: Application;
  callback: (args: { app: Application; x: number; y: number }) => void;
};

type SaveShortcut = {
  user?: User | null;
  app: Application;
  x?: number;
  y?: number;
};

export type {
  AppShortcut,
  ResizeShortcut,
  SaveShortcut,
  DraggableData,
  DraggableEvent,
};

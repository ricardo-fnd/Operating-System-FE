import type { DraggableData, DraggableEvent } from "react-draggable";
import type { Application } from "src/types";

type BaseApplication = {
  children: React.ReactNode;
  app: Application;
};

export type { BaseApplication, DraggableData, DraggableEvent };

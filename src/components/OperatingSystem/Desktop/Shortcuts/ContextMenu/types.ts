import type { Application, User } from "src/types";

type ShortcutContextMenuProps = {
  onClose: () => void;
  position: { x: number; y: number };
  app: Application;
  user?: User | null;
};

type EditNameOptionProps = {
  onClose: () => void;
  app: Application;
};

type DeleteFileOptionProps = {
  onClose: () => void;
  app: Application;
  user?: User | null;
};

export type { ShortcutContextMenuProps, EditNameOptionProps, DeleteFileOptionProps };

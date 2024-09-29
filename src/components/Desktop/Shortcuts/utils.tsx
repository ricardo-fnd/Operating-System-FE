import { setCookies } from "src/services/client";

import type { RefObject } from "react";
import type { Application, ShortcutsPositions } from "src/applications";

export const PADDING = 16;
export const DOCK_HEIGHT = 60;

type Props = {
  ref: RefObject<HTMLDivElement>;
  app: Application;
  callback: (args: { app: Application; x: number; y: number }) => void;
};

const handleResize = ({ ref, app, callback }: Props) => {
  if (!ref.current || !app.shortcutPosition) return false;

  const hasReachedMaxX = checkXBoundaries({ app, ref });
  const hasReachedMaxY = checkYBoundaries({ app, ref });

  const newX = window.innerWidth - ref.current.clientWidth - PADDING * 2;
  const newY =
    window.innerHeight - ref.current.clientHeight - DOCK_HEIGHT - PADDING * 2;

  const newPosition = { x: app.shortcutPosition.x, y: app.shortcutPosition.y };
  if (hasReachedMaxX) newPosition.x = newX;
  if (hasReachedMaxY) newPosition.y = newY;

  callback({ app, ...newPosition });
};

const checkXBoundaries = ({ app, ref }: Omit<Props, "callback">) => {
  if (!ref.current || !app.shortcutPosition) return false;

  const appLastX = app.shortcutPosition.x + ref.current.clientWidth + PADDING;
  return appLastX > window.innerWidth - PADDING;
};

const checkYBoundaries = ({ app, ref }: Omit<Props, "callback">) => {
  if (!ref.current || !app.shortcutPosition) return false;

  const appLastY = app.shortcutPosition.y + ref.current.clientHeight + PADDING;
  return appLastY > window.innerHeight - DOCK_HEIGHT - PADDING;
};

type SaveProps = {
  app: Application;
  x: number;
  y: number;
};

const saveAppShortcutPosition = ({ app, x, y }: SaveProps) => {
  setCookies({
    name: "shortcuts-positions",
    value: (prev: ShortcutsPositions) => {
      const filtered = prev?.filter(({ appId }) => appId !== app.id) ?? [];
      return [...filtered, { appId: app.id, x, y }];
    },
  });
};

export { handleResize, saveAppShortcutPosition };

import { setCookies } from "src/services/client";

import type { ResizeShortcut, SaveShortcut } from "../types";
import type { ShortcutPosition, ShortcutsPositions } from "src/types";

export const PADDING = 16;
export const DOCK_HEIGHT = 60;

const handleResize = ({ ref, app, callback }: ResizeShortcut) => {
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

const checkXBoundaries = ({ app, ref }: Omit<ResizeShortcut, "callback">) => {
  if (!ref.current || !app.shortcutPosition) return false;

  const appLastX = app.shortcutPosition.x + ref.current.clientWidth + PADDING;
  return appLastX > window.innerWidth - PADDING;
};

const checkYBoundaries = ({ app, ref }: Omit<ResizeShortcut, "callback">) => {
  if (!ref.current || !app.shortcutPosition) return false;

  const appLastY = app.shortcutPosition.y + ref.current.clientHeight + PADDING;
  return appLastY > window.innerHeight - DOCK_HEIGHT - PADDING;
};

const saveCookiesShortcut = ({ app, x, y, user }: SaveShortcut) => {
  if (!user || user.guest) return;
  
  setCookies({
    name: "shortcuts-positions",
    value: (prev: ShortcutsPositions) => {
      const userPositions = (prev ? prev[user.id] : []) ?? [];
      const filtered = userPositions.filter(({ appId }) => appId !== app.id);
      
      const shortcut = { appId: app.id, x, y } as ShortcutPosition;
      if (app.type === 'text-file') {
        shortcut.name = app.name;
        shortcut.type = 'text-file';
      }
      
      return { ...prev, [user.id]: [...filtered, shortcut] };
    },
  });
};

export { handleResize, saveCookiesShortcut };

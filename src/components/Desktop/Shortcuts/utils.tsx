import { setCookies } from "src/services/client";

import type { RefObject } from "react";
import type { Application, AppsPosition } from "src/applications";

export const PADDING = 16;
export const DOCK_HEIGHT = 60;

type Props = {
  ref: RefObject<HTMLDivElement>;
  app: Application;
  callback: (position: { x: number; y: number }) => void;
};

const handleResize = ({ ref, app, callback }: Props) => {
  if (!ref.current || !app.position) return false;

  const hasReachedMaxX = checkXBoundaries({ app, ref });
  const hasReachedMaxY = checkYBoundaries({ app, ref });

  const newX = window.innerWidth - ref.current.clientWidth - PADDING * 2;
  const newY =
    window.innerHeight - ref.current.clientHeight - DOCK_HEIGHT - PADDING * 2;

  const newPosition = { x: app.position.x, y: app.position.y };
  if (hasReachedMaxX) newPosition.x = newX;
  if (hasReachedMaxY) newPosition.y = newY;

  callback(newPosition);
};

const checkXBoundaries = ({ app, ref }: Omit<Props, "callback">) => {
  if (!ref.current || !app.position) return false;

  const appLastX = app.position.x + ref.current.clientWidth + PADDING;
  return appLastX > window.innerWidth - PADDING;
};

const checkYBoundaries = ({ app, ref }: Omit<Props, "callback">) => {
  if (!ref.current || !app.position) return false;

  const appLastY = app.position.y + ref.current.clientHeight + PADDING;
  return appLastY > window.innerHeight - DOCK_HEIGHT - PADDING;
};

type SaveProps = {
  app: Application;
  x: number;
  y: number;
};

const saveAppPosition = ({ app, x, y }: SaveProps) => {
  setCookies({
    name: "apps-position",
    value: (prev: AppsPosition) => {
      const filtered = prev?.filter(({ appId }) => appId !== app.id) ?? [];
      return [...filtered, { appId: app.id, x, y }];
    },
  });
};

export { handleResize, saveAppPosition };

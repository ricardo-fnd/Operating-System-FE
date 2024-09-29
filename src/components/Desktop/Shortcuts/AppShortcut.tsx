import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";
import { handleResize, saveAppShortcutPosition } from "./utils";

import type { AppShortcutProps } from "../types";
import type { DraggableData, DraggableEvent } from "react-draggable";

const StyledShortcut =
  "flex flex-col items-center w-fit p-2 pt-1 text-white text-xs rounded-md cursor-pointer hover:bg-white/25 transition-colors";

const AppShortcut = ({ app }: AppShortcutProps) => {
  const getLabel = useLabels();
  const ref = useRef<HTMLDivElement>(null);
  const open = AppsService.useOpen();
  const setShortcutPosition = AppsService.useSetShortcutPosition();
  const [wasDragged, setWasDragged] = useState(false);

  const { Icon, name } = app;

  useEffect(() => {
    const onResize = () => {
      handleResize({ ref, app, callback: setShortcutPosition });
    };
    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onDrag = () => setWasDragged(true);
  const onStop = (event: DraggableEvent, { x, y }: DraggableData) => {
    if (!wasDragged) open(app);
    if (wasDragged) {
      setWasDragged(false);
      setShortcutPosition({ app, x, y });
      saveAppShortcutPosition({ app, x, y });
    }
  };

  return (
    <Draggable
      bounds="parent"
      onDrag={onDrag}
      onStop={onStop}
      position={app.shortcutPosition}
    >
      <div ref={ref} className={StyledShortcut}>
        <Icon size="50" />
        <p>{getLabel(name)}</p>
      </div>
    </Draggable>
  );
};

export default AppShortcut;

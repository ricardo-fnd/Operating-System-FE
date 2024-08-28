import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import { useLabels } from "src/services/client";
import { useAppsUpdate } from "src/context";
import { saveAppPosition, handleResize } from "./utils";

import type { AppShortcutProps } from "../types";
import type { DraggableData, DraggableEvent } from "react-draggable";

const StyledShortcut =
  "flex flex-col items-center w-fit p-2 pt-1 text-white text-xs rounded-md cursor-pointer hover:bg-white/25 transition-colors";

const AppShortcut = ({ app }: AppShortcutProps) => {
  const getLabel = useLabels();
  const updateApps = useAppsUpdate();
  const ref = useRef<HTMLDivElement>(null);
  const [wasDragged, setWasDragged] = useState(false);
  const [position, setPosition] = useState(app.position);

  const { id, Icon, name } = app;

  const openApp = () => {
    updateApps((apps) => {
      const appWithMostPriority = apps.reduce((prev, current) =>
        prev && prev.priority > current.priority ? prev : current
      );

      return apps.map((application) => {
        if (application.id !== app.id) return application;
        return {
          ...app,
          opened: true,
          minimized: false,
          priority: appWithMostPriority.priority + 1,
        };
      });
    });
  };

  const updateAppPosition = ({ x, y }: { x: number; y: number }) => {
    setPosition({ x, y });
    saveAppPosition({ app, x, y });
    updateApps((apps) =>
      apps.map((app) => {
        if (app.id === id) app.position = { x, y };
        return app;
      })
    );
  };

  useEffect(() => {
    const onResize = () => handleResize({ ref, app, callback: setPosition });
    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onDrag = () => setWasDragged(true);

  const onStop = (event: DraggableEvent, { x, y }: DraggableData) => {
    if (!wasDragged) openApp();
    if (wasDragged) {
      updateAppPosition({ x, y });
      setWasDragged(false);
    }
  };

  return (
    <Draggable
      bounds="parent"
      onDrag={onDrag}
      onStop={onStop}
      position={position}
    >
      <div ref={ref} className={StyledShortcut}>
        <Icon size="50" />
        <p>{getLabel(name)}</p>
      </div>
    </Draggable>
  );
};

export default AppShortcut;

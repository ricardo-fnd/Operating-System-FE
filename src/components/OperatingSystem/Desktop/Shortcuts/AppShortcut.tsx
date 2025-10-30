import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import AppShortcutName from "./AppShortcutName";
import ShortcutContextMenu from "./ContextMenu";

import { AppsService } from "src/services";
import { TextFilesService } from "src/services/client";
import { handleResize, saveCookiesShortcut } from "./utils";

import type { Application } from "src/types";
import type { AppShortcut, DraggableData, DraggableEvent } from "../types";

const StyledShortcut =
  "flex flex-col items-center w-fit max-w-[80px] p-2 pt-1 text-center text-white text-xs rounded-md hover:bg-zinc-800 transition-colors";

const AppShortcut = ({ user, app }: AppShortcut) => {
  const ref = useRef<HTMLDivElement>(null);
  const open = AppsService.useOpen();
  const setShortcutPosition = AppsService.useSetShortcutPosition();
  const [wasDragged, setWasDragged] = useState(false);
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

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
  
  const { mutate } = TextFilesService.useUpdate({
    onSuccess: ({ id, name, shortcutPositionX, shortcutPositionY }) => {
      const app = { id, name, type: 'text-file' } as Application;
      saveCookiesShortcut({ user, app, x: shortcutPositionX, y: shortcutPositionY });
    }
  });

  const onDrag = () => setWasDragged(true);
  const onStop = (event: DraggableEvent, { x, y }: DraggableData) => {
    if (wasDragged) {
      setWasDragged(false);
      setShortcutPosition({ app, x, y });
      
      if (app.type === 'text-file') {
        mutate({ id: Number(app.id), body: { shortcutPositionX: x, shortcutPositionY: y } });
      } else {
        saveCookiesShortcut({ user, app, x, y });
      }
    }
  };

  const closeContextMenu = () => setContextMenuPos({ x: 0, y: 0 });
  const openContextMenu = (e: React.MouseEvent) => {
    if (app.type !== "text-file") return;
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <Draggable
        bounds="parent"
        onDrag={onDrag}
        onStop={onStop}
        position={app.shortcutPosition}
      >
        <div 
          ref={ref} 
          className={StyledShortcut} 
          onContextMenu={openContextMenu}
          onDoubleClick={() => open(app)}
        >
          <app.Icon color="white" width={50} height={50} />
          <AppShortcutName app={app} user={user} />
        </div>
      </Draggable>
      <ShortcutContextMenu
        position={contextMenuPos}
        onClose={closeContextMenu}
        app={app}
        user={user}
      />
    </>
  );
};

export default AppShortcut;

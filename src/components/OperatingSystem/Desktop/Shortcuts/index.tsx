import { useState } from "react";

import AppShortcut from "./AppShortcut";
import ContextMenu from "../ContextMenu";

import { UsersService } from "src/services/client";
import { useApps } from "src/context";

const StyledShortcuts =
  "flex flex-col flex-wrap content-start w-full h-[calc(100%-60px)] p-4";

const Shortcuts = () => {
  const apps = useApps();
  const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });

  const { data: user } = UsersService.useMe();

  const closeContextMenu = () => setContextMenuPos({ x: 0, y: 0 });
  const openContextMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      e.stopPropagation();
      setContextMenuPos({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      <div className={StyledShortcuts} onContextMenu={openContextMenu}>
        {apps.map((app) => {
          if (app.showIcon) return <AppShortcut key={app.id} app={app} user={user} />
        })}
      </div>
      <ContextMenu position={contextMenuPos} onClose={closeContextMenu} />
    </>
  );
};

export default Shortcuts;

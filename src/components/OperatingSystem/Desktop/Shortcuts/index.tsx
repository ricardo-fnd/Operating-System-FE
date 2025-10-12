import AppShortcut from "./AppShortcut";

import { UsersService } from "src/services/client";
import { useApps } from "src/context";

const StyledShortcuts =
  "flex flex-col flex-wrap content-start w-full h-[calc(100%-60px)] p-4";

const Shortcuts = () => {
  const apps = useApps();
  
  const { data: user } = UsersService.useMe();

  return (
    <div className={StyledShortcuts}>
      {apps.map(
        (app) => app.showIcon && <AppShortcut key={app.id} app={app} user={user} />
      )}
    </div>
  );
};

export default Shortcuts;

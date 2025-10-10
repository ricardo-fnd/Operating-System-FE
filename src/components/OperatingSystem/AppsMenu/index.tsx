import AppShortcut from "./AppShortcut";

import { useApps } from "src/context";

const StyledContainer =
  "absolute top-0 left-0 flex items-center justify-center w-screen h-screen z-50 bg-black/75 backdrop-blur-[2px]";
const StyledMenu = "flex flex-wrap justify-center p-4 bg-zinc-900 border border-zinc-600 text-slate-200 rounded-lg";

const AppsMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const apps = useApps();

  return (
    <div className={StyledContainer} onClick={closeMenu}>
      <menu className={StyledMenu}>
        {apps.map(
          (app) => app.showIcon && <AppShortcut key={app.id} app={app} />
        )}
      </menu>
    </div>
  );
};

export default AppsMenu;

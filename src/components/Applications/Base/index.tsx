import TopBar from "./TopBar";

import type { BaseApplicationProps } from "./types";

//DOCK_HEIGHT = 60;
const StyledApplication =
  "absolute top-0 left-0 min-w-56 h-[calc(100%-60px)] overflow-hidden data-[maximized=false]:max-h-[66%] data-[maximized=false]:max-w-[66%] data-[maximized=false]:rounded-md data-[minimized=true]:hidden data-[maximized=true]:w-full data-[maximized=true]:h-full";
//TOPBAR_HEIGHT = 33;
const StyledContent =
  "h-[calc(100%-33px)] py-6 px-4 bg-white md:show-y-scrollbar";

const BaseApplication = ({ children, app }: BaseApplicationProps) => (
  <section
    data-maximized={app.maximized}
    data-minimized={app.minimized}
    className={StyledApplication}
  >
    <TopBar app={app} />
    <div className={StyledContent}>{children}</div>
  </section>
);

export default BaseApplication;

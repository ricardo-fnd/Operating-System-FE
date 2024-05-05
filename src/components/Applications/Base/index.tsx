import TopBar from "./TopBar";

import type { BaseApplicationProps } from "./types";

const StyledApplication =
  "absolute top-0 left-0 min-w-56 h-fit overflow-hidden data-[maximized=false]:rounded-md data-[minimized=true]:hidden data-[maximized=true]:w-full data-[maximized=true]:h-full";
const StyledContent = "bg-white h-full";

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

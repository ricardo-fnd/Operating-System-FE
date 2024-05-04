import TopBar from "./TopBar";

import type { BaseApplicationProps } from "./types";

const StyledApplication =
  "fixed top-0 bottom-0 min-w-56 h-fit rounded-md overflow-hidden data-[minimized=true]:hidden";
const StyledContent = "bg-white";

const BaseApplication = ({ children, app }: BaseApplicationProps) => (
  <section data-minimized={app.minimized} className={StyledApplication}>
    <TopBar app={app} />
    <div className={StyledContent}>{children}</div>
  </section>
);

export default BaseApplication;

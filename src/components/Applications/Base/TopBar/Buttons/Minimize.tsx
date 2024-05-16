import { FaRegWindowMinimize } from "react-icons/fa";

import { useAppsUpdate } from "src/context";

import type { MinimizeButton } from "../../types";

const StyledMinimize = "cursor-pointer mt-0.5";

const Minimize = ({ appId }: MinimizeButton) => {
  const updateApps = useAppsUpdate();

  const minimizeApp = () => {
    updateApps((apps) =>
      apps.map((app) => {
        if (app.id === appId) app.minimized = true;
        return app;
      })
    );
  };

  return (
    <FaRegWindowMinimize
      size="16"
      onClick={minimizeApp}
      className={StyledMinimize}
    />
  );
};

export default Minimize;

import { FiMaximize2 } from "react-icons/fi";

import { useAppsUpdate } from "src/context";

import type { MinimizeButton } from "../../types";

const StyledMaximized = "cursor-pointer";

const Maximize = ({ appId }: MinimizeButton) => {
  const updateApps = useAppsUpdate();

  const maximizeApp = () => {
    updateApps((apps) =>
      apps.map((application) => {
        if (application.id !== appId) return application;
        return { ...application, maximized: !application.maximized };
      })
    );
  };

  return (
    <FiMaximize2 size="16" onClick={maximizeApp} className={StyledMaximized} />
  );
};

export default Maximize;

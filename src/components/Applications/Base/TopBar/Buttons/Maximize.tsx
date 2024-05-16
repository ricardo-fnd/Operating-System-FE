import { FiMaximize2 } from "react-icons/fi";

import { useAppsUpdate } from "src/context";

import type { MinimizeButton } from "../../types";

const StyledMaximized = "cursor-pointer";

const Maximize = ({ appId }: MinimizeButton) => {
  const updateApps = useAppsUpdate();

  const MaximizeApp = () => {
    updateApps((apps) => {
      const index = apps.findIndex(({ id }) => id === appId);
      const appsCopy = [...apps];

      const app = { ...apps[index] };
      appsCopy[index] = { ...app, maximized: !app.maximized };

      return [...appsCopy];
    });
  };

  return (
    <FiMaximize2 size="16" onClick={MaximizeApp} className={StyledMaximized} />
  );
};

export default Maximize;

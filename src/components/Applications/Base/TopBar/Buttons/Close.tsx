import { AiFillCloseCircle } from "react-icons/ai";

import { useAppsUpdate } from "src/context/AppsContext";

import type { CloseButton } from "../../types";

const StyledClose = "cursor-pointer";

const Close = ({ appId }: CloseButton) => {
  const updateApps = useAppsUpdate();

  const closeApp = () => {
    updateApps((apps) =>
      apps.map((app) => {
        if (app.id === appId) {
          app.opened = false;
          app.minimized = true;
          app.maximized = false;
        }
        return app;
      })
    );
  };

  return (
    <AiFillCloseCircle
      size="20"
      color="tomato"
      onClick={closeApp}
      className={StyledClose}
    />
  );
};

export default Close;

import Buttons from "./Buttons";

import { useLabels } from "src/services/client";
import { useAppsUpdate } from "src/context";

import type { TopBarProps } from "../types";

const StyledHeader =
  "handle flex justify-between py-1 px-4 bg-white border-b-[1px] border-black cursor-grab";

const TopBar = ({ app }: TopBarProps) => {
  const getLabel = useLabels();
  const updateApps = useAppsUpdate();

  const { id, name } = app;

  const onDoubleClick = () => {
    updateApps((apps) =>
      apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, maximized: !application.maximized };
      })
    );
  };

  return (
    <header className={StyledHeader} onDoubleClick={onDoubleClick}>
      <h3>{getLabel(name)}</h3>
      <Buttons appId={id} />
    </header>
  );
};

export default TopBar;

import { useLabels } from "src/services/client";

import { AppsService } from "src/services";

import type { Application } from "src/types";

const StyledShortcut =
  "flex flex-col items-center justify-center w-32 h-32 bg-[#ffffff5b] cursor-pointer hover:bg-[#ffffff80]";

const AppShortcut = ({ app }: { app: Application }) => {
  const getLabel = useLabels();
  const open = AppsService.useOpen();
  const { Icon, name } = app;

  return (
    <li className={StyledShortcut} onClick={() => open(app)}>
      <Icon size="75" />
      <p>{getLabel(name)}</p>
    </li>
  );
};

export default AppShortcut;

import Buttons from "./Buttons";

import { useLabels } from "src/services/client";

import type { TopBarProps } from "../types";

const StyledHeader =
  "handle flex justify-between py-1 px-4 bg-white border-b-[1px] border-black cursor-grab";

const TopBar = ({ app }: TopBarProps) => {
  const getLabel = useLabels();
  const { id, name } = app;

  return (
    <header className={StyledHeader}>
      <h3>{getLabel(name)}</h3>
      <Buttons appId={id} />
    </header>
  );
};

export default TopBar;

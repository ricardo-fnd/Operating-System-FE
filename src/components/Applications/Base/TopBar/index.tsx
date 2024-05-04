import Buttons from "./Buttons";

import type { TopBarProps } from "../types";

const StyledHeader =
  "flex justify-between py-1 px-2 bg-white border-b-[1px] border-black";

const TopBar = ({ app }: TopBarProps) => {
  const { id, name } = app;

  return (
    <header className={StyledHeader}>
      <h3>{name}</h3>
      <Buttons appId={id} />
    </header>
  );
};

export default TopBar;

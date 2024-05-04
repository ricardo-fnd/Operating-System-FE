import { CgMenuGridO } from "react-icons/cg";

import type { MenuProps } from "./types";

const StyledMenu =
  "flex items-center justify-center px-3 h-full rounded-sm cursor-pointer data-[menu=true]:bg-white/25 hover:bg-white/25";

const Menu = ({ menuOpen, toggleMenu }: MenuProps) => (
  <div data-menu={menuOpen} className={StyledMenu} onClick={toggleMenu}>
    <CgMenuGridO color="white" size="34" />
  </div>
);

export default Menu;

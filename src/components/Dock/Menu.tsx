import { CgMenuGridO } from "react-icons/cg";

import type { MenuProps } from "./types";

const StyledMenu =
  "flex items-center justify-center h-full px-3 rounded-sm cursor-pointer data-[menu=true]:bg-white/25 hover:bg-white/25";

const Menu = ({ isMenuOpen, toggleMenu }: MenuProps) => (
  <div data-menu={isMenuOpen} className={StyledMenu} onClick={toggleMenu}>
    <CgMenuGridO color="white" size="34" />
  </div>
);

export default Menu;

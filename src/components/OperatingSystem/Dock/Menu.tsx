import { CgMenuGridO } from "react-icons/cg";

import type { Menu } from "./types";

const StyledMenu =
  "flex items-center justify-center h-full px-3 cursor-pointer data-[menu=true]:bg-zinc-600 hover:bg-zinc-600";

const Menu = ({ isMenuOpen, toggleMenu }: Menu) => (
  <div data-menu={isMenuOpen} className={StyledMenu} onClick={toggleMenu}>
    <CgMenuGridO color="white" size="34" />
  </div>
);

export default Menu;

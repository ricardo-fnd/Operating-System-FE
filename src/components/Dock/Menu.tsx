import { CgMenuGridO } from "react-icons/cg";

const StyledMenu =
  "flex items-center justify-center px-3 h-full rounded-sm cursor-pointer hover:bg-white/25";

const Menu = () => {
  return (
    <div className={StyledMenu}>
      <CgMenuGridO color="white" size="34" />
    </div>
  );
};

export default Menu;

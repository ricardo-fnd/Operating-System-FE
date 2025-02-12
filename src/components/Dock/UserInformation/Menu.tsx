import { useRef } from "react";

import Logout from "./Logout";

import { useOnClickOutside } from "src/hooks";

type Menu = { close: () => void };

const StyledMenu =
  "absolute bottom-8 right-0 overflow-hidden text-sm bg-zinc-800 text-gray-200 rounded-md";

const UserMenu = ({ close }: Menu) => {
  const ref = useRef(null);

  useOnClickOutside({ ref, handler: close });

  return (
    <menu ref={ref} className={StyledMenu}>
      <Logout />
    </menu>
  );
};

export default UserMenu;

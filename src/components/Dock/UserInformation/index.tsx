import { useState } from "react";

import UserMenu from "./Menu";

import { UsersService } from "src/services/client";

const StyledContainer = "relative";
const StyledContent =
  "flex items-center gap-1.5 max-w-28 px-2 cursor-pointer bg-zinc-700 rounded-md shadow-md group hover:bg-zinc-600";
const StyledOnline =
  "min-w-1.5 min-h-1.5 bg-green-500 rounded-full group-hover:bg-green-400";
const StyledUsername = "text-sm text-nowrap truncate";

const UserInformation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { data: user } = UsersService.useMe();

  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <div className={StyledContainer}>
        <div className={StyledContent} onClick={toggleMenu}>
          <span className={StyledOnline} />
          <p className={StyledUsername}>{user?.name ?? user?.username}</p>
        </div>
        {showMenu && <UserMenu close={closeMenu} />}
      </div>
    </>
  );
};

export default UserInformation;

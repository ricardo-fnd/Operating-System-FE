import { useState } from "react";

import { Button } from "src/shared/components/Buttons";
import UserMenu from "./Menu";

import { UsersService } from "src/services/client";

const StyledContainer = "relative";
const StyledButton = "py-0 px-2.5 group data-[menu-open=true]:bg-zinc-600";
const StyledOnline =
  "min-w-1.5 min-h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 data-[menu-open=true]:bg-green-400";
const StyledUsername = "text-sm text-nowrap truncate";

const UserInformation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { data: user } = UsersService.useMe();

  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className={StyledContainer}>
      <Button
        color="zinc"
        id="user-menu-pill"
        onClick={toggleMenu}
        className={StyledButton}
        data-menu-open={showMenu}
      >
        <span data-menu-open={showMenu} className={StyledOnline} />
        <p className={StyledUsername}>{user?.name ?? user?.username}</p>
      </Button>
      {showMenu && <UserMenu close={closeMenu} />}
    </div>
  );
};

export default UserInformation;

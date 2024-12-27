import { useState } from "react";

import { IoMdSettings } from "react-icons/io";
import SettingsMenu from "./Menu";

const StyledSettings = "relative";
const StyledIcon = "cursor-pointer";

const Settings = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={StyledSettings}>
      <IoMdSettings
        id="settings-icon"
        className={StyledIcon}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && <SettingsMenu close={() => setShowMenu(false)} />}
    </div>
  );
};

export default Settings;

import { useState } from "react";

import { SettingsIcon } from "src/shared/components";
import SettingsMenu from "./Menu";

const StyledSettings = "relative cursor-pointer";

const Settings = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={StyledSettings}>
      <SettingsIcon id="settings-icon" onClick={() => setShowMenu(!showMenu)}/>
      {showMenu && <SettingsMenu close={() => setShowMenu(false)} />}
    </div>
  );
};

export default Settings;

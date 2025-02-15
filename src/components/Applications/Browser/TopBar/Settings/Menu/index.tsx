import Menu, { MenuOption } from "src/shared/components/Menu";

import { useLabels } from "src/services/client";

const StyledMenu = "top-6";

const SettingsMenu = ({ close }: { close: () => void }) => {
  const getLabel = useLabels();

  const options = { ignore: ["settings-icon"] };

  return (
    <Menu close={close} className={StyledMenu} options={options}>
      <MenuOption>{getLabel("apps.browser.settings.backlog")}</MenuOption>
    </Menu>
  );
};

export default SettingsMenu;

import { MenuOption } from "src/shared/components";

import type { ContextMenuOptionProps } from "../types";

const ChangeBackgroundOption = ({ onClose }: ContextMenuOptionProps) => {
  const changeBackground = () => {
    onClose();
  };

  return (
    <MenuOption onClick={changeBackground}>
      <p>Change Background</p>
    </MenuOption>
  );
};

export default ChangeBackgroundOption;

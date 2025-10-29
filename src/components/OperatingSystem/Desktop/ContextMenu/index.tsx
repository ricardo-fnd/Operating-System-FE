import { Menu } from "src/shared/components";
import NewTextFileOption from "./Options/NewTextFileOption";

import type { ContextMenuProps } from "./types";

const StyledMenu = "fixed max-w-fit rounded-md";

const ContextMenu = ({ position, onClose }: ContextMenuProps) => {
  if (!position.x || !position.y) return null;

  return (
    <Menu
      tabIndex={0}
      close={onClose}
      className={StyledMenu}
      style={{ left: position.x, top: position.y }}
    >
      <NewTextFileOption onClose={onClose} />
    </Menu>
  );
};

export default ContextMenu;

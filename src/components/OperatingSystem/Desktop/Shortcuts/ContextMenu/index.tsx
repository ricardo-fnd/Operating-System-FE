import { Menu } from "src/shared/components";
import EditNameOption from "./Options/EditNameOption";
import DeleteFileOption from "./Options/DeleteFileOption";

import type { ShortcutContextMenuProps } from "./types";

const StyledMenu = "fixed max-w-fit rounded-md";

const ShortcutContextMenu = ({
  position,
  onClose,
  app,
  user,
}: ShortcutContextMenuProps) => {
  if (!position.x || !position.y) return null;

  return (
    <Menu
      tabIndex={0}
      close={onClose}
      className={StyledMenu}
      style={{ left: position.x, top: position.y }}
    >
      <EditNameOption onClose={onClose} app={app} />
      <DeleteFileOption onClose={onClose} app={app} user={user} />
    </Menu>
  );
};

export default ShortcutContextMenu;

import { MenuOption } from "src/shared/components";

import { useLabels, TextFilesService } from "src/services/client";
import { AppsService, NotificationsService } from "src/services";
import { setCookies } from "src/services/client";

import type { ShortcutsPositions } from "src/types";
import type { DeleteFileOptionProps } from "../types";

const DeleteFileOption = ({ onClose, app, user }: DeleteFileOptionProps) => {
  const getLabel = useLabels();
  const removeApp = AppsService.useRemove();

  const { mutate } = TextFilesService.useDelete({
    onSuccess: () => {
      removeApp(app);

      if (user && !user.guest) {
        setCookies({
          name: "shortcuts-positions",
          value: (prev: ShortcutsPositions) => {
            if (!prev || !prev[user.id]) return prev;
            const filtered = prev[user.id].filter(
              ({ appId }) => appId !== app.id
            );
            return { ...prev, [user.id]: filtered };
          },
        });
      }

      NotificationsService.success(getLabel("apps.text-file.deleted-successfully"));
      onClose();
    },
  });

  const handleDeleteFile = () => mutate(Number(app.id));

  return (
    <MenuOption onClick={handleDeleteFile}>
      <p>{getLabel("context-menu.options.delete-file")}</p>
    </MenuOption>
  );
};

export default DeleteFileOption;

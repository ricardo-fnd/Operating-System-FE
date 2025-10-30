import { MenuOption } from "src/shared/components";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { EditNameOptionProps } from "../types";

const EditNameOption = ({ onClose, app }: EditNameOptionProps) => {
  const getLabel = useLabels();
  const updateApp = AppsService.useUpdate();

  const handleEditName = () => {
    updateApp(app.id, { isEditing: true });
    onClose();
  };

  return (
    <MenuOption onClick={handleEditName}>
      <p>{getLabel("context-menu.options.edit-name")}</p>
    </MenuOption>
  );
};

export default EditNameOption;

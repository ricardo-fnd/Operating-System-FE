import { TextFileIcon, MenuOption } from "src/shared/components";
import { TextFile } from "src/components/OperatingSystem/Applications";

import { useLabels } from "src/services/client";
import { AppsService } from "src/services";

import type { ContextMenuOptionProps } from "../types";
import type { Application } from "src/types";

const NewTextFileOption = ({ onClose }: ContextMenuOptionProps) => {
  const getLabel = useLabels();
  const addApp = AppsService.useAdd();

  const handleCreateTextFile = (e: React.MouseEvent) => {
    const tempFile: Application = {
      Icon: TextFileIcon,
      id: `temp-${Date.now()}`, 
      name: getLabel('apps.text-file.name-placeholder'),
      type: 'text-file',
      showIcon: true,
      isEditing: true,
      component: TextFile,
      shortcutPosition: { x: Math.round(e.clientX), y: Math.round(e.clientY) },
    };

    addApp(tempFile);
    onClose();
  };

  return (
    <MenuOption onClick={handleCreateTextFile}>
      <p>{getLabel('context-menu.options.create-file')}</p>
    </MenuOption>
  );
};

export default NewTextFileOption;

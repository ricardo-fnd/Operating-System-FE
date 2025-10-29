import { useQueryClient } from "@tanstack/react-query";

import { Button } from "src/shared/components";

import { useLabels, TextFilesService } from "src/services/client";
import { NotificationsService } from "src/services";
import { QUERIES_KEYS } from "src/enums";

import type { SaveButtonProps } from "./types";

const StyledSaveButton = "px-2 py-1 text-xs h-6";

const SaveButton = ({ app, content, hasUnsavedChanges }: SaveButtonProps) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();

  const { mutate, isPending } = TextFilesService.useUpdate({
    onSuccess: (updatedTextFile) => {
      queryClient.setQueryData([QUERIES_KEYS.textFiles, app.id], updatedTextFile);
      NotificationsService.success(getLabel('apps.text-file.saved-successfully'));
    },
  });

  const handleSave = () => mutate({ id: app.id as number, body: { content } })

  return (
    <Button 
      color="zinc"
      onClick={handleSave}
      loading={isPending}
      className={StyledSaveButton}
      disabled={isPending || !hasUnsavedChanges}
    >
      <p>{getLabel('commons.save')}</p>
    </Button>
  );
};

export default SaveButton;


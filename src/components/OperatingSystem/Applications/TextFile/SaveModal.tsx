import { useQueryClient } from "@tanstack/react-query";

import { Modal, Button } from "src/shared/components";

import { useLabels, TextFilesService } from "src/services/client";
import { AppsService, NotificationsService } from "src/services";
import { QUERIES_KEYS } from "src/enums";

import type { SaveModalProps } from "./types";

const StyledSaveModal = "w-fit max-w-[90%] h-fit rounded-lg [&>section]:gap-2 [&>section]:p-6 [&>section>h2]:text-xl [&>section>p]:text-sm [&>section]:xs:p-6 [&>section]:md:p-6 md:max-w-md lg:max-w-md";
const StyledButtons = "flex gap-4 justify-end mt-2";

const SaveModal = ({ app, content, setShowSaveModal }: SaveModalProps) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const close = AppsService.useClose();
  
  const { mutate, isPending } = TextFilesService.useUpdate({
    onSuccess: (updatedTextFile) => {
      close(app);
      queryClient.setQueryData([QUERIES_KEYS.textFiles, app.id], updatedTextFile);
      NotificationsService.success(getLabel('apps.text-file.saved-successfully'));
    },
  });

  const handleDiscard = () => close(app);
  const handleCancel = () => setShowSaveModal(false);
  const handleSave = () => mutate({ id: app.id as number, body: { content } });

  return (
    <Modal className={StyledSaveModal} theme="dark">
      <h2>{getLabel('apps.text-file.save-modal.title')}</h2>
      <p>{getLabel('apps.text-file.save-modal.description')}</p>
      <div className={StyledButtons}>
        <Button color="zinc" onClick={handleCancel} disabled={isPending}>
          {getLabel('commons.cancel')}
        </Button>
        <Button color="red" onClick={handleDiscard} disabled={isPending}>
          {getLabel('commons.discard')}
        </Button>
        <Button color="green" onClick={handleSave} loading={isPending}>
          {getLabel('commons.save')}
        </Button>
      </div>
    </Modal>
  );
};

export default SaveModal;


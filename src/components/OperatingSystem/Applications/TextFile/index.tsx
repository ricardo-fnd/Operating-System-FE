import { useState, useEffect, useCallback, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import SaveModal from "./SaveModal";
import Loading from "./Loading";
import Error from "./Error";
import Footer from "./Footer";

import { useLabels, TextFilesService } from "src/services/client";
import { NotificationsService, AppsService } from "src/services";
import { QUERIES_KEYS } from "src/enums";

import type { TextFileProps } from "./types";

const StyledContainer = "flex flex-col w-full h-full";
const StyledTextArea = "w-full h-full p-4 resize-none border-none outline-none text-sm font-mono bg-transparent";

const TextFile = ({ app }: TextFileProps) => {
  const getLabel = useLabels();
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const hasUnsavedChangesRef = useRef(false);
  
  const close = AppsService.useClose();
  const updateApp = AppsService.useUpdate();
  
  const { data: textFile, isLoading, isError } = TextFilesService.useGetUserTextFile(Number(app.id))
  
  const hasUnsavedChanges = content !== (textFile?.content || "");
  hasUnsavedChangesRef.current = hasUnsavedChanges;

  const onClose = useCallback(() => {
    if (!hasUnsavedChangesRef.current) return close(app)
    setShowSaveModal(true);
  }, []);

  useEffect(() => {
    setContent(textFile?.content ?? "")
    updateApp(app.id, { onClose })
  }, [textFile]);

  const { mutate } = TextFilesService.useUpdate({
    onSuccess: (updatedTextFile) => {
      queryClient.setQueryData([QUERIES_KEYS.textFiles, app.id], updatedTextFile);
      NotificationsService.success(getLabel('apps.text-file.saved-successfully'));
    },
  });

  const saveContent = async () => {
    if (!hasUnsavedChanges) return;
    await mutate({ id: app.id as number, body: { content } });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      saveContent();
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !textFile) return <Error />

  return (
    <>
      {showSaveModal && <SaveModal app={app} content={content} setShowSaveModal={setShowSaveModal} /> }
      <div className={StyledContainer}>
        <textarea
          value={content}
          name="text-file-content"
          className={StyledTextArea}
          onKeyDown={handleKeyDown}
          onChange={handleContentChange}
          placeholder={getLabel('apps.text-file.text-area-placeholder')}
        />
        <Footer hasUnsavedChanges={hasUnsavedChanges} textFile={textFile} app={app} content={content} />
      </div>
    </>
  );
};

export default TextFile;

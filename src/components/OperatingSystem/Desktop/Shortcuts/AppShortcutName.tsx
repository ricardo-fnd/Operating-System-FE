import { useEffect, useRef, useState } from "react";

import { Input } from "src/shared/components";

import { useLabels, TextFilesService } from "src/services/client";
import { AppsService, NotificationsService } from "src/services";
import { saveCookiesShortcut } from "./utils";

import type { AppShortcut } from "../types";
import type { Application, User } from "src/types";

const StyledInput = "[&_input]:border [&_input]:text-white [&_input]:text-xs [&_input]:text-center [&_input]:p-0";
const StyledName = "cursor-default";

const AppShortcutName = ({ app, user }: { app: AppShortcut['app']; user?: User | null }) => {
  const getLabel = useLabels();
  const inputRef = useRef<HTMLInputElement>(null);
  const updateApp = AppsService.useUpdate();
  const [editingName, setEditingName] = useState(app.name);

  const { mutate: create } = TextFilesService.useCreate({
    onError: () => updateApp(app.id, { name: editingName.trim(), isEditing: false }),
    onSuccess: ({ id, name, shortcutPositionX, shortcutPositionY }) => {
      const appData = { id, name, type: 'text-file' } as Application;
      saveCookiesShortcut({ user, app: appData, x: shortcutPositionX, y: shortcutPositionY });
      
      updateApp(app.id, { 
        id, 
        name, 
        shortcutPosition: { x: shortcutPositionX, y: shortcutPositionY }, 
        isEditing: false 
      });
      NotificationsService.success(getLabel('apps.text-file.created-successfully'));
    },
  });

  const { mutate: update } = TextFilesService.useUpdate({
    onError: () => updateApp(app.id, { isEditing: false }),
    onSuccess: ({ id, name, shortcutPositionX, shortcutPositionY }) => {
      const appData = { id, name, type: 'text-file' } as Application;
      saveCookiesShortcut({ user, app: appData, x: shortcutPositionX, y: shortcutPositionY }); 
      
      updateApp(app.id, { name, isEditing: false });
      NotificationsService.success(getLabel('apps.text-file.updated-successfully'));
    },
  });
  
  useEffect(() => {
    if (app.isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [app.isEditing]);

  const handleNameSubmit = async () => {
    const trimmedName = editingName.trim() ?? app.name;
    
    if (app.id.toString().startsWith('temp-')) {
      await create({
        name: trimmedName,
        shortcutPositionX: app.shortcutPosition!.x,
        shortcutPositionY: app.shortcutPosition!.y
      });
    } else {
      await update({ id: Number(app.id), body: { name: trimmedName }});
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') handleNameSubmit();
  };

  if (app.type !== 'text-file') return <p className={StyledName}>{getLabel(app.name)}</p>;
  if (!app.isEditing) return <p className={StyledName}>{app.name}</p>;

  return (
    <Input
      ref={inputRef}
      autoFocus
      autoComplete="off"
      value={editingName}
      placeholder={app.name}
      className={StyledInput}
      onChange={setEditingName}
      onBlur={handleNameSubmit}
      onKeyDown={handleKeyDown}
      name={`edit-name-${app.id}-input`}
    />
  )
};

export default AppShortcutName;

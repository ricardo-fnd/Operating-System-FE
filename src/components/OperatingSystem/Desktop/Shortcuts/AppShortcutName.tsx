import { useEffect, useRef, useState } from "react";

import { Input } from "src/shared/components";

import { useLabels, TextFilesService } from "src/services/client";
import { AppsService, NotificationsService } from "src/services";
import { saveShortcutPosition } from "./utils";

import type { AppShortcut } from "../types";
import type { Application, User } from "src/types";

const StyledInput = "[&_input]:border [&_input]:text-white [&_input]:text-xs [&_input]:text-center [&_input]:p-0";

const AppShortcutName = ({ app, user }: { app: AppShortcut['app']; user?: User | null }) => {
  const getLabel = useLabels();
  const inputRef = useRef<HTMLInputElement>(null);
  const updateApp = AppsService.useUpdate();
  const [editingName, setEditingName] = useState(app.name);

  const { mutate: create } = TextFilesService.useCreate({
    onError: () => updateApp(app.id, { name: editingName.trim(), isEditing: false }),
    onSuccess: ({ id, name, shortcutPositionX, shortcutPositionY }) => {
      const appData = { id, name, type: 'text-file' } as Application;
      saveShortcutPosition({ user, app: appData, x: shortcutPositionX, y: shortcutPositionY });
      
      updateApp(app.id, { 
        id, 
        name, 
        shortcutPosition: { x: shortcutPositionX, y: shortcutPositionY }, 
        isEditing: false 
      });
      NotificationsService.success(getLabel('apps.text-file.created-successfully'));
    },
  });
  
  useEffect(() => {
    if (app.isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [app.isEditing]);

  const handleNameSubmit = async () => {
    await create({
      name: editingName.trim() ?? app.name,
      shortcutPositionX: app.shortcutPosition!.x,
      shortcutPositionY: app.shortcutPosition!.y
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') handleNameSubmit();
  };

  if (app.type !== 'text-file') return <p>{getLabel(app.name)}</p>;
  if (!app.isEditing) return <p>{app.name}</p>;

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

"use client";
import { createContext, useContext, useState, useEffect } from "react";

import { TextFileIcon } from "src/shared/components";
import { TextFile } from "src/components/OperatingSystem/Applications";

import APPLICATIONS from "src/applications";
import { getCookies, UsersService } from "src/services/client";

import type { AppsProviderProps, SetState } from "./types";
import type { Application, ShortcutPosition } from "src/types";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<SetState<Application[]>>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

const AppsProvider = ({ children, data, initialUser }: AppsProviderProps) => {
  const { data: user } = UsersService.useMe({ initialData: initialUser });
  
  const setShortcutsPositions = (shortcuts?: ShortcutPosition[] | null) => {
    const updatedPositions = APPLICATIONS.map((app) => {
      const shortcut = shortcuts?.find(({ appId }) => app.id === appId);
      if (!shortcut) return app;
      
      return { ...app, shortcutPosition: { x: shortcut.x, y: shortcut.y } };
    });
    
    return [...updatedPositions, ...fromShortcutsToTextFiles(shortcuts)];
  }
  
  const [apps, setApps] = useState<Application[]>(setShortcutsPositions(data));

  useEffect(() => {
    if (!user || user.guest) return;

    const allPositions = getCookies({ name: "shortcuts-positions" });
    setApps(setShortcutsPositions(allPositions?.[user.id]));
  }, [user?.id]);

  return (
    <AppsContext.Provider value={apps}>
      <AppsUpdateContext.Provider value={setApps}>
        {children}
      </AppsUpdateContext.Provider>
    </AppsContext.Provider>
  );
};

export { AppsProvider, useApps, useAppsUpdate };

const fromShortcutsToTextFiles = (shortcuts?: ShortcutPosition[] | null): Application[] => {
  if (!shortcuts) return [];

  return shortcuts
    .filter(({ type }) => type === 'text-file')
    .map(({ appId, name, x, y }) => ({
      Icon: TextFileIcon,
      id: appId,
      name: name!,
      type: 'text-file',
      showIcon: true,
      component: TextFile,
      shortcutPosition: { x, y },
    }));
};

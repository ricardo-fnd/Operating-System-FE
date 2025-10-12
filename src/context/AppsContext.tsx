"use client";
import { createContext, useContext, useState, useEffect } from "react";

import APPLICATIONS from "src/applications";
import { getCookies, UsersService } from "src/services/client";

import type { Provider, SetState } from "./types";
import type { Application, ShortcutPosition, User } from "src/types";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<SetState<Application[]>>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

const AppsProvider = ({
  children,
  data,
  initialUser,
}: Provider<ShortcutPosition[] | null | undefined> & { initialUser: User | null }) => {
  const { data: user } = UsersService.useMe({ initialData: initialUser });
  
  const setShortcutsPositions = (positions?: ShortcutPosition[] | null) =>
    APPLICATIONS.map((app) => {
      const position = positions?.find(({ appId }) => app.id === appId);
      if (!position) return app;
      
      return { ...app, shortcutPosition: { x: position.x, y: position.y } };
    });
    
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

"use client";
import { createContext, useContext, useState } from "react";

import APPLICATIONS from "src/applications";

import type { Provider, SetState } from "./types";
import type { Application, ShortcutsPositions } from "src/types";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<SetState<Application[]>>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

const AppsProvider = ({
  children,
  data,
}: Provider<ShortcutsPositions | null>) => {
  const setShortcutsPositions = () =>
    APPLICATIONS.map((app) => {
      const position = data?.find(({ appId }) => app.id === appId);
      if (!position) return app;

      const { x, y } = position;
      return { ...app, shortcutPosition: { x, y } };
    });

  const [apps, setApps] = useState<Application[]>(setShortcutsPositions());

  return (
    <AppsContext.Provider value={apps}>
      <AppsUpdateContext.Provider value={setApps}>
        {children}
      </AppsUpdateContext.Provider>
    </AppsContext.Provider>
  );
};

export { AppsProvider, useApps, useAppsUpdate };

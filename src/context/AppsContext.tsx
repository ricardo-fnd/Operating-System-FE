"use client";
import { createContext, useContext, useState } from "react";

import APPLICATIONS from "src/applications";

import type { Dispatch, SetStateAction } from "react";
import type { Application, ShortcutsPositions } from "src/applications";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<
  Dispatch<SetStateAction<Application[]>>
>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

type Props = Readonly<{
  children: React.ReactNode;
  shortcutsPositions: ShortcutsPositions | null;
}>;

const AppsProvider = ({ children, shortcutsPositions }: Props) => {
  const setShortcutsPositions = () =>
    APPLICATIONS.map((app) => {
      const position = shortcutsPositions?.find(
        ({ appId }) => app.id === appId
      );
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

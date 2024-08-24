"use client";
import { createContext, useContext, useState } from "react";

import APPLICATIONS from "src/applications";

import type { Dispatch, SetStateAction } from "react";
import type { Application, AppsPosition } from "src/applications";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<
  Dispatch<SetStateAction<Application[]>>
>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

type Props = Readonly<{
  children: React.ReactNode;
  appsPosition: AppsPosition | null;
}>;

const AppsProvider = ({ children, appsPosition }: Props) => {
  const [apps, setApps] = useState<Application[]>(() =>
    APPLICATIONS.map((app) => {
      const appPosition = appsPosition?.find(({ appId }) => app.id === appId);

      if (!appPosition) return app;
      return { ...app, position: { x: appPosition.x, y: appPosition.y } };
    })
  );

  return (
    <AppsContext.Provider value={apps}>
      <AppsUpdateContext.Provider value={setApps}>
        {children}
      </AppsUpdateContext.Provider>
    </AppsContext.Provider>
  );
};

export { AppsProvider, useApps, useAppsUpdate };

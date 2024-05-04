"use client";
import { createContext, useContext, useState } from "react";

import APPLICATIONS from "src/applications";

import type { Dispatch, SetStateAction } from "react";
import type { Application } from "src/applications";

const AppsContext = createContext(APPLICATIONS);
const AppsUpdateContext = createContext<
  Dispatch<SetStateAction<Application[]>>
>(() => {});

const useApps = () => useContext(AppsContext);
const useAppsUpdate = () => useContext(AppsUpdateContext);

type Props = Readonly<{ children: React.ReactNode }>;

const AppsProvider = ({ children }: Props) => {
  const [apps, setApps] = useState<Application[]>(APPLICATIONS);

  return (
    <AppsContext.Provider value={apps}>
      <AppsUpdateContext.Provider value={setApps}>
        {children}
      </AppsUpdateContext.Provider>
    </AppsContext.Provider>
  );
};

export { AppsProvider, useApps, useAppsUpdate };

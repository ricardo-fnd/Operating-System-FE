"use client";
import { createContext, useContext, useState } from "react";

import type { Dispatch, SetStateAction, ReactNode } from "react";

export type History = { active: boolean; search: string }[];

const HistoryContext = createContext<History>([]);
const UpdateHistoryContext = createContext<Dispatch<SetStateAction<History>>>(
  () => {}
);

const useHistory = () => useContext(HistoryContext);
const useUpdateHistory = () => useContext(UpdateHistoryContext);

type Props = { children: ReactNode };

const HistoryProvider = ({ children }: Props) => {
  const [history, setHistory] = useState<History>([
    { active: true, search: "browser-app-landing-page" },
  ]);

  return (
    <HistoryContext.Provider value={history}>
      <UpdateHistoryContext.Provider value={setHistory}>
        {children}
      </UpdateHistoryContext.Provider>
    </HistoryContext.Provider>
  );
};

export { HistoryProvider, useHistory, useUpdateHistory };

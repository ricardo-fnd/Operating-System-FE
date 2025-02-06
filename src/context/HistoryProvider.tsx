"use client";
import { createContext, useContext, useState } from "react";

import type { BrowserHistory } from "src/types";
import type { SetState, Provider } from "./types";

const HistoryContext = createContext<BrowserHistory>([]);
const UpdateHistoryContext = createContext<SetState<BrowserHistory>>(() => {});

const useHistory = () => useContext(HistoryContext);
const useUpdateHistory = () => useContext(UpdateHistoryContext);

const HistoryProvider = ({ children }: Provider) => {
  const [history, setHistory] = useState<BrowserHistory>([
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

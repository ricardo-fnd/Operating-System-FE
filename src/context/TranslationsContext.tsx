"use client";
import { createContext, useContext, useState } from "react";

import type { Translations } from "src/types";
import type { Provider, SetState } from "./types";

const TranslationsContext = createContext({});
const UpdateTranslationsContext = createContext<SetState<Translations>>(
  () => {}
);

const useTranslations = () => useContext(TranslationsContext);
const useUpdateTranslations = () => useContext(UpdateTranslationsContext);

const TranslationsProvider = ({ children, data }: Provider<Translations>) => {
  const [translations, setTranslations] = useState(data as Translations);

  return (
    <TranslationsContext.Provider value={translations}>
      <UpdateTranslationsContext.Provider value={setTranslations}>
        {children}
      </UpdateTranslationsContext.Provider>
    </TranslationsContext.Provider>
  );
};

export { TranslationsProvider, useTranslations, useUpdateTranslations };

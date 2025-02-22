"use client";
import { createContext, useContext, useState } from "react";

import { setCookies } from "src/services/client";

import type { Translations } from "src/types";
import type { Provider, SetState } from "./types";

const TranslationsContext = createContext({} as Translations);
const UpdateTranslationsContext = createContext<
  (translations: Translations) => void
>(() => {});

const useTranslations = () => useContext(TranslationsContext);
const useUpdateTranslations = () => useContext(UpdateTranslationsContext);

const TranslationsProvider = ({ children, data }: Provider<Translations>) => {
  const [translations, setTranslations] = useState(data as Translations);

  const changeTranslations = (translations: Translations) => {
    setTranslations(translations);
    setCookies({ name: "NEXT_LOCALE", value: translations.language });
  };

  return (
    <TranslationsContext.Provider value={translations}>
      <UpdateTranslationsContext.Provider value={changeTranslations}>
        {children}
      </UpdateTranslationsContext.Provider>
    </TranslationsContext.Provider>
  );
};

export { TranslationsProvider, useTranslations, useUpdateTranslations };

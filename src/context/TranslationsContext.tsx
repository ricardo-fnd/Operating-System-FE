"use client";
import { createContext, useContext, useState } from "react";

import type { Dispatch, SetStateAction, ReactNode } from "react";

const TranslationsContext = createContext({});
const UpdateTranslationsContext = createContext<
  Dispatch<SetStateAction<{ [key: string]: string }>>
>(() => {});

const useTranslations = () => useContext(TranslationsContext);
const useUpdateTranslations = () => useContext(UpdateTranslationsContext);

type Props = { children: ReactNode; initialData: { [key: string]: string } };

const TranslationsProvider = ({ children, initialData }: Props) => {
  const [translations, setTranslations] = useState(initialData);

  return (
    <TranslationsContext.Provider value={translations}>
      <UpdateTranslationsContext.Provider value={setTranslations}>
        {children}
      </UpdateTranslationsContext.Provider>
    </TranslationsContext.Provider>
  );
};

export { TranslationsProvider, useTranslations, useUpdateTranslations };

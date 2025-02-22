import { ToastContainer } from "react-toastify";

import { TranslationsProvider } from "./TranslationsContext";
import { HistoryProvider } from "./HistoryProvider";
import ReactQueryProvider from "./ReactQueryContext";

import { useApps } from "./AppsContext";
import { useTranslations, useUpdateTranslations } from "./TranslationsContext";
import { useHistory, useUpdateHistory } from "./HistoryProvider";

import type { BaseProviders } from "./types";

const BaseProviders = ({ language, translations, children }: BaseProviders) => (
  <TranslationsProvider data={{ ...translations, language }}>
    <ReactQueryProvider>
      {children}
      <ToastContainer />
    </ReactQueryProvider>
  </TranslationsProvider>
);

export default BaseProviders;

export {
  HistoryProvider,
  useApps,
  useTranslations,
  useUpdateTranslations,
  useHistory,
  useUpdateHistory,
};

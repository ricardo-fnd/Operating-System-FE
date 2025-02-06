import { AppsProvider } from "./AppsContext";
import { TranslationsProvider } from "./TranslationsContext";
import { HistoryProvider } from "./HistoryProvider";
import ReactQueryProvider from "./ReactQueryContext";

import { useApps } from "./AppsContext";
import { useTranslations, useUpdateTranslations } from "./TranslationsContext";
import { useHistory, useUpdateHistory } from "./HistoryProvider";

import type { BaseProviders } from "./types";

const BaseProviders = ({
  translations,
  shortcutsPositions,
  children,
}: BaseProviders) => (
  <TranslationsProvider data={translations}>
    <AppsProvider data={shortcutsPositions}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </AppsProvider>
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

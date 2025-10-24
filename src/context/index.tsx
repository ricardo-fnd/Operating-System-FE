import { TranslationsProvider } from "./TranslationsContext";
import { HistoryProvider } from "./HistoryProvider";
import ReactQueryProvider from "./ReactQueryContext";
import { NotificationsProvider } from "src/services/notifications-service";

import { AppsProvider, useApps } from "./AppsContext";
import { WebSocketProvider, useWebSocket } from "./WebSocketContext";
import { useTranslations, useUpdateTranslations } from "./TranslationsContext";
import { useHistory, useUpdateHistory } from "./HistoryProvider";

import type { BaseProviders } from "./types";

const BaseProviders = ({ language, translations, children }: BaseProviders) => (
  <TranslationsProvider data={{ ...translations, language }}>
    <ReactQueryProvider>
        {children}
        <NotificationsProvider />
    </ReactQueryProvider>
  </TranslationsProvider>
);

export default BaseProviders;

export {
  HistoryProvider,
  WebSocketProvider,
  AppsProvider,
  useApps,
  useTranslations,
  useUpdateTranslations,
  useHistory,
  useUpdateHistory,
  useWebSocket,
};

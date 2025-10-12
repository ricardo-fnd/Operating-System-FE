import "server-only";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import BaseProviders from "src/context";
import { AppsProvider } from "src/context/AppsContext";
import OperatingSystem from "src/components/OperatingSystem";

import { getQueryClient, TranslationsService } from "src/services";
import { getCookies, getLanguage, UsersService } from "src/services/server";

export default async function Home() {
  const queryClient = getQueryClient();

  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  
  const appsShortcutsPositions = getCookies({ name: "shortcuts-positions" });
  
  const user = await UsersService.prefetchUser();
  const userShortcutsPositions = user ? appsShortcutsPositions?.[user.id] : undefined;
  
  return (
    <BaseProviders language={language} translations={translations}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppsProvider initialUser={user} data={userShortcutsPositions}>
          <OperatingSystem initialUser={user} />
        </AppsProvider>
      </HydrationBoundary>
    </BaseProviders>
  );
}

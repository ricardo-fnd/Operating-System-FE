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

  const shortcutsPositions = getCookies({
    name: "shortcuts-positions",
  });

  await UsersService.prefetchUser();

  return (
    <BaseProviders language={language} translations={translations}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AppsProvider data={shortcutsPositions}>
          <OperatingSystem />
        </AppsProvider>
      </HydrationBoundary>
    </BaseProviders>
  );
}

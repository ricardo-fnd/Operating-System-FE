import "server-only";

import OperatingSystem from "src/components/OperatingSystem";

import { getCookies, getLanguage } from "src/services/server";
import { TranslationsService } from "src/services";
import { AppsProvider, TranslationsProvider } from "src/context";

export default async function Home() {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  const appsPosition = getCookies({ name: "apps-position" });

  return (
    <TranslationsProvider initialData={translations}>
      <AppsProvider appsPosition={appsPosition}>
        <OperatingSystem language={language} />
      </AppsProvider>
    </TranslationsProvider>
  );
}

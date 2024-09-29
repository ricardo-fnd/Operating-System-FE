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

  const shortcutsPositions = getCookies({
    name: "shortcuts-positions",
  });

  return (
    <TranslationsProvider initialData={translations}>
      <AppsProvider shortcutsPositions={shortcutsPositions}>
        <OperatingSystem language={language} />
      </AppsProvider>
    </TranslationsProvider>
  );
}

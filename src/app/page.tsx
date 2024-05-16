import "server-only";
import OperatingSystem from "src/components/OperatingSystem";

import { getLanguage } from "src/services/server";
import { TranslationsService } from "src/services";
import { TranslationsProvider } from "src/context";

export default async function Home() {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  return (
    <TranslationsProvider initialData={translations}>
      <OperatingSystem language={language} />
    </TranslationsProvider>
  );
}

import "server-only";
import OperatingSystem from "src/components/OperatingSystem";

import { SUPPORTED_LANGUAGES } from "src/enums";
import { TranslationsService } from "src/services";
import { TranslationsProvider } from "src/context/TranslationsContext";

export default async function Home() {
  const translations = await TranslationsService.getTranslations({
    language: SUPPORTED_LANGUAGES.en,
  });

  return (
    <TranslationsProvider initialData={translations}>
      <OperatingSystem />
    </TranslationsProvider>
  );
}

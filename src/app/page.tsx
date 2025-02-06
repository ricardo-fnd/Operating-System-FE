import "server-only";
import { ToastContainer } from "react-toastify";

import OperatingSystem from "src/components/OperatingSystem";

import { getCookies, getLanguage, UsersService } from "src/services/server";
import { TranslationsService } from "src/services";
import BaseProviders from "src/context";

export default async function Home() {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  const shortcutsPositions = getCookies({
    name: "shortcuts-positions",
  });

  const user = await UsersService.prefetchUser();

  return (
    <BaseProviders
      translations={translations}
      shortcutsPositions={shortcutsPositions}
    >
      <OperatingSystem user={user} language={language} />
      <ToastContainer />
    </BaseProviders>
  );
}

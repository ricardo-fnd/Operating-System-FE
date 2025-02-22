import "server-only";

import BaseProviders from "src/context";
import ResetPassword from "src/components/ResetPassword";

import { TranslationsService } from "src/services";
import { getLanguage } from "src/services/server";

const StyledContainer =
  "flex items-center justify-center w-screen h-screen p-4 bg-gradient-to-t from-slate-900 to-slate-700";

export default async function Page() {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  return (
    <BaseProviders language={language} translations={translations}>
      <div className={StyledContainer}>
        <ResetPassword />
      </div>
    </BaseProviders>
  );
}

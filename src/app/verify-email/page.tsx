import "server-only";

import BaseProviders from "src/context";
import VerifyEmail from "src/components/VerifyEmail";

import { TranslationsService } from "src/services";
import { getLanguage, UsersService } from "src/services/server";

type Props = { searchParams: { token: string } };

const StyledContainer =
  "flex items-center justify-center w-screen h-screen p-4 bg-gradient-to-t from-slate-900 to-slate-700";

export default async function Page({ searchParams }: Props) {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  const user = await UsersService.verifyAccount({ token: searchParams.token });

  return (
    <BaseProviders language={language} translations={translations}>
      <div className={StyledContainer}>
        <VerifyEmail user={user} />
      </div>
    </BaseProviders>
  );
}

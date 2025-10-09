import "server-only";

import BaseProviders from "src/context";
import Header from "src/components/WelcomeScreen/Header";
import VerifyEmail from "src/components/VerifyEmail";
import Footer from "src/components/WelcomeScreen/Footer";

import { TranslationsService } from "src/services";
import { getLanguage, UsersService } from "src/services/server";

type Props = { searchParams: { token: string } };

const StyledContainer = "flex flex-col w-screen h-screen bg-black relative";
const StyledContent = "flex-1 flex items-center justify-center";

export default async function Page({ searchParams }: Props) {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  const user = await UsersService.verifyAccount({ token: searchParams.token });

  return (
    <BaseProviders language={language} translations={translations}>
      <div className={StyledContainer}>
        <Header />
          <div className={StyledContent}>
            <VerifyEmail user={user} />
          </div>
        <Footer />
      </div>
    </BaseProviders>
  );
}

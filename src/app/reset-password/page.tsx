import "server-only";
import { redirect } from "next/navigation";

import BaseProviders from "src/context";
import Header from "src/components/WelcomeScreen/Header";
import ResetPassword from "src/components/ResetPassword";
import Footer from "src/components/WelcomeScreen/Footer";

import { TranslationsService } from "src/services";
import { getLanguage } from "src/services/server";

type Props = { searchParams: { token: string } };

const StyledContainer = "flex flex-col w-screen h-screen bg-black relative";
const StyledContent = "flex-1 flex items-center justify-center";

export default async function Page({ searchParams }: Props) {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  if (!searchParams.token) redirect("/");

  return (
    <BaseProviders language={language} translations={translations}>
      <div className={StyledContainer}>
        <Header />
          <div className={StyledContent}>
            <ResetPassword />
          </div>
        <Footer />
      </div>
    </BaseProviders>
  );
}

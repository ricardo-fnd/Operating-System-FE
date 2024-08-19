import "src/styles/globals.css";

import { getLanguage } from "src/services/server";
import { TranslationsService } from "src/services";

import type { Metadata } from "next";

type Props = Readonly<{ children: React.ReactNode }>;

const Body = "w-screen h-screen overflow-hidden";

export default function RootLayout({ children }: Props) {
  const language = getLanguage();

  return (
    <html lang={language}>
      <body className={Body}>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const language = getLanguage();
  const translations = await TranslationsService.getTranslations({
    language,
  });

  return {
    title: translations["metadata.title"],
    description: translations["metadata.description"],
  };
}

import { SUPPORTED_LANGUAGES } from "src/enums";
import { LABELS_URL, LOCALISE_KEY } from "src/env-variables";
import fetch from "src/services/api/fetch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const queryLanguage = searchParams.get(
    "language"
  ) as keyof typeof SUPPORTED_LANGUAGES;

  const language = SUPPORTED_LANGUAGES[queryLanguage] ?? SUPPORTED_LANGUAGES.en;
  const locoURL = `${LABELS_URL}/${language}.json?format=script`;

  const data = await fetch(locoURL, {
    headers: { Authorization: `Loco ${LOCALISE_KEY}` },
    parseResponse: false,
  });

  return Response.json(data);
}

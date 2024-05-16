import { LABELS_URL, LOCALISE_KEY } from "src/env-variables";
import fetch from "src/services/api/fetch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const language = searchParams.get("language");

  const locoURL = `${LABELS_URL}/${language}.json?format=script`;
  const data = await fetch(locoURL, {
    headers: { Authorization: `Loco ${LOCALISE_KEY}` },
  });

  return Response.json(data);
}

import { GOOGLE_ENGINE_CX, GOOGLE_API_KEY } from "src/env-variables";
import fetch from "src/services/api/fetch";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page") || 1;

  //google API uses a logic of indexes instead of pages. see start at https://developers.google.com/custom-search/v1/reference/rest/v1/cse/list
  const pageToIndex = page === 1 ? 1 : `${parseInt(page) - 1}1`;

  const GOOGLE_API_URL = "https://www.googleapis.com/customsearch/v1";
  const params = `key=${GOOGLE_API_KEY}&cx=${GOOGLE_ENGINE_CX}&q=${query}&start=${pageToIndex}`;

  const apiURL = `${GOOGLE_API_URL}?${params}`;
  const data = await fetch(apiURL);

  return Response.json(data);
}

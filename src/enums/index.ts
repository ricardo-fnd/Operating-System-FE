import { TLDS } from "./TLDS";
import { QUERIES_KEYS } from "./QueriesKeys";

enum SUPPORTED_LANGUAGES {
  pt = "pt",
  en = "en",
}

const LANGUAGES = [
  { abbv: "PT", label: "Português", value: SUPPORTED_LANGUAGES.pt },
  { abbv: "EN", label: "English", value: SUPPORTED_LANGUAGES.en },
];

export { SUPPORTED_LANGUAGES, LANGUAGES, TLDS, QUERIES_KEYS };

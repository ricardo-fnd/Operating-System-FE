import en from "public/languages/en.svg";
import pt from "public/languages/pt.svg";

import { TLDS } from "./TLDS";
import { QUERIES_KEYS } from "./QueriesKeys";

enum SUPPORTED_LANGUAGES {
  pt = "pt",
  en = "en",
}

const LANGUAGES = [
  { abbv: "PT", label: "Português", value: SUPPORTED_LANGUAGES.pt, flag: pt },
  { abbv: "EN", label: "English", value: SUPPORTED_LANGUAGES.en, flag: en },
];

export { SUPPORTED_LANGUAGES, LANGUAGES, TLDS, QUERIES_KEYS };

import Script from "next/script";

import { GOOGLE_ENGINE_CX } from "src/env-variables";

const GoogleSearchEngineScript = () => (
  <Script async src={`https://cse.google.com/cse.js?cx=${GOOGLE_ENGINE_CX}`} />
);

export default GoogleSearchEngineScript;

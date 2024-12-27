import LandingPage from "./LandingPage";
import SearchEnginePage from "./SearchEnginePage";
import Website from "./Website";

import { useHistory } from "src/context";
import { TLDS } from "src/enums";

type Props = { setLoading: (loading: boolean) => void };

const Content = ({ setLoading }: Props) => {
  const history = useHistory();
  const currentSearch = history.find(({ active }) => active)?.search;

  if (!currentSearch || currentSearch === "browser-app-landing-page") {
    return <LandingPage setLoading={setLoading} />;
  }

  const isWebsite =
    currentSearch.includes("http") ||
    currentSearch.includes("www") ||
    TLDS.some((tld) => currentSearch.includes(tld));

  if (isWebsite) return <Website setLoading={setLoading} url={currentSearch} />;
  return <SearchEnginePage setLoading={setLoading} query={currentSearch} />;
};

export default Content;

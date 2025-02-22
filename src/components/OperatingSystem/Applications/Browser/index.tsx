import { useState } from "react";

import TopBar from "./TopBar";
import Content from "./Content";

import { HistoryProvider } from "src/context";
import GoogleSearchEngineScript from "./Script";

const StyledBrowser = "w-full h-full overflow-hidden";

const Browser = () => {
  const [loadingPage, setLoadingPage] = useState(false);

  return (
    <>
      <HistoryProvider>
        <div className={StyledBrowser}>
          <TopBar loading={loadingPage} />
          <Content setLoading={setLoadingPage} />
        </div>
      </HistoryProvider>
      <GoogleSearchEngineScript />
    </>
  );
};

export default Browser;

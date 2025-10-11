import { useEffect } from "react";

import Shortcuts from "./Shortcuts";

import { useLabels } from "src/services/client";

import type { Content } from "../../types";

// TOPBAR_HEIGHT = 60px
const StyledLandingPage = "flex flex-col items-center justify-between gap-8 w-full h-[calc(100%-60px)] bg-zinc-950 text-white p-10 pb-4";
const StyledWarning = "flex flex-col gap-2 p-6 items-start bg-black/90 text-sm border border-zinc-600 rounded-lg w-full last:text-xs";

const LandingPage = ({ setLoading }: Content) => {
  const getLabel = useLabels();

  useEffect(() => setLoading(false), []);

  return (
    <div className={StyledLandingPage}>
      <Shortcuts />
      <div className={StyledWarning}>
        <p>{getLabel("apps.browser.landing.warning-title")}</p>
        <p>{getLabel("apps.browser.landing.warning-description")}</p>
      </div>
    </div>
  );
};

export default LandingPage;

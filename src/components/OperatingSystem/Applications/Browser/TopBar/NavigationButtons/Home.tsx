import { HomeIcon } from "src/shared/components";

import { useHistory, useUpdateHistory } from "src/context";

const StyledButton = "cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

const HomeButton = () => {
  const history = useHistory();
  const updateHistory = useUpdateHistory();

  const currentActive = history.find(({ active }) => active);
  const isOnLandingPage = currentActive?.search === "browser-app-landing-page";

  const goHome = () => {
    updateHistory((history) => {
      const urls = history.map(({ search }) => ({ active: false, search }));
      return [...urls, { active: true, search:"" }];
    });
  };

  return (
    <button onClick={goHome} className={StyledButton} disabled={isOnLandingPage}>
      <HomeIcon width={16} height={16} />
    </button>
  );
};

export default HomeButton;


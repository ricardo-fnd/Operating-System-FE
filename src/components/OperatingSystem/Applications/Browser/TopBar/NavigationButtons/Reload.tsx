import { TbReload } from "react-icons/tb";

import { useHistory, useUpdateHistory } from "src/context";

const StyledButton =
  "cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

const ReloadButton = () => {
  const history = useHistory();
  const updateHistory = useUpdateHistory();

  const currentActive = history.find(({ active }) => active);
  const disabled =
    !currentActive || currentActive.search === "browser-app-landing-page";

  const reload = () => {
    updateHistory([]);
    setTimeout(() => updateHistory([...history]), 0);
  };

  return (
    <button onClick={reload} disabled={disabled} className={StyledButton}>
      <TbReload />
    </button>
  );
};

export default ReloadButton;

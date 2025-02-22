import { IoMdArrowRoundForward } from "react-icons/io";

import { useHistory, useUpdateHistory } from "src/context";

const StyledButton =
  "cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

const ForwardButton = () => {
  const history = useHistory();
  const updateHistory = useUpdateHistory();

  const nextIndex = history.findIndex(({ active }) => active) + 1;

  const next = () => {
    updateHistory((history) =>
      history.map((url, index) => {
        url.active = index === nextIndex;
        return url;
      })
    );
  };

  return (
    <button
      onClick={next}
      className={StyledButton}
      disabled={nextIndex >= history.length}
    >
      <IoMdArrowRoundForward />
    </button>
  );
};

export default ForwardButton;

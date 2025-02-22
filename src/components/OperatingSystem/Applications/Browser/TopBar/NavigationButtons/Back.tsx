import { IoMdArrowRoundBack } from "react-icons/io";

import { useHistory, useUpdateHistory } from "src/context";

const StyledButton =
  "cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed";

const BackButton = () => {
  const history = useHistory();
  const updateHistory = useUpdateHistory();

  const prevIndex = history.findIndex(({ active }) => active) - 1;

  const back = () => {
    updateHistory((history) =>
      history.map((url, index) => {
        url.active = index === prevIndex;
        return url;
      })
    );
  };

  return (
    <button onClick={back} className={StyledButton} disabled={prevIndex < 0}>
      <IoMdArrowRoundBack />
    </button>
  );
};

export default BackButton;

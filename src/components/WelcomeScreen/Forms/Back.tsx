import { IoMdArrowRoundBack } from "react-icons/io";

import { Button } from "src/shared/components/Buttons";

const StyledBack =
  "absolute left-10 top-10 p-2";

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} className={StyledBack}>
    <IoMdArrowRoundBack color="white" />
  </Button>
);

export default BackButton;

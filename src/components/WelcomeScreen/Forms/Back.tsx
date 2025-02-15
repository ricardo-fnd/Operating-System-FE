import { IoMdArrowRoundBack } from "react-icons/io";

import { Button } from "src/shared/components/Buttons";

const StyledBack = "absolute left-0 top-0 p-2";

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick} className={StyledBack}>
    <IoMdArrowRoundBack />
  </Button>
);

export default BackButton;

import { IoMdArrowRoundBack } from "react-icons/io";

const StyledBack =
  "absolute left-0 top-0 flex justify-center items-center p-2 cursor-pointer rounded-full bg-white";

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className={StyledBack}>
    <IoMdArrowRoundBack />
  </button>
);

export default BackButton;

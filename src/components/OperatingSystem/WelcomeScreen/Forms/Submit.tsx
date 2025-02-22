import { AiOutlineLogin } from "react-icons/ai";

import { Loading } from "src/shared/components";

import type { ButtonProps } from "src/shared/components/Buttons";

const StyledButton =
  "absolute bottom-3 right-0 cursor-pointer disabled:cursor-not-allowed";
const StyledLoading = "w-6 h-6 mb-1 mr-0.5";

const Submit = ({ loading, disabled, ...props }: ButtonProps) => (
  <button {...props} disabled={disabled} className={StyledButton}>
    {loading ? (
      <Loading className={StyledLoading} />
    ) : (
      <AiOutlineLogin color={disabled ? "gray" : "white"} size={28} />
    )}
  </button>
);

export default Submit;

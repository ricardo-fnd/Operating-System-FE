import { Loading, ForwardIcon } from "src/shared/components";

import type { ButtonProps } from "src/shared/components";

const StyledButton =
  "absolute bottom-3 right-0.5 cursor-pointer disabled:cursor-not-allowed";
const StyledLoading = "w-6 h-6 mb-1 mr-0.5";

const Submit = ({ loading, disabled, ...props }: ButtonProps) => (
  <button {...props} disabled={disabled} className={StyledButton}>
    {loading ? (
      <Loading className={StyledLoading} />
    ) : (
      <ForwardIcon color={disabled ? "gray" : "white"} width={20} height={20} />
    )}
  </button>
);

export default Submit;

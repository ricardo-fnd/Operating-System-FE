import { LoadingIcon, ForwardIcon } from "src/shared/components";

import type { ButtonProps } from "src/shared/components";

const StyledButton =
  "absolute bottom-3 right-0.5 cursor-pointer data-[loading=true]:bottom-2.5 disabled:cursor-not-allowed";

const Submit = ({ loading, disabled, ...props }: ButtonProps) => (
  <button {...props} disabled={disabled} className={StyledButton} data-loading={loading}>
    {loading ? (
      <LoadingIcon width={28} height={28} color="#ffffff" />
    ) : (
      <ForwardIcon color={disabled ? "gray" : "white"} width={20} height={20} />
    )}
  </button>
);

export default Submit;

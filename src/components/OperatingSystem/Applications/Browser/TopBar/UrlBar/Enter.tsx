import { LoadingIcon, ForwardIcon } from "src/shared/components";

import type { EnterUrl } from "../../types";

const StyledEnter = "flex items-center h-full pr-2 cursor-pointer";

const Enter = ({ search, loading }: EnterUrl) => (
  <div className={StyledEnter}>
    {loading ? (
      <LoadingIcon width={28} height={28} color="#000000" />
    ) : (
      <ForwardIcon onClick={search} />
    )}
  </div>
);

export default Enter;

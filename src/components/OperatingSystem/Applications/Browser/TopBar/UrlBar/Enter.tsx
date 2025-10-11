import { Loading, ForwardIcon } from "src/shared/components";

import type { EnterUrl } from "../../types";

const StyledEnter = "flex items-center h-full pr-2 cursor-pointer";
const StyledLoading = "w-5 h-5 -mt-2";

const Enter = ({ search, loading }: EnterUrl) => (
  <div className={StyledEnter}>
    {loading ? (
      <Loading className={StyledLoading} />
    ) : (
      <ForwardIcon onClick={search} />
    )}
  </div>
);

export default Enter;

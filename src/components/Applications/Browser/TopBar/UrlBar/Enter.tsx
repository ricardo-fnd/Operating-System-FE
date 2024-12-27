import { Loading } from "src/shared/components";
import { IoMdArrowRoundForward } from "react-icons/io";

type Props = { search: () => void; loading: boolean };

const StyledEnter =
  "flex items-center h-full pr-2 cursor-pointer data-[loading=true]:-mt-1";
const StyledLoading = "w-5 h-5 -mt-2";

const Enter = ({ search, loading }: Props) => (
  <div data-loading={loading} className={StyledEnter}>
    {loading ? (
      <Loading className={StyledLoading} />
    ) : (
      <IoMdArrowRoundForward onClick={search} />
    )}
  </div>
);

export default Enter;

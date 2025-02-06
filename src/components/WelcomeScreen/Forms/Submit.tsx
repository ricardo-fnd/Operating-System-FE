import { Loading } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { Submit } from "../types";

const StyledButton =
  "flex justify-center items-center w-full h-10 bg-gray-50 rounded-full disabled:opacity-75 disabled:cursor-not-allowed";
const StyledLoading = "w-6 h-6 -mt-1";

const Submit = ({ label, loading, ...props }: Submit) => {
  const getLabel = useLabels();

  return (
    <button {...props} className={StyledButton}>
      {loading ? (
        <Loading className={StyledLoading} />
      ) : (
        <p>{getLabel(label)}</p>
      )}
    </button>
  );
};

export default Submit;

import { LoadingIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

const StyledContainer = "flex flex-col w-full h-full";
const StyledLoadingContainer = "flex flex-col items-center justify-center h-full gap-4 text-gray-600 text-sm";

const Loading = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <div className={StyledLoadingContainer}>
        <LoadingIcon width={48} height={48} color="#0E91FF" />
        <span>{getLabel('apps.text-file.loading')}</span>
      </div>
    </div>
  );
};

export default Loading;


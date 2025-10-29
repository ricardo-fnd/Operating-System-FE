import { useLabels } from "src/services/client";

const StyledContainer = "flex flex-col items-center justify-center h-full gap-4 text-gray-600 text-sm";

const Error = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <span>
        {getLabel('apps.text-file.not-found')}
      </span>
    </div>
  );
};

export default Error;


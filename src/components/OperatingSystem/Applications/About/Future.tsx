import { useLabels } from "src/services/client";

const StyledContainer = "flex flex-col gap-2 w-full";
const StyledTitle =
  "w-fit pr-10 text-lg font-bold border-b-2 border-orange-400";

const Future = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <h2 className={StyledTitle}>{getLabel("apps.about.future")}</h2>
      <p>{getLabel("apps.about.future.description")}</p>
    </div>
  );
};

export default Future;

import { useLabels } from "src/services";

const StyledContainer = "flex flex-col gap-2 w-full";
const StyledTitle =
  "w-fit pr-10 text-lg font-bold border-b-2 border-orange-400";

const History = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <h2 className={StyledTitle}>{getLabel("apps.about.history")}</h2>
      <p>{getLabel("apps.about.history.description")}</p>
    </div>
  );
};

export default History;

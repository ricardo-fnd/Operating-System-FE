import { useLabels } from "src/services/client";

const StyledContainer = "flex flex-col gap-2 w-full";
const StyledTitle =
  "w-fit pr-10 text-lg font-bold border-b-2 border-orange-400";
const StyledContent = "flex flex-wrap gap-3";

const WhoAmI = () => {
  const getLabel = useLabels();

  return (
    <div className={StyledContainer}>
      <h2 className={StyledTitle}>{getLabel("apps.about.who-am-i")}</h2>
      <div className={StyledContent}>
        <p>Ricardo </p>
        <p>Web developer ⌨️ </p>
        <p>Portugal 🇵🇹 </p>
        <p>1995</p>
      </div>
    </div>
  );
};

export default WhoAmI;

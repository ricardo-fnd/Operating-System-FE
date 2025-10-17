import { WorldCheckIcon } from "src/shared/components";
import { useUpdateHistory } from "src/context";

import type { SearchEngineResults } from "../../types";

const StyledResult = "flex flex-col gap-1 first:cursor-pointer";
const StyledHeader = "flex gap-1 items-center";
const StyledTitle = "font-medium text-xl";
const StyledDomain = "text-xs";
const StyledDescription = "text-sm";

const Result = ({ result }: SearchEngineResults) => {
  const updateHistory = useUpdateHistory();
  const { title, description, domain } = result;

  const enterWebsite = () => {
    updateHistory((history) => {
      const urls = history.map(({ search }) => ({ active: false, search }));
      return [...urls, { active: true, search: domain }];
    });
  };

  return (
    <div className={StyledResult}>
      <div onClick={enterWebsite}>
        <div className={StyledHeader}>
          <WorldCheckIcon width={20} height={20} />
          <p className={StyledTitle}>{title}</p>
        </div>
        <p className={StyledDomain}>{domain}</p>
      </div>
      <p
        className={StyledDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default Result;

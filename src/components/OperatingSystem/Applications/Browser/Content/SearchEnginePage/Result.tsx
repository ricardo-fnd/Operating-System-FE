import { TbWorldCheck } from "react-icons/tb";

import { useUpdateHistory } from "src/context";

import type { SearchEngineResults } from "../../types";

const StyledResult = "flex flex-col gap-1 first:cursor-pointer";
const StyledHeader = "flex gap-2 items-center";
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
          <TbWorldCheck className="w-5 h-5" />
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

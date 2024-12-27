import { TbWorldCheck } from "react-icons/tb";

import type { SearchResultsProps } from "src/services/api/response-types";

type Props = { result: SearchResultsProps["data"][0] };

const StyledResult = "flex flex-col gap-1";
const StyledHeader = "flex gap-2 items-center";
const StyledTitle = "font-medium text-xl";
const StyledDomain = "text-xs";
const StyledDescription = "text-sm";

const Result = ({ result }: Props) => {
  const { title, description, domain } = result;

  return (
    <div className={StyledResult}>
      <div>
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

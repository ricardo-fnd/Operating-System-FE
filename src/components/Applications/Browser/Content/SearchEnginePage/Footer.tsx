import { useLabels } from "src/services/client";

import { SearchResultsProps } from "src/services/api/response-types";

type Props = { metadata: SearchResultsProps["metadata"] };

const StyledFooter = "flex flex-col gap-1";
const StyledMetadata = "flex gap-2";
const StyledGoogle = "text-sm font-medium";

const Footer = ({ metadata }: Props) => {
  const getLabel = useLabels();

  const { total, searchTime } = metadata;
  const baseLabelKey = "apps.browser.engine-results.footer";

  return (
    <footer className={StyledFooter}>
      <div className={StyledMetadata}>
        <p>{getLabel(`${baseLabelKey}.total`, { total })}</p>
        <p>{getLabel(`${baseLabelKey}.time`, { time: searchTime })}</p>
      </div>
      <p className={StyledGoogle}>{getLabel(`${baseLabelKey}.google-info`)}</p>
    </footer>
  );
};

export default Footer;

import { FcNext, FcPrevious } from "react-icons/fc";

import { useLabels } from "src/services/client";

import type { SearchResultsProps } from "src/services/api/response-types";

type Props = {
  setPage: (page: number) => void;
  metadata: SearchResultsProps["metadata"];
  isFetching: boolean;
};

const StyledPagination = "flex gap-6 items-center self-center";
const StyledButton =
  "flex gap-1 items-center font-medium cursor-pointer disabled:cursor-default disabled:opacity-50";

const Pagination = ({ setPage, metadata, isFetching }: Props) => {
  const getLabel = useLabels();
  const { page, maxPages } = metadata;

  return (
    <div className={StyledPagination}>
      <button
        className={StyledButton}
        disabled={page === 1 || isFetching}
        onClick={() => setPage(page - 1)}
      >
        <FcPrevious />
        <p>{getLabel("apps.browser.engine-results.previous-page")}</p>
      </button>
      <p>{getLabel("apps.browser.engine-results.page", { page })}</p>
      <button
        className={StyledButton}
        disabled={page === maxPages || isFetching}
        onClick={() => setPage(page + 1)}
      >
        <p>{getLabel("apps.browser.engine-results.next-page")}</p>
        <FcNext />
      </button>
    </div>
  );
};

export default Pagination;

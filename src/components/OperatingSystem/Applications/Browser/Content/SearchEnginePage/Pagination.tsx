import { ForwardIcon,BackwardIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { SearchEnginePagination } from "../../types";

const StyledPagination = "flex gap-6 items-center self-center";
const StyledButton =
  "flex gap-1 items-center font-medium cursor-pointer disabled:cursor-default disabled:opacity-50";

const Pagination = ({
  setPage,
  metadata,
  isFetching,
}: SearchEnginePagination) => {
  const getLabel = useLabels();
  const { page, maxPages } = metadata;

  return (
    <div className={StyledPagination}>
      <button
        className={StyledButton}
        disabled={page === 1 || isFetching}
        onClick={() => setPage(page - 1)}
      >
        <BackwardIcon />
        <p>{getLabel("apps.browser.engine-results.previous-page")}</p>
      </button>
      <p>{getLabel("apps.browser.engine-results.page", { page })}</p>
      <button
        className={StyledButton}
        disabled={page === maxPages || isFetching}
        onClick={() => setPage(page + 1)}
      >
        <p>{getLabel("apps.browser.engine-results.next-page")}</p>
        <ForwardIcon />
      </button>
    </div>
  );
};

export default Pagination;

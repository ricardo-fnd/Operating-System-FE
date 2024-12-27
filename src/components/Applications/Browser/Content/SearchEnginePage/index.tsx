import { useEffect, useRef, useState } from "react";

import FirstSearchLoading from "./Loading";
import Result from "./Result";
import Pagination from "./Pagination";
import Footer from "./Footer";

import { GoogleService } from "src/services/client";

type Props = { setLoading: (boolean: boolean) => void; query: string };

// TOPBAR_HEIGHT = 64px
const StyledPage =
  "flex flex-col gap-10 w-full h-[calc(100%-64px)] p-4 pt-6 show-y-scrollbar";
const StyledResults = "flex flex-col gap-5";

const SearchEnginePage = ({ setLoading, query }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const { data: results, isFetching } = GoogleService.useSearch({
    query,
    page,
  });

  useEffect(() => ref.current?.scrollTo({ top: 0 }), [results]);
  setLoading(isFetching);

  if (!results) return <FirstSearchLoading />;

  return (
    <div ref={ref} className={StyledPage}>
      <div className={StyledResults}>
        {results.data.map((result) => (
          <Result key={result.link} result={result} />
        ))}
      </div>
      <Pagination
        setPage={setPage}
        isFetching={isFetching}
        metadata={results.metadata}
      />
      <Footer metadata={results.metadata} />
    </div>
  );
};

export default SearchEnginePage;

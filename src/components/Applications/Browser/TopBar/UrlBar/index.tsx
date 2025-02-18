import { useEffect, useState } from "react";

import { Input } from "src/shared/components";
import Enter from "./Enter";

import { useHistory, useUpdateHistory } from "src/context";
import { useLabels } from "src/services/client";

const StyledUrlBar =
  "flex items-center w-1/2 h-10 bg-gray-50 border border-gray-300 rounded-xl overflow-hidden";

const UrlBar = ({ loading }: { loading: boolean }) => {
  const history = useHistory();
  const getLabel = useLabels();
  const updateHistory = useUpdateHistory();
  const [value, setValue] = useState("");

  const updateSearchValue = () => {
    const activeIndex = history.findIndex(({ active }) => active);
    if (activeIndex === 0) return setValue("");
    setValue(history[activeIndex]?.search ?? "");
  };

  const search = () => {
    updateHistory((history) => {
      const urls = history.map(({ search }) => ({ active: false, search }));
      return [...urls, { active: true, search: value }];
    });
  };

  useEffect(updateSearchValue, [history]);

  return (
    <div className={StyledUrlBar}>
      <Input
        value={value}
        disabled={loading}
        name="browser-url"
        onChange={setValue}
        onEnterKey={search}
        placeholder={getLabel("apps.browser.top-bar.type-url")}
      />
      <Enter search={search} loading={loading} />
    </div>
  );
};

export default UrlBar;

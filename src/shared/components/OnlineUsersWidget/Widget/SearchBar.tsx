import Input from "../../Inputs";

import { useLabels } from "src/services/client";

import type { InputProps } from "../../Inputs";

const StyledSearchInput = "w-full text-sm [&_input]:p-2";

const SearchBar = ({ value, onChange, isLoading }: Omit<InputProps, "name"> & { isLoading?: boolean }) => {
  const getLabel = useLabels();
  
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      className={StyledSearchInput}
      name="online-users-search-bar"
      placeholder={getLabel("online-users.search-placeholder")}
      disabled={isLoading}
    />
  );
};

export default SearchBar;


import { LoadingIcon } from "src/shared/components";

// TOPBAR_HEIGHT = 64px
const StyledContainer =
  "flex items-center justify-center w-full h-[calc(100%-64px-64px)]";

const SearchLoading = () => (
  <div className={StyledContainer}>
      <LoadingIcon width={50} height={50} />
  </div>
);

export default SearchLoading;

import { Loading } from "src/shared/components";

// TOPBAR_HEIGHT = 64px
const StyledContainer =
  "flex items-center justify-center w-full h-[calc(100%-64px-64px)]";
const StyledLoading = "w-10 h-10";

const SearchLoading = () => (
  <div className={StyledContainer}>
    <Loading className={StyledLoading} />
  </div>
);

export default SearchLoading;

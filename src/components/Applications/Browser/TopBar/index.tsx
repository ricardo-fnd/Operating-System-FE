import NavigationButtons from "./NavigationButtons";
import Settings from "./Settings";
import UrlBar from "./UrlBar";

const StyledTopBar = "flex gap-3 items-center justify-between py-3 px-6 shadow";

const TopBar = ({ loading }: { loading: boolean }) => (
  <div className={StyledTopBar}>
    <NavigationButtons />
    <UrlBar loading={loading} />
    <Settings />
  </div>
);

export default TopBar;

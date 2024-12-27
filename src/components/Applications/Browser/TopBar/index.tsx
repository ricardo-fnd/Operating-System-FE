import NavigationButtons from "./NavigationButtons";
import Settings from "./Settings";
import UrlBar from "./UrlBar";

type Props = { loading: boolean };

const StyledTopBar = "flex gap-3 items-center justify-between py-3 px-6 shadow";

const TopBar = ({ loading }: Props) => (
  <div className={StyledTopBar}>
    <NavigationButtons />
    <UrlBar loading={loading} />
    <Settings />
  </div>
);

export default TopBar;

import Back from "./Back";
import Forward from "./Forward";
import Reload from "./Reload";
import Home from "./Home";

const StyledLeftDiv = "flex gap-2";

const NavigationButtons = () => (
  <div className={StyledLeftDiv}>
    <Back />
    <Reload />
    <Forward />
    <Home />
  </div>
);

export default NavigationButtons;

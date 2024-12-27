import Back from "./Back";
import Forward from "./Forward";
import Reload from "./Reload";

const StyledLeftDiv = "flex gap-2";

const NavigationButtons = () => (
  <div className={StyledLeftDiv}>
    <Back />
    <Reload />
    <Forward />
  </div>
);

export default NavigationButtons;

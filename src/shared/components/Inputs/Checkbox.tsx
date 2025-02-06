import type { BaseCheckbox } from "./types";

const StyledContainer = "flex gap-2 items-center text-sm";
const StyledCheckbox =
  "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2";

const Checkbox = ({ label, name, ...props }: BaseCheckbox) => (
  <div className={StyledContainer}>
    <input id={name} type="checkbox" className={StyledCheckbox} {...props} />
    <label htmlFor={name}>{label}</label>
  </div>
);

export default Checkbox;

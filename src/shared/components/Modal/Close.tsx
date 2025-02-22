import type { Close } from "./types";

const StyledCloseButton = `absolute top-6 right-8 
  data-[theme="light"]:text-black hover:data-[theme="light"]:text-gray-700
  data-[theme="dark"]:text-slate-200 hover:data-[theme="dark"]:text-white`;
const StyledX = "text-2xl font-bold";

const CloseButton = ({ theme, onClick }: Close) => (
  <button data-theme={theme} className={StyledCloseButton} onClick={onClick}>
    <p className={StyledX}>x</p>
  </button>
);

export default CloseButton;

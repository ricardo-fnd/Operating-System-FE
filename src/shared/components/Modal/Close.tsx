import { Button } from "../Buttons";
import type { Close } from "./types";

const StyledCloseButton = `absolute top-6 right-8 w-5 h-5 p-0 border-0`;

const CloseButton = ({ onClick }: Close) => (
  <Button color="red" className={StyledCloseButton} onClick={onClick}>
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 1024 1024">
      <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"/>
    </svg>
  </Button>
);

export default CloseButton;

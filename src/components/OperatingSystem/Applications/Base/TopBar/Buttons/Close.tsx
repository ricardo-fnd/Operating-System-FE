import { Button } from "src/shared/components";

import { AppsService } from "src/services";

import type { Application } from "src/types";

type Props = { app: Application };

const StyledCloseButton = `p-0 border-0`;

const CloseButton = ({ app }: Props) => {
  const close = AppsService.useClose();

  return (
    <Button color="red" className={StyledCloseButton} onClick={()=> close(app)}>
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 1024 1024">
        <path d="M697.4 759.2l61.8-61.8L573.8 512l185.4-185.4-61.8-61.8L512 450.2 326.6 264.8l-61.8 61.8L450.2 512 264.8 697.4l61.8 61.8L512 573.8z"/>
      </svg>
    </Button>
  );
};

export default CloseButton;
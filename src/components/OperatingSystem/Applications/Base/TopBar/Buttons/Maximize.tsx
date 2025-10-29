import { Button } from "src/shared/components";

import { AppsService } from "src/services";

import type { Application } from "src/types";

type Props = { app: Application };

const StyledMaximizeButton = `p-0 border-0`;

const Maximize = ({ app }: Props) => {
  const maximize = AppsService.useMaximize();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    maximize(app);
  };

  return (
    <Button color="green" className={StyledMaximizeButton} onClick={handleClick}>
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
    </Button>
  );
};

export default Maximize;

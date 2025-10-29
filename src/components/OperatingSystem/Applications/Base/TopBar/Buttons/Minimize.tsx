import { Button } from "src/shared/components";

import { AppsService } from "src/services";

import type { Application } from "src/types";

type Props = { app: Application };

const StyledMinimizeButton = `p-0 border-0`;

const Minimize = ({ app }: Props) => {
  const minimize = AppsService.useMinimize();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    minimize(app);
  };

  return (
    <Button color="yellow" className={StyledMinimizeButton} onClick={handleClick}>
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24">
        <path d="M19 13H5v-2h14v2z"/>
      </svg>
    </Button>
  );
};

export default Minimize;

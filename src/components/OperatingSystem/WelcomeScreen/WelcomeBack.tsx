import { Button } from "src/shared/components/Buttons";

import { useLabels } from "src/services/client";

import type { WelcomeBack } from "./types";

const StyledContainer = "flex flex-col gap-12 -mt-16";
const StyledTitle = "text-6xl font-medium text-slate-50 drop-shadow-lg";
const StyledButtons = "flex gap-3";
const StyledButton = "py-2 px-10 font-medium";

const WelcomeBack = ({ user, showLogin, enter }: WelcomeBack) => {
  const getLabel = useLabels();
  const name = user.name ?? user.username ?? user.email?.split("@")[0] ?? "";

  return (
    <div className={StyledContainer}>
      <h1 className={StyledTitle}>
        {getLabel("welcome-screen.welcome-back.title", { name })}
      </h1>
      <div className={StyledButtons}>
        <Button className={StyledButton} onClick={enter}>
          <p>{getLabel("commons.enter")}</p>
        </Button>
        <Button className={StyledButton} onClick={showLogin}>
          <p>{getLabel("welcome-screen.welcome-back.choose-user")}</p>
        </Button>
      </div>
    </div>
  );
};

export default WelcomeBack;

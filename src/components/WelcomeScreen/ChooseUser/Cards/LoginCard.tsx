import { ForwardIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { LoginCard } from "../../types";

const StyledCard = "bg-blue-950/50 hover:opacity-100 opacity-90 transition-all duration-200 rounded-2xl p-5 cursor-pointer border border-blue-900 flex items-center gap-4 group";
const StyledIconContainer = "flex-shrink-0 w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center";
const StyledContent = "flex-1 flex flex-col gap-1";
const StyledTitle = "text-white font-semibold text-lg";
const StyledDescription = "text-gray-300 text-sm";
const StyledArrowContainer = "flex-shrink-0 w-8 h-8 flex items-center justify-center";

const LoginCard = ({ onClick }: LoginCard) => {
  const getLabel = useLabels();

  return (
    <div className={StyledCard} onClick={onClick}>
      <div className={StyledIconContainer}>
        <UserIcon />
      </div>
      <div className={StyledContent}>
        <h3 className={StyledTitle}>{getLabel("welcome-screen.login.title")}</h3>
        <p className={StyledDescription}>{getLabel("welcome-screen.login.description")}</p>
      </div>
      <div className={StyledArrowContainer}>
        <ForwardIcon color="white" />
      </div>
    </div>
  );
};

const UserIcon = () => (
  <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor"/>
    <path d="M12 14C8.67 14 2 15.67 2 19V20C2 20.55 2.45 21 3 21H21C21.55 21 22 20.55 22 20V19C22 15.67 15.33 14 12 14Z" fill="currentColor"/>
  </svg>
);

export default LoginCard;


import { ArrowIcon } from "src/shared/components";

import { useLabels } from "src/services/client";

import type { RegisterCard } from "../../types";

const StyledCard = "bg-emerald-950/50 hover:opacity-100 opacity-90 transition-all duration-200 rounded-2xl p-5 cursor-pointer border border-emerald-900 flex items-center gap-4 group";
const StyledIconContainer = "flex-shrink-0 w-14 h-14 bg-emerald-900 rounded-xl flex items-center justify-center";
const StyledContent = "flex-1 flex flex-col gap-1";
const StyledTitle = "text-white font-semibold text-lg";
const StyledDescription = "text-gray-300 text-sm";
const StyledArrowContainer = "flex-shrink-0 w-8 h-8 flex items-center justify-center";

const RegisterCard = ({ onClick }: RegisterCard) => {
  const getLabel = useLabels();

  return (
    <div className={StyledCard} onClick={onClick}>
      <div className={StyledIconContainer}>
        <UserPlusIcon />
      </div>
      <div className={StyledContent}>
        <h3 className={StyledTitle}>{getLabel("welcome-screen.register.title")}</h3>
        <p className={StyledDescription}>{getLabel("welcome-screen.register.description")}</p>
      </div>
      <div className={StyledArrowContainer}>
        <ArrowIcon />
      </div>
    </div>
  );
};

const UserPlusIcon = () => (
  <svg className="w-7 h-7 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11C11.21 11 13 9.21 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7C5 9.21 6.79 11 9 11Z" fill="currentColor"/>
    <path d="M9 13C5.67 13 0 14.67 0 18V19C0 19.55 0.45 20 1 20H17C17.55 20 18 19.55 18 19V18C18 14.67 12.33 13 9 13Z" fill="currentColor"/>
    <path d="M20 10V7H18V10H15V12H18V15H20V12H23V10H20Z" fill="currentColor"/>
  </svg>
);

export default RegisterCard;


import WelcomeTitle from "./WelcomeTitle";
import Guest from "./Guest";
import LoginCard from "./Cards/LoginCard";
import RegisterCard from "./Cards/RegisterCard";

import { useLabels } from "src/services/client";
import { useSearchParams } from "src/hooks";

import type { ChooseUser } from "../types";

const StyledContainer = "flex flex-col items-center justify-center px-4 -mt-24";
const StyledUsersContainer = "flex flex-col gap-12 items-center w-full";
const StyledCardsContainer = "flex flex-col gap-4 w-full max-w-lg";

const ChooseUser = ({ setUser, showRegister, showLogin }: ChooseUser) => {
  const getLabel = useLabels();
  const { setSearchParam } = useSearchParams();

  const enterAsGuest = () => {
    setSearchParam({ name: "welcome", value: "true" });
    setUser({ name: getLabel("user-login.guest"), guest: true });
  };

  return (
    <div className={StyledContainer}>
      <WelcomeTitle />
      <div className={StyledUsersContainer}>
        <div className={StyledCardsContainer}>
          <LoginCard onClick={showLogin} />
          <RegisterCard onClick={showRegister} />
        </div>
        <Guest onClick={enterAsGuest} />
      </div>
    </div>
  );
};

export default ChooseUser;

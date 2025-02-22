import GuestAccount from "./GuestAccount";
import UserAccount from "./UserAccount";
import Register from "./Register";

import { useLabels } from "src/services/client";
import { useSearchParams } from "src/hooks";

import type { ChooseUser } from "../types";

const StyledContainer = "flex flex-col items-center";
const StyledUsers = "flex items-center justify-center gap-6";

const ChooseUser = ({ setUser, showRegister, showLogin }: ChooseUser) => {
  const getLabel = useLabels();
  const { setSearchParam } = useSearchParams();

  const enterAsGuest = () => {
    setSearchParam({ name: "welcome", value: "true" });
    setUser({ name: getLabel("user-login.guest"), guest: true });
  };

  return (
    <div className={StyledContainer}>
      <div className={StyledUsers}>
        <GuestAccount onClick={enterAsGuest} />
        <UserAccount onClick={showLogin} />
      </div>
      <Register onClick={showRegister} />
    </div>
  );
};

export default ChooseUser;

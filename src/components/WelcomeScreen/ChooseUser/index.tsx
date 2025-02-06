import GuestDiv from "./Guest";
import EnterAccount from "./EnterAccount";

import { useLabels } from "src/services/client";

import type { ChooseUser } from "../types";

const StyledContainer = "flex items-center justify-center gap-6";

const ChooseUser = ({ setUser, setShowLoginForm }: ChooseUser) => {
  const getLabel = useLabels();

  const enterAsGuest = () => {
    setUser({ name: getLabel("user-login.guest"), guest: true });
  };

  return (
    <div className={StyledContainer}>
      <GuestDiv onClick={enterAsGuest} />
      <EnterAccount onClick={() => setShowLoginForm(true)} />
    </div>
  );
};

export default ChooseUser;

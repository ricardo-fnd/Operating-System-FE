import Menu from "src/shared/components/Menu";
import Profile from "./Profile";
import Logout from "./Logout";

type Menu = { close: () => void };

const UserMenu = ({ close }: Menu) => {
  const options = { ignore: ["user-menu-pill"] };

  return (
    <Menu close={close} options={options}>
      <Profile close={close} />
      <Logout />
    </Menu>
  );
};

export default UserMenu;

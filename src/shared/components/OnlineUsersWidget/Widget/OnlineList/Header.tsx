import { useLabels } from "src/services/client";

import type { WidgetProps } from "../../types";

const StyledHeader = "bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 font-semibold text-sm";

const Header = ({ users }: { users: WidgetProps['users'] }) => {
  const getLabel = useLabels();

    return (
      <header className={StyledHeader}>
        <p>{getLabel("online-users.header", { count: users.length })}</p>
      </header>
    );
};

export default Header;
import Image from "next/image";

import user from "public/user-login/user.svg";

import { useLabels } from "src/services/client";

const StyledAccount =
  "flex flex-col items-center text-lg text-white font-medium cursor-pointer transition-scale duration-300 hover:scale-105";

const UserAccount = ({ onClick }: { onClick: () => void }) => {
  const getLabel = useLabels();

  return (
    <div className={StyledAccount} onClick={onClick}>
      <Image
        src={user}
        width={150}
        height={150}
        alt={getLabel("commons.enter")}
      />
      <p>{getLabel("commons.enter")}</p>
    </div>
  );
};

export default UserAccount;

import Image from "next/image";

import addSvg from "public/user-login/add.svg";

import { useLabels } from "src/services/client";

const StyledAccount =
  "relative flex flex-col items-center gap-4 p-2 text-lg cursor-pointer font-medium transition-scale duration-300 hover:scale-105";

const EnterAccount = ({ onClick }: { onClick: () => void }) => {
  const getLabel = useLabels();

  return (
    <div className={StyledAccount} onClick={onClick}>
      <Image
        width={90}
        height={90}
        src={addSvg}
        alt={getLabel("commons.enter")}
      />
      <p>{getLabel("commons.enter")}</p>
    </div>
  );
};

export default EnterAccount;

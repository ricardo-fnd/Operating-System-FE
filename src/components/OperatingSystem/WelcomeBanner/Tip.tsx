import Image from "next/image";

import tip from "public/tip.svg";

import { useLabels } from "src/services/client";

import type { User } from "src/types";

const StyledTip = "text-sm [&_img]:mr-1.5 [&_img]:mt-1.5 [&_img]:float-left";

const Tip = ({ user }: { user: User }) => {
  const getLabel = useLabels();

  const label = user.email
    ? "welcome-banner.confirm-email"
    : "welcome-banner.add-email";

  return (
    <div className={StyledTip}>
      <Image src={tip} width={30} height={30} alt="email-tip" />
      <div dangerouslySetInnerHTML={{ __html: getLabel(label) }} />
    </div>
  );
};

export default Tip;

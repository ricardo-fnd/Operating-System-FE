import OpenEyeIcon from "./OpenEyeIcon";
import ClosedEyeIcon from "./ClosedEyeIcon";

import type { ShowPasswordIcon } from "../../types";

const StyledEye = "absolute bottom-[17px] right-1.5 cursor-pointer";

const ShowPasswordIcon = ({ showing, setShow }: ShowPasswordIcon) => {
  const toggleShow = () => setShow(!showing);

  return (
    <div onClick={toggleShow} className={StyledEye}>
      {showing ? <ClosedEyeIcon width={16} height={16} color="white" /> : <OpenEyeIcon width={16} height={16} color="white" />}
    </div>
  );
};

export default ShowPasswordIcon;

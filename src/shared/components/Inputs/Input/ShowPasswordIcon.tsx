import Image from "next/image";

import hidePassword from "public/hide-password.svg";
import showPassword from "public/show-password.svg";

import type { ShowPasswordIcon } from "../types";

const StyledEye = "absolute bottom-[17px] right-1.5 cursor-pointer";

const ShowPasswordIcon = ({ showing, setShow }: ShowPasswordIcon) => {
  const toggleShow = () => setShow(!showing);

  const src = showing ? hidePassword : showPassword;

  return (
    <Image
      src={src}
      width={20}
      height={20}
      onClick={toggleShow}
      className={StyledEye}
      alt="show-hide-password"
    />
  );
};

export default ShowPasswordIcon;

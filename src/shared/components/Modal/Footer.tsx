import { Continue } from "../Buttons";

import type { Footer } from "./types";

const StyledFooter = "flex justify-end pb-6 px-6";

const Footer = ({ advance }: Footer) => {
  if (!advance) return null;

  return (
    <div className={StyledFooter}>
      {advance && <Continue onClick={advance} />}
    </div>
  );
};

export default Footer;

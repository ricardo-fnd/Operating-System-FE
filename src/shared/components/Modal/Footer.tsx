import { Continue } from "../Buttons";

export type FooterProps = { advance?: () => void };

const StyledFooter = "flex justify-end pb-6";

const Footer = ({ advance }: FooterProps) => {
  if (!advance) return null;

  return (
    <div className={StyledFooter}>
      {advance && <Continue onClick={advance} />}
    </div>
  );
};

export default Footer;

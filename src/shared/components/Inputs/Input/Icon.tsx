import Image from "next/image";

const StyledIcon = "absolute bottom-[18px] left-1.5";

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={20} height={20} className={StyledIcon} />
);

export default Icon;

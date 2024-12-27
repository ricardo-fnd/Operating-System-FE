import { useEffect } from "react";

type Props = { setLoading: (boolean: boolean) => void };

// TOPBAR_HEIGHT = 64px
const StyledLandingPage =
  "flex items-center justify-center w-full h-[calc(100%-64px)] text-4xl bg-[#444444] text-white";

const LandingPage = ({ setLoading }: Props) => {
  useEffect(() => setLoading(false), []);

  return (
    <div className={StyledLandingPage}>
      <p>Landing Page</p>
    </div>
  );
};

export default LandingPage;

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Modal } from "src/shared/components";
import hello from "public/welcome/hello.svg";
import tip from "public/tip.svg";

import { useSearchParams } from "src/hooks";
import { useLabels } from "src/services/client";

const StyledModal =
  "[&_section]:pb-4 [&_section]:flex-row [&_section]:gap-20 lg:[&_section]:pb-6";
const StyledContainer = "flex flex-col gap-14";
const StyledContent = "flex flex-col gap-4";
const StyledTip = "text-sm [&_img]:mr-1.5 [&_img]:mt-1.5 [&_img]:float-left";
const StyledHello = "hidden sm:block absolute -top-12 -right-8";

const WelcomeBanner = () => {
  const getLabel = useLabels();
  const [isOpen, setIsOpen] = useState(false);
  const { searchParams, getSearchParam, removeSearchParam } = useSearchParams();

  useEffect(() => {
    if (!!getSearchParam("welcome")) setIsOpen(true);
  }, [searchParams]);

  const advance = () => {
    setIsOpen(false);
    removeSearchParam("welcome");
  };

  if (!isOpen) return null;

  return (
    <Modal className={StyledModal} theme="dark" advance={advance}>
      <div className={StyledContainer}>
        <div className={StyledContent}>
          <h2>{getLabel("welcome-banner.title")}</h2>
          <p>{getLabel("welcome-banner.description")}</p>
        </div>
        <div className={StyledTip}>
          <Image src={tip} width={30} height={30} alt="email-tip" />
          <span>{getLabel("welcome-banner.email-tip")}</span>
        </div>
      </div>
      <Image
        className={StyledHello}
        src={hello}
        width={160}
        height={160}
        alt="hello"
      />
    </Modal>
  );
};

export default WelcomeBanner;

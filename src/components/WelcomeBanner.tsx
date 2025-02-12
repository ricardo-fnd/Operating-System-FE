"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Modal } from "src/shared/components";
import hello from "public/welcome/hello.svg";

import { useSearchParams } from "src/hooks";
import { useLabels } from "src/services/client";

const StyledContainer = "flex gap-14 items-center justify-between";
const StyledContent = "flex flex-col gap-2";
const StyledTitle = "text-xl font-bold";

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

  return (
    <Modal isOpen={isOpen} advance={advance}>
      <div className={StyledContainer}>
        <div className={StyledContent}>
          <h2 className={StyledTitle}>{getLabel("welcome-banner.title")}</h2>
          <p>{getLabel("welcome-banner.description")}</p>
        </div>
        <Image src={hello} width={160} height={160} alt="hello" />
      </div>
    </Modal>
  );
};

export default WelcomeBanner;

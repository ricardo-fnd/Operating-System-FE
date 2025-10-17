"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Modal } from "src/shared/components";
import KnowMore from "./KnowMore";
import Tip from "./Tip";
import hello from "public/welcome/hello.svg";

import { useSearchParams } from "src/hooks";
import { useLabels } from "src/services/client";

import type { User } from "src/types";

const StyledModal =
  "overflow-visible [&_section]:pb-4 [&_section]:flex-row [&_section]:gap-20 lg:[&_section]:pb-0";
const StyledContainer = "flex flex-col gap-14";
const StyledContent = "flex flex-col gap-4";
const StyledHello = "hidden sm:block absolute -top-12 -right-8";

const WelcomeBanner = ({ user }: { user: User }) => {
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
      <Image
        src={hello}
        width={160}
        height={160}
        alt="hello"
        className={StyledHello}
      />
      <div className={StyledContainer}>
        <div className={StyledContent}>
          <h2>{getLabel("welcome-banner.title")}</h2>
          <p>{getLabel("welcome-banner.description")}</p>
          <KnowMore />
        </div>
        <Tip user={user} />
      </div>
    </Modal>
  );
};

export default WelcomeBanner;

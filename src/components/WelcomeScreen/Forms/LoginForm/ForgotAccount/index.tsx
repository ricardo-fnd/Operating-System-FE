import { useState } from "react";

import ForgotAccountModal from "./Modal";

import { useLabels } from "src/services/client";

import type { ForgotAccount } from "../../types";

const StyledParagraph =
  "self-end text-sm text-slate-200 cursor-pointer hover:underline hover:underline-offset-4";

const ForgotAccount = ({ label }: ForgotAccount) => {
  const getLabel = useLabels();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <p className={StyledParagraph} onClick={toggleModal}>
        {getLabel(label)}
      </p>
      {showModal && <ForgotAccountModal close={toggleModal} />}
    </>
  );
};

export default ForgotAccount;

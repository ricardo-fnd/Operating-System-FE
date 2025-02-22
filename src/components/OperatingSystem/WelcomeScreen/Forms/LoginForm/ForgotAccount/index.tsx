import { useState } from "react";

import ForgotAccountModal from "./Modal";

import { useLabels } from "src/services/client";

import type { ForgotPassword } from "../../types";

const StyledParagraph =
  "self-end text-sm text-slate-200 cursor-pointer hover:underline";

const ForgotPassword = ({ label }: ForgotPassword) => {
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

export default ForgotPassword;

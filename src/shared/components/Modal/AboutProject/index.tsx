import Modal from "..";

import { GitHub } from "src/shared/components";

import { useLabels } from "src/services/client";

type Props = { close: () => void; };

const StyledTitle = "text-2xl text-white font-bold";
const StyledFooter = "flex items-center justify-between text-sm text-gray-400 mt-4";
const StyledContact = "underline underline-offset-4";

const AboutProjectModal = ({ close }: Props) => {
  const getLabel = useLabels();

  return (
    <Modal close={close} theme="dark">
      <h2 className={StyledTitle}>BrowserOS</h2>
      <p>{getLabel("about-project.description")}</p>
      <p>Email: <span className={StyledContact}>ricardofnd.dev@gmail.com</span></p>
      <footer className={StyledFooter}>
        <span>{getLabel("welcome-screen.copyright")}</span>
        <GitHub />
      </footer>
    </Modal>
  );
};

export default AboutProjectModal;

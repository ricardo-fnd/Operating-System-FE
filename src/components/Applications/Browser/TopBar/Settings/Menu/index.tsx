import { useRef } from "react";

import { useOnClickOutside } from "src/hooks";
import { useLabels } from "src/services/client";

const StyledMenu =
  "absolute top-8 right-0 flex items-center justify-center min-h-44 min-w-44 rounded-md bg-[#212121] text-white";

const SettingsMenu = ({ close }: { close: () => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  const getLabel = useLabels();

  const clickOutsideOptions = { ignore: ["settings-icon"] };
  useOnClickOutside({ ref, handler: close, options: clickOutsideOptions });

  return (
    <div ref={ref} className={StyledMenu}>
      <p>{getLabel("apps.browser.settings.backlog")}</p>
    </div>
  );
};

export default SettingsMenu;

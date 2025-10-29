import { HelpTooltip } from "src/shared/components";
import Info from "./Info";
import SaveButton from "./SaveButton";

import { useLabels } from "src/services/client";

import type { FooterProps } from "./types";

const StyledFooter = "flex items-center justify-between px-4 min-h-[36px] bg-gray-100 border-t border-gray-300 text-xs text-gray-600";
const StyledStatus = "flex items-center gap-2";
const StyledHelpTooltip = "bg-blue-100 text-blue-600 border-blue-300";
const StyledRightSection = "flex items-center gap-2";

const Footer = ({ hasUnsavedChanges, textFile, app, content }: FooterProps) => {
  const getLabel = useLabels();

  return (
    <div className={StyledFooter}>
      <div className={StyledStatus}>
        <span>
          {hasUnsavedChanges ? getLabel('apps.text-file.unsaved') : getLabel('apps.text-file.saved')}
        </span>
        {hasUnsavedChanges && (
          <HelpTooltip 
            id="text-file-save-tooltip" 
            className={StyledHelpTooltip}
            labelKey='apps.text-file.save-tooltip'
          />
        )}
      </div>
      <div className={StyledRightSection}>
        <SaveButton app={app} content={content} hasUnsavedChanges={hasUnsavedChanges} />
        <Info textFile={textFile} />
      </div>
    </div>
  );
};

export default Footer;

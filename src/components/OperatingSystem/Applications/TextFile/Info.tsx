import { useLabels } from "src/services/client";

import type { InfoProps } from "./types";

const StyledContainer = "relative group";
const StyledInfoDiv = "absolute bottom-8 right-0 hidden group-hover:block h-fit overflow-hidden text-xs bg-black/75 backdrop-blur-sm border border-zinc-600 shadow-xl text-gray-200 rounded-lg p-3 z-50";
const StyledDatesDiv = "flex flex-col gap-1 min-w-fit [&_p]:whitespace-nowrap";

const Info = ({ textFile }: InfoProps) => {
  const getLabel = useLabels();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={StyledContainer}>
      <p>{getLabel('apps.text-file.about')}</p>
      <div className={StyledInfoDiv}>
        <div className={StyledDatesDiv}>
          <p>{getLabel('apps.text-file.created-at', { date: formatDate(textFile.createdAt) })}</p>
          <p>{getLabel('apps.text-file.updated-at', { date: formatDate(textFile.updatedAt) })}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;


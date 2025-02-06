import { useEffect, useState } from "react";

import type { Website } from "../../types";

// TOPBAR_HEIGHT = 64px
const StyledPage = "flex flex-col gap-10 w-full h-[calc(100%-64px)]";

const Website = ({ setLoading, url }: Website) => {
  const [src, setSrc] = useState<string | null>(null);

  const completeUrl = () => {
    let src = url;
    if (!src.includes("https")) src = `https://${src}`;
    if (!src.includes("www")) src = `https://www.${src.split("//")[1]}`;
    setSrc(src);
  };

  useEffect(() => {
    setLoading(true);
    completeUrl();
  }, [url]);

  return (
    <div className={StyledPage}>
      {src && (
        <iframe
          src={src}
          className="w-full h-full"
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
};

export default Website;

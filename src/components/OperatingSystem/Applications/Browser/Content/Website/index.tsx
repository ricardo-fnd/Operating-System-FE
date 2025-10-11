import { useEffect, useState, useRef } from "react";

import Blocked from "./Blocked";

import type { Website } from "../../types";

// TOPBAR_HEIGHT = 60px
const StyledPage = "relative flex flex-col gap-10 w-full h-[calc(100%-60px)]";

const Website = ({ setLoading, url }: Website) => {
  const [src, setSrc] = useState<string | null>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setLoading(true);
    setIsBlocked(false);
    completeUrl();

    timeoutRef.current = setTimeout(() => checkIfBlocked(), 3000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [url]);

  const completeUrl = () => {
    let src = url;
    if (!src.includes("https")) src = `https://${src}`;
    if (!src.includes("www")) src = `https://www.${src.split("//")[1]}`;
    setSrc(src);
  };

  const checkIfBlocked = () => {
    if (!iframeRef.current) return;
    
    try {
      // Try to access iframe's contentWindow, contentDocument and href to check if the iframe is blocked
      const iframeWindow = iframeRef.current.contentWindow;
      const iframeDoc = iframeRef.current.contentDocument;
      const href = iframeWindow?.location.href;
      if (!iframeWindow || !iframeDoc || !href) {
        setIsBlocked(true);
        setLoading(false);
        return;
      }
      
      setLoading(false);
    } catch (e) {
      setIsBlocked(true);
      setLoading(false);
    }
  };
  
  const handleIframeLoad = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setTimeout(() => checkIfBlocked(), 100);
  };

  return (
    <div className={StyledPage}>
      {isBlocked && <Blocked src={src} />}
      {src && (
        <iframe
          src={src}
          ref={iframeRef}
          onLoad={handleIframeLoad}
          className="w-full h-full z-50 bg-white"
        />
      )}
    </div>
  );
};

export default Website;

import Draggable from "react-draggable";
import { useEffect, useState } from "react";

import TopBar from "./TopBar";

import type { BaseApplicationProps } from "./types";
import type { DraggableData, DraggableEvent } from "react-draggable";
import type { Application } from "src/applications";

//DOCK_HEIGHT = 60;
const StyledApplication = `absolute top-0 left-0 min-w-56 w-full max-w-[66%] h-full max-h-[66%] rounded-md overflow-hidden transition-all duration-300 
  data-[minimized=true]:hidden
  data-[maximized=true]:max-w-full data-[maximized=true]:max-h-[calc(100%-60px)]`;
//TOPBAR_HEIGHT = 33;
const StyledContent =
  "h-[calc(100%-33px)] py-6 px-4 bg-[#c9c9c9] md:show-y-scrollbar";

const BaseApplication = ({ children, app }: BaseApplicationProps) => {
  const { position, onAppDrag } = useController({ app });

  return (
    <Draggable handle=".handle" position={position} onDrag={onAppDrag}>
      <section
        className={StyledApplication}
        data-maximized={app.maximized}
        data-minimized={app.minimized}
      >
        <TopBar app={app} />
        <div className={StyledContent}>{children}</div>
      </section>
    </Draggable>
  );
};

const useController = ({ app }: { app: Omit<Application, "component"> }) => {
  const [position, setPosition] = useState<Application["position"]>();
  const [lastPosition, setLastPosition] = useState<Application["position"]>();

  useEffect(() => {
    if (app.maximized) {
      setLastPosition(position);
      setPosition({ x: 0, y: 0 });
    } else if (!app.maximized && lastPosition) {
      setPosition(lastPosition);
    }
  }, [app]);

  const onAppDrag = (e: DraggableEvent, { x, y }: DraggableData) => {
    setPosition({ x, y });
  };

  return { position, onAppDrag };
};

export default BaseApplication;

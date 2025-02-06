import Draggable from "react-draggable";
import { useEffect, useState } from "react";

import TopBar from "./TopBar";

import { AppsService } from "src/services";

import type { BaseApplication, DraggableEvent, DraggableData } from "./types";
import type { Application } from "src/types";

//DOCK_HEIGHT = 60px;
const StyledApplication = `absolute top-0 left-0 min-w-56 w-full max-w-[66%] h-full max-h-[66%] rounded-md overflow-hidden transition-all duration-300 
  data-[minimized=true]:hidden
  data-[maximized=true]:max-w-full data-[maximized=true]:max-h-[calc(100%-60px)]`;
//TOPBAR_HEIGHT = 33px;
const StyledContent = "h-[calc(100%-33px)] bg-white md:show-y-scrollbar";

const BaseApplication = ({ children, app }: BaseApplication) => {
  const { position, onAppDrag, pushToFront } = useController({ app });

  return (
    <Draggable handle=".handle" position={position} onDrag={onAppDrag}>
      <section
        className={StyledApplication}
        data-maximized={app.maximized}
        data-minimized={app.minimized}
        style={{ zIndex: app.priority }}
        onClick={() => pushToFront(app)}
      >
        <TopBar app={app} />
        <div className={StyledContent}>{children}</div>
      </section>
    </Draggable>
  );
};

const useController = ({ app }: { app: Application }) => {
  const pushToFront = AppsService.usePushToFront();
  const [position, setPosition] = useState(app.initialPosition);
  const [lastPosition, setLastPosition] =
    useState<Application["initialPosition"]>();

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

  return { position, onAppDrag, pushToFront };
};

export default BaseApplication;

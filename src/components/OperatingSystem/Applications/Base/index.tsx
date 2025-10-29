import Draggable from "react-draggable";
import { useEffect, useState } from "react";

import TopBar from "./TopBar";

import { AppsService } from "src/services";

import type { BaseApplication, DraggableEvent, DraggableData } from "./types";
import type { Application } from "src/types";

//DOCK_HEIGHT = 60px;
const StyledApplication = `absolute top-0 left-0 min-w-56 w-full max-w-[66%] h-full max-h-[66%] rounded-xl overflow-hidden shadow-2xl border border-zinc-700
  transition-[transform,opacity,width,height,border-radius,border] duration-300 ease-in-out
  data-[dragging=true]:transition-none
  data-[minimized=true]:scale-0 data-[minimized=true]:opacity-0 data-[minimized=true]:pointer-events-none
  data-[maximized=true]:max-w-full data-[maximized=true]:max-h-[calc(100%-60px)] data-[maximized=true]:rounded-none data-[maximized=true]:border-0`;
//TOPBAR_HEIGHT = 40px;
const StyledContent = "h-[calc(100%-40px)] bg-white md:show-y-scrollbar";

const BaseApplication = ({ children, app }: BaseApplication) => {
  const { position, onAppDrag, setIsDragging, isDragging, pushToFront } = useController({ app });

  return (
    <Draggable 
      handle=".top-bar-handle" 
      position={position} 
      onDrag={onAppDrag}
      onStop={() => setIsDragging(false)}
      onStart={() => setIsDragging(true)}
    >
      <section
        className={StyledApplication}
        data-dragging={isDragging}
        data-maximized={app.maximized}
        data-minimized={app.minimized}
        style={{ zIndex: app.priority }}
        onPointerDown={() => pushToFront(app)}
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
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (app.maximized) {
      setLastPosition(position);
      setPosition({ x: 0, y: 0 });
    } else if (!app.maximized && lastPosition) {
      setPosition(lastPosition);
    }
  }, [app.maximized]);

  const onAppDrag = (e: DraggableEvent, { x, y }: DraggableData) => {
    setPosition({ x, y });
  };

  return { position, onAppDrag, setIsDragging, isDragging, pushToFront };
};

export default BaseApplication;

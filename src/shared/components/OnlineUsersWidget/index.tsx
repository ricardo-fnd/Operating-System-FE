"use client";
import { useRef, useState } from "react";

import { Button, OnlineUsersIcon } from "src/shared/components";
import OnlineCount from "./OnlineCount";
import OnlineUsersWidget from "./Widget";

import { OnlineUsersService, UsersService } from "src/services/client";
import { useOnClickOutside } from "src/hooks";

const StyledButton = "fixed bottom-[74px] right-4 w-10 h-10 p-3 shadow-lg z-40 hover:scale-105";

const OnlineUsersButton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showWidget, setShowWidget] = useState(false);

  const options = { ignore: ["online-users-widget", "online-users-widget-button"] };
  useOnClickOutside({ ref, handler: () => setShowWidget(false), options });
  
  const { data: currentUser } = UsersService.useMe();
  const { data: onlineUsersList = [], isLoading } = OnlineUsersService.useOnlineUsers({
    enabled: showWidget && !currentUser?.guest,
  });

  return (
    <>
      <Button
        className={StyledButton}
        aria-label="Online Users"
        id="online-users-widget-button"
        onClick={() => setShowWidget(!showWidget)}
      >
        <OnlineCount />
        <OnlineUsersIcon width={24} height={24} color="white" />
      </Button>
      <OnlineUsersWidget 
        ref={ref} 
        isOpen={showWidget} 
        isLoading={isLoading} 
        users={onlineUsersList} 
      />
    </>
  );
};

export default OnlineUsersButton;


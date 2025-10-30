import { useAppsUpdate } from "src/context/AppsContext";

import type { Application } from "src/types";

const useOpen = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      const appWithMostPriority = getAppWithHighestPriority(apps);
      const appsOpened = apps.filter(({ opened }) => opened);
      const random = Math.random() * 150 * appsOpened.length;

      return apps.map((application) => {
        if (application.id !== app.id) return application;

        return {
          ...application,
          opened: true,
          minimized: false,
          initialPosition: { x: random, y: random },
          priority: (appWithMostPriority?.priority || 0) + 1,
        };
      });
    });
};

const useClose = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, opened: false, minimized: true, maximized: false };
      })
    );
};

const useMaximize = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, maximized: !application.maximized };
      })
    );
};

const useMinimize = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, minimized: !application.minimized };
      })
    );
};

const usePushToFront = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      const appWithMostPriority = getAppWithHighestPriority(apps);
      if (appWithMostPriority?.id === app.id) return apps;

      return apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, priority: (appWithMostPriority?.priority || 0) + 1 };
      });
    });
};

const useSetShortcutPosition = () => {
  const updateApps = useAppsUpdate();

  return ({ app, x, y }: { app: Application; x: number; y: number }) => {
    updateApps((apps) => apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...application, shortcutPosition: { x, y } };
      })
    );
  };
};

const useAdd = () => {
  const updateApps = useAppsUpdate();
  
  return (app: Application) => updateApps((apps) => {
    const existingApp = apps.find((a) => a.id === app.id);
    if (existingApp) return apps;
    return [...apps, app];
  })
};

const useUpdate = () => {
  const updateApps = useAppsUpdate();

  return (appId: Application["id"], updates: Partial<Application>) => 
    updateApps((apps) => apps.map((app) => 
      (app.id === appId ? { ...app, ...updates } : app)
    )
  );
};

const useRemove = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) =>
      apps.filter((application) => application.id !== app.id)
    );
};

const AppsService = {
  useOpen,
  useClose,
  useMaximize,
  useMinimize,
  usePushToFront,
  useSetShortcutPosition,
  useAdd,
  useUpdate,
  useRemove,
};

export default AppsService;

const getAppWithHighestPriority = (apps: Application[]) => {
  return apps.reduce((prev, current) => {
    if (!prev) return current;
    if (!current) return prev;
    return (prev.priority || 0) >= (current.priority || 0) ? prev : current;
  });
};

import { useAppsUpdate } from "src/context/AppsContext";

import type { Application } from "src/types";

const useOpen = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      const appWithMostPriority = apps.reduce((prev, current) =>
        prev && prev.priority > current.priority ? prev : current
      );

      const appsOpened = apps.filter(({ opened }) => opened);
      const random = Math.random() * 150 * appsOpened.length;

      return apps.map((application) => {
        if (application.id !== app.id) return application;

        return {
          ...app,
          opened: true,
          minimized: false,
          initialPosition: { x: random, y: random },
          priority: appWithMostPriority.priority + 1,
        };
      });
    });
};

const useClose = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      return apps.map((application) => {
        if (application.id !== app.id) return application;

        return { ...app, opened: false, minimized: true, maximized: false };
      });
    });
};

const useMaximize = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      return apps.map((application) => {
        if (application.id !== app.id) return application;

        return { ...app, maximized: !app.maximized };
      });
    });
};

const useMinimize = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      return apps.map((application) => {
        if (application.id !== app.id) return application;

        return { ...app, minimized: !app.minimized };
      });
    });
};

const usePushToFront = () => {
  const updateApps = useAppsUpdate();

  return (app: Application) =>
    updateApps((apps) => {
      const appWithMostPriority = apps.reduce((prev, current) =>
        prev && prev.priority > current.priority ? prev : current
      );
      if (appWithMostPriority.id === app.id) return apps;

      return apps.map((application) => {
        if (application.id !== app.id) return application;
        return { ...app, priority: appWithMostPriority.priority + 1 };
      });
    });
};

const useSetShortcutPosition = () => {
  const updateApps = useAppsUpdate();

  return ({ app, x, y }: { app: Application; x: number; y: number }) => {
    updateApps((apps) =>
      apps.map((application) => {
        if (application.id !== app.id) return application;

        return { ...app, shortcutPosition: { x, y } };
      })
    );
  };
};

const AppsService = {
  useOpen,
  useClose,
  useMaximize,
  useMinimize,
  usePushToFront,
  useSetShortcutPosition,
};

export default AppsService;

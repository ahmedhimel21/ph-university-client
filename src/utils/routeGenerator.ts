import { ReactNode } from "react";
import { TRoute } from "../routes/admin.routes";

type TUserRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserRoute[];
};

export const routeGenerator = (items: TUserRoute[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.name && item.element) {
      acc.push({
        path: item.path!,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};

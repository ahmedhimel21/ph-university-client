import { ReactNode } from "react";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import Dashboard from "../pages/admin/Dashboard";
import { NavLink } from "react-router-dom";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TSiderRoute = {
  key: string;
  label: ReactNode;
  children?: TSiderRoute[];
};

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateAdmin></CreateAdmin>,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce((acc: TRoute[], item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

export const siderRoutes = adminPaths.reduce((acc: TSiderRoute[], item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);

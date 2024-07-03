import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";

import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths),
  },
]);

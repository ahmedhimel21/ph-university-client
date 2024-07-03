import Dashboard from "../pages/faculty/Dashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Faculty Management",
    children: [
      {
        name: "Offerer Course",
        path: "offered-course",
        element: <OfferedCourse></OfferedCourse>,
      },
    ],
  },
];

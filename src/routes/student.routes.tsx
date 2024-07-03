import Dashboard from "../pages/student/Dashboard";
import RegisterCourse from "../pages/student/RegisterCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Student Management",
    children: [
      {
        name: "Register Course",
        path: "register-course",
        element: <RegisterCourse></RegisterCourse>,
      },
    ],
  },
];

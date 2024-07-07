import AcademicSemester from "../pages/admin/academicSemester/AcademicSemester";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import Dashboard from "../pages/admin/Dashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard></Dashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
    ],
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
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
];

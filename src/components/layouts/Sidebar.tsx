import { Layout, Menu } from "antd";
import { siderItemsGenerator } from "../../utils/siderItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { TUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

const Sidebar = () => {
  const { role } = useAppSelector(
    (state: RootState) => state.auth.user as TUser
  );
  // const role = "admin";
  let siderItems;
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  switch (role) {
    case userRole.ADMIN:
      siderItems = siderItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      siderItems = siderItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      siderItems = siderItemsGenerator(studentPaths, "student");
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div className="demo-logo-vertical" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: "4rem",
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={siderItems}
      />
    </Sider>
  );
};

export default Sidebar;

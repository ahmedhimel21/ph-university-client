import academicManagementApi from "../../../../redux/features/admin/academiManagement/academicManagementApi";

const AcademicSemester = () => {
  const { data } = academicManagementApi.useGetAcademicSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Academic semester component</h1>
    </div>
  );
};

export default AcademicSemester;

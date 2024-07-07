import { useGetAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>Academic semester component</h1>
    </div>
  );
};

export default AcademicSemester;

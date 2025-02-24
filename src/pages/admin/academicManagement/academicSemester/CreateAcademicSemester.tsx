import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../../components/form/PHSelect";
import { semesterOptions } from "../../../../constants/Semester";
import { monthOptions } from "../../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../../schemas/academicManagement.schema";
import academicManagementApi from "../../../../redux/features/admin/academicManagement/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../../types/global.types";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] =
    academicManagementApi.useAddAcademicSemesterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = semesterOptions[Number(data.name) - 1]?.label;
    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth,
    };

    try {
      const toastId = toast.loading("Semester creating...");
      const res = (await addAcademicSemester(semesterData)) as TResponse;
      console.log(res);
      if (res?.error) {
        toast.error(res?.error.data.message, { id: toastId });
      } else {
        toast.success("Semester created successfully!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PHSelect
            label="Name"
            name="name"
            options={semesterOptions}
          ></PHSelect>
          <PHSelect label="Year" name="year" options={yearOptions}></PHSelect>
          <PHSelect
            label="StartMonth"
            name="startMonth"
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            label="EndMonth"
            name="endMonth"
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;

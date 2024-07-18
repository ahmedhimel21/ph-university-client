import { Button, Col, Flex } from "antd";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";

const CreateAcademicFaculty = () => {
  const onSubmit = (faculty: { academicFaculty: string }) => {
    const facultyData = {
      name: faculty.academicFaculty,
    };
    console.log(facultyData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHInput
            type="text"
            name="academicFaculty"
            label="AcademicFaculty"
          ></PHInput>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;

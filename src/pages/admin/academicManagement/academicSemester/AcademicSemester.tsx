import { Table, TableColumnsType, TableProps } from "antd";
import academicManagementApi from "../../../../redux/features/admin/academicManagement/academicManagementApi";
import { TAcademicSemester } from "../../../../types";
import { useState } from "react";

type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const AcademicSemester = () => {
  const [params, setParams] = useState([]);
  const { data: semesterData } =
    academicManagementApi.useGetAcademicSemesterQuery(params);

  const tableData = (semesterData?.data as TAcademicSemester[])?.map(
    ({ name, year, startMonth, endMonth }) => ({
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value as string),
      width: "30%",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (filters, extra) => {
    console.log(extra, filters);
    const queryParams = [];
    if (extra.name?.length) {
      extra.name.forEach((item) => {
        console.log("item =>", item);
        queryParams.push({ name: "name", value: item });
      });
      setParams(queryParams);
    }
  };

  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AcademicSemester;

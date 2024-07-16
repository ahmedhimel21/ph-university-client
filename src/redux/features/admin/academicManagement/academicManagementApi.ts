import { baseApi } from "../../../api/api";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
      transformErrorResponse: (response) => ({
        data: response?.data,
        meta: response?.meta,
      }),
    }),
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export default academicManagementApi;

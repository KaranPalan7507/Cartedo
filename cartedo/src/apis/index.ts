import axios from "axios";

const instance = axios.create({
  baseURL: "https://cartedo-mock-api-d9672364e747.herokuapp.com",
});
export const getAllCourses = async () => {
  return instance.get("/api/courses").then((result) => {
    return result.data;
  });
};
export const getCourseDetail = async (id: number) => {
  return instance.get(`/api/courses/${id}`).then((result) => {
    return result.data;
  });
};
export const addCourse = async (data: any) => {
  return instance.post(`/api/courses`, data).then((result) => {
    return result.data;
  });
};

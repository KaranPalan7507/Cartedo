import { useEffect, useState } from "react";
import { getAllCourses } from "../apis";
import CourseItem from "../components/CourseItem";

export interface CouseItem {
  description: string;
  id: number;
  image: "string";
  title: "string";
}
const CourseList: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [courses, setCourses] = useState<CouseItem[]>([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setLoading(true);
    getAllCourses()
      .then((courses) => {
        setCourses(courses);
      })
      .catch((error) => {
        console.log("error", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    <div>Loading...</div>;
  }
  return (
    <div className="">
      {error ? (
        <div> something went wrong</div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] p-4 gap-10">
          {courses.map((course) => (
            <CourseItem course={course} key={course.id} />
          ))}
        </div>
      )}
    </div>
  );
};
export default CourseList;

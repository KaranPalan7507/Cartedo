import { useParams } from "react-router-dom";
import { getCourseDetail } from "../apis";
import { useEffect, useState } from "react";
import { CouseItem } from "./CourseList";

const CourseDetail: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [course, setCourse] = useState<CouseItem>();
  const params = useParams();
  const id = Number(params.id);
  useEffect(() => {
    if (id) getData();
  }, [id]);
  const getData = () => {
    setLoading(true);
    getCourseDetail(id)
      .then((course) => {
        setCourse(course);
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
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      {error || !course ? (
        <div> something went wrong</div>
      ) : (
        <div className="flex gap-8">
          <div
            className={
              "w-[40%] bg-contain flex items-center justify-center shadow-2xs rounded-md"
            }
            style={{ backgroundImage: `url(${course.image})` }}
          >
            <div className="text-white">{course.title}</div>
          </div>
          <div className="w-[60%] flex flex-col gap-4 text-black ">
            <div className="flex-auto shadow-2xs rounded-md bg-white p-4">
              <div className="font-bold mb-4">{course.title}</div>
              <div>{course.description}</div>
            </div>
            <button>Enroll</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CourseDetail;

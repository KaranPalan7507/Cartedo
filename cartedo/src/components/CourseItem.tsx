import { useNavigate } from "react-router-dom";
import { CouseItem } from "../pages/CourseList";
import { useEnrolledCourseContext } from "../CourseContext";

interface ICourseItemProps {
  course: CouseItem;
}
const CourseItem: React.FC<ICourseItemProps> = ({ course }) => {
  const navigate = useNavigate();
  const { enrolledCourses } = useEnrolledCourseContext();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };
  return (
    <div
      className="shadow-2xs rounded-md bg-white cursor-pointer relative"
      onClick={handleClick}
    >
      {enrolledCourses[course.id] && (
        <div className="absolute top-2 left-2 rounded-lg bg-yellow-400 text-white text-sm px-2">
          Enrolled
        </div>
      )}
      <img src={course.image} className="w-[100%] h-[100px] object-cover" />
      <h3 className="px-2">{course.title}</h3>
    </div>
  );
};
export default CourseItem;

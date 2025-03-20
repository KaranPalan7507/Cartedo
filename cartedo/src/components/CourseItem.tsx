import { useNavigate } from "react-router-dom";
import { CouseItem } from "../pages/CourseList";

interface ICourseItemProps {
  course: CouseItem;
}
const CourseItem: React.FC<ICourseItemProps> = ({ course }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };
  return (
    <div
      className="w-[300px] shadow-2xs rounded-md bg-white cursor-pointer"
      onClick={handleClick}
    >
      <img src={course.image} className="w-[100%] h-[100px]" />
      <h3>{course.title}</h3>
    </div>
  );
};
export default CourseItem;

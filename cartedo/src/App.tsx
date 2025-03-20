import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import AddCourse from "./pages/AddCourse";
import { EnrolledCourseContextProvider } from "./CourseContext";
function App() {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/add");
  };
  return (
    <EnrolledCourseContextProvider>
      <div className="flex w-[100vw] min-h-[100vh] gap-5">
        <div className="w-40 m-10 cursor-pointer" onClick={handleAdd}>
          + Add Course
        </div>
        <div className="bg-gray-300 p-8 w-full">
          <h1 className="mb-8">My courses</h1>
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route path="/add" element={<AddCourse />} />
          </Routes>
        </div>
      </div>
    </EnrolledCourseContextProvider>
  );
}

export default App;

import { useForm, SubmitHandler } from "react-hook-form";
import { addCourse } from "../apis";
import { useNavigate } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
  image: string;
}
const AddCourse: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    addCourse({
      ...data,
      image:
        "https://images.unsplash.com/photo-1462826303086-329426d1aef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MTYwNXwwfDF8c2VhcmNofDE4fHxNYW5nZW1lbnQlMjBvZmZpY2V8ZW58MHx8fHwxNzIzODEyNDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    })
      .then(() => {
        console.log("added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log("error in adding course", err);
      });
  };

  return (
    <div className="w-full">
      <div>Add Course</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 bg-white rounded-sm shadow-md max-w-md mx-auto"
      >
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border rounded-md"
            placeholder="Enter description"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <button type="submit" className="w-full p-2 rounded-md bg-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddCourse;

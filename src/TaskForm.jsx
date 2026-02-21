import { useForm } from "react-hook-form";

function TaskForm({ onAddTask }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "Work",
      priority: "Medium",
    },
  });

  const onSubmit = (data) => {
    // data contains title, category, priority automatically
    onAddTask({
      ...data,
      completed: false,
    });

    reset(); // clears form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      {/* Title */}
      <input
        type="text"
        placeholder="Enter task..."
        {...register("title", {
          required: "Task title is required",
          minLength: {
            value: 3,
            message: "Minimum 3 characters required",
          },
        })}
        className="border p-2 mr-2"
      />

      {/* Error Message */}
      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      {/* Category */}
      <select {...register("category")} className="border p-2 mr-2">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>

      {/* Priority */}
      <select {...register("priority")} className="border p-2 mr-2">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;

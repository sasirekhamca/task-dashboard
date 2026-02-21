import { useParams } from "react-router-dom";
import useTasks from "./useTasks";
import TaskList from "./TaskList";

function Category() {
  const { name } = useParams();

  // get ALL task functions from the hook (important!)
  const { tasks, deleteTask, toggleTask, editTask } = useTasks();

  // filter tasks based on URL param
  const filteredTasks = tasks.filter(
    (task) => task.category.toLowerCase() === name.toLowerCase(),
  );

  return (
    <div className="dashboard-container">
      <h2>{name} Tasks</h2>

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default Category;

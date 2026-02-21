import useTasks from "./useTasks";
import TaskList from "./TaskList";

function ActiveTasks() {
  const { tasks } = useTasks();
  const activeTasks = tasks.filter((task) => !task.completed);
  return (
    <div>
      <h2>Active Tasks</h2>
      <TaskList tasks={activeTasks} />
    </div>
  );
}

export default ActiveTasks;

import useTasks from "./useTasks";
import TaskList from "./TaskList";

function CompletedTasks() {
  const { tasks } = useTasks();
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <div>
      <h2>Completed Tasks</h2>
      <TaskList tasks={completedTasks} />
    </div>
  );
}

export default CompletedTasks;

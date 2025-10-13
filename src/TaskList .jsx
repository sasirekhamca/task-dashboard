import React from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
function TaskList({ tasks }) {
  if (!tasks.length) return <p>No tasks available</p>;
  return (
    <ul className="task-item">
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} completed={task.completed} />
      ))}
    </ul>
  );
}
export default TaskList;

import React from "react";
import "./TaskList.css";
import TaskItem from "./TaskItem";
function TaskList({ tasks, onDelete, onToggle }) {
  //if (!tasks.length) return <p>No tasks available</p>;
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
export default TaskList;

import React from "react";
import "./TaskItem.css";
function TaskItem({ title = "Untitled Task", completed = false }) {
  return (
    <div className="task-item">
      <span>{title}</span>
      <span className="status">{completed ? "✓" : "○"}</span>
    </div>
  );
}
export default TaskItem;

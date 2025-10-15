import React, { useState } from "react";
import "./TaskItem.css";
function TaskItem({
  title = "Untitled Task",
  completed = false,
  onDelete,
  onToggle,
  id,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  /*  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(id), 300); // Match CSS transition duration
  }; */
  return (
    <div
      className={`task-item ${completed ? "completed" : ""} ${
        isDeleting ? "deleting" : ""
      }`}
    >
      <span>{title}</span>
      <div>
        <span className="status">{completed ? "✓" : "○"}</span>
        <button
          onClick={() => window.confirm("Delete this task?") && onDelete(id)}
        >
          Delete
        </button>
        <button onClick={() => onToggle(id)}>
          {completed ? "Undo" : "Complete"}
        </button>
      </div>
    </div>
  );
}
export default TaskItem;

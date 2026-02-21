import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  useEffect(() => {
    setEditTitle(task.title);
  }, [task.title]);

  const handleEdit = () => {
    if (editTitle.trim()) {
      onEdit(task.id, editTitle);
      setIsEditing(false);
    }
  };

  // Keyboard toggle support
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(task.id);
    }
  };

  const getPriorityColor = (priority) => {
    if (priority === "High") return "text-red-500";
    if (priority === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div
      role="listitem"
      tabIndex={0}
      aria-checked={task.completed}
      onKeyDown={handleKeyDown}
      className="task-item border rounded-lg p-4 mb-3 bg-white dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border p-2 rounded w-full"
            aria-label="Edit task title"
          />
        ) : (
          <>
            <h3
              className={`font-semibold text-lg ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </h3>

            <p className="text-sm text-gray-500">
              {task.category} •{" "}
              <span
                className={`font-semibold ${getPriorityColor(task.priority)}`}
              >
                {task.priority || "Medium"}
              </span>
            </p>
          </>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        {isEditing ? (
          <button
            onClick={handleEdit}
            aria-label={`Save changes to ${task.title}`}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            aria-label={`Edit ${task.title}`}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onToggle(task.id)}
          aria-label={`Mark ${task.title} as ${
            task.completed ? "incomplete" : "complete"
          }`}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TaskItem;

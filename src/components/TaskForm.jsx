import React from "react";
import "./TaskForm.css";
import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title cannot be empty");
      return;
    }
    if (title.length > 50) {
      setError("Task title must be 50 characters or less");
      return;
    }
    if (title.trim()) {
      const newTask = { id: Date.now(), title, completed: false };
      onAddTask(newTask);
      console.log("Adding task:", newTask);
      setTitle("");
      setError("");
    }
  };
  return (
    <div>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type a task"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default TaskForm;

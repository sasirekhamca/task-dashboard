import React from "react";
import "./TaskForm.css";
import { useState } from "react";
function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ id: Date.now(), title, completed: false });
      setTitle("");
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default TaskForm;

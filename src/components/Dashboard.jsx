import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Build Apps", completed: false },
  ]);
  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  return (
    <div>
      <Header title="Task-Dashboard"></Header>
      <p>Welcome to task manager</p>

      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
export default Dashboard;

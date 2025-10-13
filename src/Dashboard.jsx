import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import { useState } from "react";
import TaskList from "./TaskList ";
import TaskForm from "./TaskForm";

const tasks = [
  { id: 1, title: "Learn React", completed: true },
  { id: 2, title: "Build Apps", completed: false },
];

// const tasks = [];

function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: true },
    { id: 2, title: "Build Apps", completed: false },
  ]);
  const addTask = (newTask) => setTasks({ ...tasks, newTask });
  return (
    <div>
      <Header title="Task-Dashboard"></Header>
      <p>Welcome to task manager</p>
      <TaskList tasks={tasks} />
      <TaskForm onAddTask={addTask} />
    </div>
  );
}
export default Dashboard;

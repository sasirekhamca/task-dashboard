import React, { useCallback } from "react";
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
  /* const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  }; */
  const addTask = useCallback((newTask) => {
    setTasks((prev) => [...prev, newTask]);
  }, []);
  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  return (
    <div className="dashboard">
      <Header title="Task-Dashboard"></Header>

      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}
export default Dashboard;

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
  const clearAllTasks = () => {
    if (window.confirm("Are you sure you want to delete all the tasks?")) {
      setTasks([]);
    }
  };
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  return (
    <div className="dashboard">
      <Header title="Task-Dashboard"></Header>
      <p>
        {totalTasks === 0
          ? "No tasks to display"
          : `${completedTasks} of ${totalTasks} task${
              totalTasks === 1 ? "" : "s"
            }
        completed`}
      </p>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      <button onClick={clearAllTasks}>Clear All</button>
    </div>
  );
}
export default Dashboard;

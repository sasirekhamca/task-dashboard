import { useState, useMemo } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useTaskContext } from "./TaskContext";
import { useTheme } from "./context/ThemeContext";

function Dashboard() {
  // 🌙 Theme control
  const { isDark, toggleTheme } = useTheme();

  // 📋 Task context
  const { tasks, addTask, deleteTask, toggleTask, editTask } = useTaskContext();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ✅ Combine category + search filtering
  const filteredTasks = useMemo(() => {
    return tasks
      .filter(
        (task) =>
          filter === "All" ||
          task.category.toLowerCase() === filter.toLowerCase(),
      )
      .filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()),
      );
  }, [tasks, filter, search]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors">
      {/* 🌙 Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        {isDark ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
      </button>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 dark:text-white shadow-xl rounded-2xl p-6 transition-colors">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">
          Task Dashboard
        </h1>

        {/* ➕ Add Task */}
        <TaskForm onAddTask={addTask} />

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 mb-4"
        />

        {/* 📂 Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 mb-6"
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>

        {/* 📋 Task List */}
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;

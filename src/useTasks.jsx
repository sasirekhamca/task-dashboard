import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  // ✅ Fetch Tasks (GET)
  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}?_limit=5`);
      const data = await res.json();

      const formatted = data.map((item) => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
        category: "Work",
      }));

      setTasks(formatted);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // ✅ Load once
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // ✅ Add Task (POST)
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
    };

    setTasks((prev) => [...prev, newTask]);

    toast.success("Task added!");
  };

  // ✅ Delete Task (DELETE)
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

    toast.error("Task deleted!");
  };

  // ✅ Toggle Complete (Local Update)
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );

    toast.info("Task updated!");
  };

  // ✅ Edit Task (Local Update)
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
    toast.info("Task updated!");
  };

  return {
    tasks,
    isLoading,
    error,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    refetch: fetchTasks,
  };
}

export default useTasks;

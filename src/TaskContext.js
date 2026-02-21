import { createContext, useContext } from "react";
import useTasks from "./useTasks";

// Create the context
const TaskContext = createContext();

// Provider component (wraps the app)
export const TaskProvider = ({ children }) => {
  const taskData = useTasks();

  return (
    <TaskContext.Provider value={taskData}>{children}</TaskContext.Provider>
  );
};

// Custom hook to use the context easily
export const useTaskContext = () => {
  return useContext(TaskContext);
};

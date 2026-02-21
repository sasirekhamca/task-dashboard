import { Navigate } from "react-router-dom";
import { useTaskContext } from "./TaskContext";

function ProtectedRoute({ children }) {
  const { tasks, loading } = useTaskContext();

  if (loading) return <p>Loading...</p>; // wait for API

  return tasks.length > 0 ? children : <Navigate to="/" />;
}

export default ProtectedRoute;

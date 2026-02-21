import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { TaskProvider } from "./TaskContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome</h2>
      <Link to="/tasks">Go To Tasks</Link>
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        {/* ✅ Add ToastContainer HERE (global level) */}
        <ToastContainer position="top-right" autoClose={2000} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}

export default App;

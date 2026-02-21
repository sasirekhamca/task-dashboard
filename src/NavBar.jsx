import { Link, useLocation } from "react-router-dom";
import "./styles.css";

function NavBar() {
  const location = useLocation();
  const getClass = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <Link to="/" className={getClass("/")}>
        Home
      </Link>
      <Link to="/tasks" className={getClass("/tasks")}>
        Tasks
      </Link>
      <Link to="/active" className={getClass("/active")}>
        Active
      </Link>
      <Link to="/completed" className={getClass("/completed")}>
        Completed
      </Link>
    </nav>
  );
}

export default NavBar;

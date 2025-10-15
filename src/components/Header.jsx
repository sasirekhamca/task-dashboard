import React from "react";
import "./Header.css";
function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>Welcome to task manager</p>
    </div>
  );
}
export default Header;

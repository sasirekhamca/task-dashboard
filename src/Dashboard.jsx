import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import TaskItem from "./TaskItem";
function Dashboard() {
  return (
    <div>
      <Header title="Task-Dashboard"></Header>
      <p>Welcome to task manager</p>
      <TaskItem title="Learn React" completed={false} />
      <TaskItem title="Build App" completed={true} />
      <TaskItem />
    </div>
  );
}
export default Dashboard;

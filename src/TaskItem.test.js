import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

test("renders task title", () => {
  render(
    <TaskItem
      task={{ id: 1, title: "Test Task", completed: false, category: "Work" }}
      onDelete={() => {}}
      onToggle={() => {}}
      onEdit={() => {}}
    />,
  );

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "./TaskForm";

test("calls onAddTask when form is submitted", () => {
  const mockAddTask = jest.fn(); // fake function to track calls

  render(<TaskForm onAddTask={mockAddTask} />);

  // simulate typing
  fireEvent.change(screen.getByPlaceholderText(/add/i), {
    target: { value: "New Task" },
  });

  // simulate clicking Add button
  fireEvent.click(screen.getByRole("button", { name: /add/i }));

  // verify function was called
  expect(mockAddTask).toHaveBeenCalled();

  // verify it was called with correct data
  expect(mockAddTask).toHaveBeenCalledWith(
    expect.objectContaining({
      title: "New Task",
    }),
  );
});

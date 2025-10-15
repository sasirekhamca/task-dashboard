import React from "react";
function BookItem({ book, completed, onDelete, onToggle, id }) {
  return (
    <div>
      <span>{book}</span>
      <span>{completed}</span>
      <button
        onClick={() =>
          window.confirm("Are you sure to deleted the book?") && onDelete(id)
        }
      >
        Delete
      </button>
      <button onClick={() => onToggle(id)}>
        {completed ? "Undo" : "Completed"}
      </button>
    </div>
  );
}

export default BookItem;

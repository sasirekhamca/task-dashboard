import React from "react";
function BookItem({ book, completed, onDelete, id }) {
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
    </div>
  );
}

export default BookItem;

import React, { useState, useCallback } from "react";

function BookForm({ onAdd }) {
  const [book, setBook] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!book.trim()) {
      setError("The name is empty");
      return;
    }
    if (book.length > 50) {
      setError("The name is too long");
      return;
    }
    if (book.trim()) {
      const newBook = { id: Date.now(), book, completed: false };
      onAdd(newBook);
      setBook("");
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
        />
        {error}
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default BookForm;

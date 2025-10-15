import React, { useState, useCallback } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Header from "./Header";

function Dashboard() {
  const [books, setBooks] = useState([
    { id: 1, book: "Harry Potter 1", completed: false },
    { id: 2, book: "Harry Potter2", completed: false },
  ]);
  const addBook = useCallback((newBook) => {
    setBooks((prev) => [...prev, newBook]);
  }, []);

  const deleteBook = useCallback((id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }, []);
  return (
    <div>
      <Header title="Book List" />
      <BookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
}
export default Dashboard;

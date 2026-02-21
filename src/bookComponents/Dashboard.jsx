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
  const toggleCompleted = useCallback((id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, completed: !book.completed } : book
      )
    );
  }, []);

  const clearAllBooks = () => {
    if (window.confirm("Are you sure to deleted all the books?")) {
      setBooks([]);
    }
  };
  const totalBooks = books.length;
  const completedBooks = books.filter((book) => book.completed).length;
  return (
    <div>
      <Header title="Book List" />
      <p>
        {totalBooks === 0
          ? "No books to display"
          : `${completedBooks} book${
              totalBooks === 1 ? "" : "s"
            } out of ${totalBooks} are completed`}
      </p>
      <BookForm onAdd={addBook} />
      <BookList
        books={books}
        onDelete={deleteBook}
        onToggle={toggleCompleted}
      />
      <button onClick={clearAllBooks}>Clear All</button>
    </div>
  );
}
export default Dashboard;

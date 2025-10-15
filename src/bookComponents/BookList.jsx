import React from "react";
import BookItem from "./BookItem";
function BookList({ books, onDelete }) {
  if (!books.length) return <p>"No Books to display"</p>;
  return (
    <ul>
      {books.map((item) => (
        <BookItem
          key={item.id}
          id={item.id}
          book={item.book}
          completed={item.completed}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
export default BookList;

import React from "react";

function Header({ title }) {
  return (
    <div>
      <span>{title}</span>
      <p>This page will show the list of books with its status</p>
    </div>
  );
}

export default Header;

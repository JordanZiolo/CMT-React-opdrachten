import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";

function BookList() {
 
}
const searchHandler = (e) => {
  console.log(e.target)
}
  return (
    <div className="book-list">
      <BookCounter aantal={books.length} />
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
        />
      ))}
    </div>
  );


export default BookList;
import { useState } from "react";
import Book from "./book";
 
function BookList() {
  const [books] = useState([
    {
      title: "Harry Potter and The Sorcerers Stone",
      author: "J. K. Rowling",
      image: "/images/book-1.png",
    },
    {
      title: "Fantasia VI",
      author: "Geronimo Stilton",
      image: "/images/book-2.png",
    },
    {
      title: "The Hunger Games",
      author: "Suzan Collins",
      image: "/images/book-3.png",
    },
  ]);
 
  return (
    <div className="book-list">
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
}
 
export default BookList;
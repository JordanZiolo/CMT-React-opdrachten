import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import BookData from '../data.js';

function BookList() {
  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const categories = [
    'Alle',
    'Fantasy',
    'Avontuur',
    'Sciencefiction',
    'Thriller',
    'Romance'
  ];

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setSearchInput(value);

    const filteredBooks = BookData.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    const categoryFiltered =
      selectedCategory === 'Alle'
        ? filteredBooks
        : filteredBooks.filter(book => book.category === selectedCategory);

    setBooks(categoryFiltered);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === 'Alle') {
      const searchFiltered = BookData.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setBooks(searchFiltered);
    } else {
      const filtered = BookData.filter(
        (book) =>
          book.category === category &&
          book.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setBooks(filtered);
    }
  };

  return (
    <div className="book-list">
      <div className='search'>
        <input 
          type="text" 
          placeholder="zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name='search'
        />
      </div>

      <div className="filter">
        <label htmlFor="category">Filter op categorie: </label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={filterHandler}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <BookCounter aantal={books.length} />

      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          image={book.image}
          category={book.category}
        />
      ))}
    </div>
  );
}

export default BookList;
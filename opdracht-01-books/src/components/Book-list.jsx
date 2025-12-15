import { useState } from "react";
import Book from "./Book";
import BookCounter from "./BookCounter";
import BookData from "../data";

function BookList() {
  const [books, setBooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [favorites, setFavorites] = useState([]);

  const categories = [
    "Alle",
    "Fantasy",
    "Avontuur",
    "Sciencefiction",
    "Thriller",
    "Romance",
    "Favorieten"
  ];

  const toggleFavorite = (title) => {
    if (favorites.includes(title)) {
      setFavorites(favorites.filter((fav) => fav !== title));
    } else {
      setFavorites([...favorites, title]);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filteredBooks = BookData.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    const categoryFiltered =
      selectedCategory === "Alle"
        ? filteredBooks
        : selectedCategory === "Favorieten"
        ? filteredBooks.filter((book) => favorites.includes(book.title))
        : filteredBooks.filter(
            (book) => book.category === selectedCategory
          );

    setBooks(categoryFiltered);
  };

  const filterHandler = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "Alle") {
      setBooks(
        BookData.filter((book) =>
          book.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else if (category === "Favorieten") {
      setBooks(
        BookData.filter(
          (book) =>
            favorites.includes(book.title) &&
            book.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setBooks(
        BookData.filter(
          (book) =>
            book.category === category &&
            book.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="book-list">
      <div className="search">
        <input
          type="text"
          placeholder="zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
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
          description={book.description}
          year={book.year}
          pages={book.pages}
          liked={favorites.includes(book.title)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default BookList;
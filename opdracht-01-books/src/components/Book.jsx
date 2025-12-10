import { useState } from "react";
 
function Book({ title, author, image, category, liked, toggleFavorite }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
 
  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }
 
  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <p>Categorie: {category}</p>
 
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
 
      <div className="favorite-section">
        <button
          className="favorite-button"
          onClick={() => toggleFavorite(title)}
        >
          {liked ? "❤️" : "🤍"}
        </button>
 
        {liked && (
          <p className="favorited-text">Toegevoegd aan favorieten</p>
        )}
      </div>
    </div>
  );
}
 
export default Book;
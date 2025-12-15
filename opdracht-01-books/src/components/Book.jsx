import { useState } from "react";
 
function Book({ title, author, image, category, description, year, pages }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [liked, setLiked] = useState(false);
 
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
 
  const verhoogTeller = (e) => {
    e.stopPropagation();
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };
 
  const toggleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };
 
  return (
    <article
      className={`book ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="book-inner">
 
        <div className="book-front">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{author}</p>
          <p>Categorie: {category}</p>
 
          <button onClick={verhoogTeller}>
            Keer gelezen: {aantalKeerGelezen}
          </button>
 
          <div className="favorite-section">
            <button className="favorite-button" onClick={toggleLike}>
              {liked ? "❤️" : "🤍"}
            </button>
 
            {liked && (
              <p className="favorited-text">Toegevoegd aan favorieten</p>
            )}
          </div>
        </div>
 
        
        <div className="book-back">
          <h2>Details</h2>
          <p><strong>Publicatiejaar:</strong> {year}</p>
          <p><strong>Pagina's:</strong> {pages}</p>
          <p>{description}</p>
          <p><em>Klik om terug te gaan</em></p>
        </div>
 
      </div>
    </article>
  );
}
 
export default Book;
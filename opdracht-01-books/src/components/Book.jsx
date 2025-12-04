import { useState } from "react";

function Book({ title, author, image, category }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);

  function verhoogTeller() {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }

  return (
    <div className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>

      {/* 👉 Hier tonen we de categorie */}
      <p>Categorie: {category}</p>

      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen}
      </button>
    </div>
  );
}

export default Book;
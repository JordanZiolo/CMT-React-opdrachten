import { useParams, Link } from "react-router-dom";
import animals from "../animals";
import "../App.css";

function DetailPage() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return (
      <div className="not-found">
        <h2>Dier niet gevonden</h2>
        <Link to="/" className="back-link">
          Terug naar overzicht
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <img src={animal.image} alt={animal.name} className="detail-image" />
      <h1>{animal.name}</h1>
      <p>
        <strong>Soort:</strong> {animal.species}
      </p>
      <p>
        <strong>Leefgebied:</strong> {animal.habitat}
      </p>
      <p className="detail-description">{animal.description}</p>
      <Link to="/" className="back-link">
        ← Terug naar overzicht
      </Link>
    </div>
  );
}

export default DetailPage;
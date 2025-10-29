import { useNavigate } from "react-router-dom";
import "../App.css";

function Card({ animal }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/animal/${animal.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={animal.imageUrl} alt={animal.name} className="card-image" />
      <div className="card-content">
        <h2>{animal.name}</h2>
        <p>{animal.habitat}</p>
      </div>
    </div>
  );
}

export default Card;
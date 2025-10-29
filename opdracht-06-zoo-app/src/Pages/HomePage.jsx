import animals from "../animals";
import Card from "../components/Card";
import "../App.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Dieren in de Zoo</h1>
      <div className="card-grid">
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
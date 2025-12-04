import animalsData from "../animals.js";
import Card from "../components/Card";
import "../App.css";
import { useState } from "react";

function HomePage() {
  const [searchInput, setSearchInput] = useState('')
  const [animals, setAnimals] = useState(animalsData)

  const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);

  const filteredanimals = animalsData.filter((animal) =>
  animal.name.toLowerCase().includes(searchInput.toLowerCase())
   );
   setAnimals(filteredanimals);
  };

  return (

    

    <div className="home-container">

      <h1 className="home-title">Dieren in de Zoo</h1>

      <div className='search'>
        <input 
        type="text" 
        placeholder="zoek een titel op "
        onChange ={handleChange}
        value= {searchInput}
        name='search'
        />
      </div>
      <div className="card-grid">
        {animals.map((animal) => (
          <Card key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "9050f2cebe862c10ae9dd4dcb4e0cebf";

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod === "404") {
        alert("Stad niet gevonden");
        return;
      }
      setWeather(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center p-6 gap-6">
      <h1 className="text-3xl font-bold">Weather App</h1>

      
      <form onSubmit={fetchWeather} className="flex gap-3">
        <input
          type="text"
          placeholder="Zoek een stad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded-lg border"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Zoek
        </button>
      </form>

  
      {weather && <WeatherInfo data={weather} />}
    </div>
  );
}

export default App;

function WeatherInfo({ data }) {
  const icon = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[300px] text-center">
      <h2 className="text-2xl font-bold">{data.name}</h2>

      <img src={iconUrl} alt="weather icon" className="mx-auto" />

      <p className="text-xl font-semibold">{data.main.temp}°C</p>

      <div className="mt-3 text-gray-700">
        <p>Gevoelstemperatuur: {data.main.feels_like}°C</p>
        <p>Luchtvochtigheid: {data.main.humidity}%</p>
        <p>Wind snelheid: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherInfo;

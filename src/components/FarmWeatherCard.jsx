import React from 'react';

const FarmWeatherCard = ({ farm }) => {
  return (
    <div className="weather-card">
      <h2>{farm.name}</h2>
      <p><strong>Ubicación:</strong> {farm.location}</p>
      <p><strong>Temperatura:</strong> {farm.weather.temperature} °C</p>
      <p><strong>Humedad:</strong> {farm.weather.humidity} %</p>
      <p><strong>Velocidad del Viento:</strong> {farm.weather.wind_speed} m/s</p>
      <p><strong>Dirección del Viento:</strong> {farm.weather.wind_direction} °</p>
      <p><strong>Condiciones:</strong> {farm.weather.weather_code}</p>
      <div className="crop-status">
        <h3>Estado del Cultivo</h3>
        <p>{farm.cropStatus}</p>
      </div>
      <div className="crop-recommendations">
        <h3>Recomendaciones</h3>
        <p>{farm.recommendations}</p>
      </div>
    </div>
  );
};

export default FarmWeatherCard;

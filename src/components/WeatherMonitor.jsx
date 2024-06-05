import React, { useState, useEffect } from 'react';
import FarmWeatherCard from './FarmWeatherCard';

const WeatherMonitor = () => {
  const [farms, setFarms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true'),
          fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&current_weather=true'),
          fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true')
        ]);
        const data = await Promise.all(responses.map(response => response.json()));
        
        const farmsData = [
          {
            name: 'Granja 1',
            location: 'Tokio, Japón',
            weather: data[0].current_weather,
            cropStatus: 'Los cultivos están en buen estado gracias a las condiciones climáticas favorables actuales.',
            recommendations: 'Riego en la mañana. Fertilización en 2-3 días. Vigilar posibles plagas debido a la humedad alta.'
          },
          {
            name: 'Granja 2',
            location: 'Los Ángeles, USA',
            weather: data[1].current_weather,
            cropStatus: 'Los cultivos necesitan más agua debido a la baja humedad.',
            recommendations: 'Aumentar riego. Fertilización en 1-2 días. Revisar signos de estrés hídrico.'
          },
          {
            name: 'Granja 3',
            location: 'Londres, Reino Unido',
            weather: data[2].current_weather,
            cropStatus: 'Los cultivos están bien, pero la velocidad del viento es alta.',
            recommendations: 'Asegurar las plantas más altas. Riego normal. Fertilización en 3-4 días.'
          }
        ];

        setFarms(farmsData);
      } catch (error) {
        setError('Error al obtener datos del clima');
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!farms.length) {
    return <p>Cargando datos del clima...</p>;
  }

  return (
    <div>
      {farms.map((farm, index) => (
        <FarmWeatherCard key={index} farm={farm} />
      ))}
    </div>
  );
};

export default WeatherMonitor;

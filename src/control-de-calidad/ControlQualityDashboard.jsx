import React from 'react';
import QualityCard from './QualityCard';


const qualityData = [
  {
    id: 1,
    title: 'Inspección de Plagas',
    description: 'Resultados de la inspección de plagas realizadas en la última semana.',
    status: 'Sin plagas detectadas',
  },
  {
    id: 2,
    title: 'Nivel de Humedad del Suelo',
    description: 'Monitoreo del nivel de humedad del suelo en las diferentes secciones del cultivo.',
    status: 'Óptimo',
  },
  {
    id: 3,
    title: 'Control de Pesticidas',
    description: 'Registro de aplicación de pesticidas y su efectividad.',
    status: 'Aplicado el 01/06/2024',
  },
  {
    id: 4,
    title: 'Condiciones Climáticas',
    description: 'Registro de las condiciones climáticas actuales y pronóstico.',
    status: 'Despejado y soleado',
  },
];

const ControlDeCalidad = () => {
  return (
    <div className="quality-dashboard">
      <h1>Control de Calidad</h1>
      <div className="quality-cards">
        {qualityData.map((data) => (
          <QualityCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default ControlDeCalidad;

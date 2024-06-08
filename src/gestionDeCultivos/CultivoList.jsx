import React from 'react';

const CultivoList = ({ cultivos }) => {
  return (
    <div>
      <h2>Listado de Cultivos</h2>
      <ul>
        {cultivos.map(cultivo => (
          <li key={cultivo.id}>{cultivo.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default CultivoList;

import React from 'react';

const CultivoDetail = ({ cultivo }) => {
  return (
    <div>
      <h2>{cultivo.nombre}</h2>
      <p>Descripción: {cultivo.descripcion}</p>
      {/* Agrega más detalles del cultivo aquí */}
    </div>
  );
};

export default CultivoDetail;

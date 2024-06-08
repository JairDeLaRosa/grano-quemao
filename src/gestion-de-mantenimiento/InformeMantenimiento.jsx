import React from 'react'

export const InformeMantenimiento = ({ actividades }) => {
    const costoTotal = actividades.reduce((total, actividad) => total + actividad.costo, 0);

    return (
      <div>
        <h2>Informe de Mantenimiento</h2>
        <p>Costo Total: ${costoTotal.toFixed(2)}</p>
      </div>
    );
}

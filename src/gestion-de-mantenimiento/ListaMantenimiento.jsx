import React from 'react'

export const ListaMantenimiento = ({ actividades }) => {
    return (
        <div>
          <h2>Actividades de Mantenimiento Registradas</h2>
          {actividades.length > 0 ? (
            <ul>
              {actividades.map((actividad, index) => (
                <li key={actividad.id}>
                  {actividad.fecha} - {actividad.tipo}: {actividad.descripcion} 
                  (Equipo: {actividad.equipo}, Responsable: {actividad.responsable}, 
                  Costo: ${actividad.costo})
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay actividades registradas.</p>
          )}
        </div>
      );
}

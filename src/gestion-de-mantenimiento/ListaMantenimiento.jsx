import React from 'react'

export const ListaMantenimiento = ({ actividades }) => {
    return (
        <div>
          <h2>Actividades de Mantenimiento Registradas</h2>
          {actividades.length > 0 ? (
            <ul className=''>
              {actividades.map((actividad, index) => (
                <li className='list-group-item mantenimientItem' key={actividad.id}>
                  - {actividad.tipo}: {actividad.descripcion} <br />
                  Equipo: {actividad.equipo}, Responsable: {actividad.responsable}
                   <br /> Costo: ${actividad.costo}<span> Fecha: </span>{actividad.fecha}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay actividades registradas.</p>
          )}
        </div>
      );
}

import React, { useState } from 'react'

export const RegistroMantenimiento = ({ agregarMantenimiento }) => {
    const [fecha, setFecha] = useState('');
    const [tipo, setTipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [equipo, setEquipo] = useState('');
    const [responsable, setResponsable] = useState('');
    const [costo, setCosto] = useState('');
  
    const manejarSubmit = () => {
      const nuevaActividad = {
        id: Date.now(), // Genera un ID único
        fecha,
        tipo,
        descripcion,
        equipo,
        responsable,
        costo: parseFloat(costo)
      };
      agregarMantenimiento(nuevaActividad);
    };
  
    return (
      <div>
        <h2>Registrar Mantenimiento</h2>
        <form>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
          <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <input type="text" placeholder="Equipo" value={equipo} onChange={(e) => setEquipo(e.target.value)} />
          <input type="text" placeholder="Responsable" value={responsable} onChange={(e) => setResponsable(e.target.value)} />
          <input type="number" placeholder="Costo" step="0.01" value={costo} onChange={(e) => setCosto(e.target.value)} />
          <button type="button" onClick={manejarSubmit}>Registrar</button>
        </form>
      </div>
    );
}

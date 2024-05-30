import React, { useState } from "react";
import swal from "sweetalert";

export const RegistroMantenimiento = ({ agregarMantenimiento,RegistrarMantenimiento }) => {
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [equipo, setEquipo] = useState("");
  const [responsable, setResponsable] = useState("");
  const [costo, setCosto] = useState("");

  const manejarSubmit = () => {
    if(fecha!=""&&tipo!=""&&descripcion!=""&&equipo!=""&&responsable!=""&&costo!=""){
      const nuevaActividad = {
        id: Date.now(), // Genera un ID único
        fecha,
        tipo,
        descripcion,
        equipo,
        responsable,
        costo: parseFloat(costo),
      };
      swal({
        title: "¡Mantenimiento Registrado exitosamente!",
        icon: "success",
        buttons: "aceptar"
      })
      agregarMantenimiento(nuevaActividad);
      setFecha("");
      setTipo("");
      setDescripcion("");
      setEquipo("");
      setResponsable("");
      setCosto("");
      RegistrarMantenimiento(false);
    }else{
      swal({
        title: "Complete todos los campos",
        icon: "error",
        buttons: "ok"
      })
    }
    
  };

  return (
    <div>
      <h2>Registrar Mantenimiento</h2>
      <form className="form-control formRegistrarMantenimiento">
        <div className="row">
          <div className="col-6">
            <label for="inputEmail4" class="form-label">
              Fecha del mantenimeinto
            </label>
            <input
              className="form-control"
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label for="inputEmail4" class="form-label">
              Tipo
            </label>
            <input
              className="form-control"
              type="text"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
          <label for="inputEmail4" class="form-label">
            Equipo
            </label>
            <input
              className="form-control"
              type="text"
              value={equipo}
              onChange={(e) => setEquipo(e.target.value)}
            />
            
          </div>
          <div className="col-6">
          <label for="inputEmail4" class="form-label">
            Descripción
            </label>
            <textarea
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label for="inputEmail4" class="form-label">
            Responsable
            </label>
            <input
              className="form-control"
              type="text"
              value={responsable}
              onChange={(e) => setResponsable(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label for="inputEmail4" class="form-label">
            Costo
            </label>
            <input
              className="form-control"
              type="number"
              placeholder="Ej: 30.000"
              step="0.01"
              value={costo}
              onChange={(e) => setCosto(e.target.value)}
            />
          </div>
        </div>
        <br />
        <button
          className="btn btn-primary"
          type="button"
          onClick={manejarSubmit}
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

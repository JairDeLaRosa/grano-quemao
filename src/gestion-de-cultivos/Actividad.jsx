import React from "react";

export const Actividad = () => {
  return (
    <div className="border rounded border-1 border-secondary cardActividad p-3">
      <div className="d-flex justify-content-center">
        <h4 className="title">Actividad</h4>
      </div>
      <h6 className="colorSubtitle">Estado: no iniciado</h6>
      <div className="row">
        <p>
          <b>Información: </b>Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iusto veniam officiis nemo dolorum. Autem
          exercitationem natus alias esse officiis! Veritatis iure quis et autem
          eum minima facilis accusamus a repudiandae. 
        </p>
      </div>
      <div className="d-flex justify-content-between"><span><b>Ultima actualización: </b>00/00/0000</span> <a href="">Modificar</a></div>
    </div>
  );
};

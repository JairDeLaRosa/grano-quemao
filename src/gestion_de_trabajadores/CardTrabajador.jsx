import React from "react";
import foto from "./../assets/fotoPerfil.jpeg";
import { Link } from "react-router-dom";
import { ADMIN_REGISTRO_TRABAJADORES } from "../router/RoutesTypes";
export const CardTrabajador = () => {
  return (
    <>
      <div class="card card2">
        <div className="img2">
          <img src={foto} class="card-img-top" alt="..." />
        </div>

        <div class="card-body">
            <h5>Jair De La Rosa</h5>
          <p class="card-text">
         Asesor de ventas <br />
         <Link to={ADMIN_REGISTRO_TRABAJADORES.TRABAJADORES}>Ver mas...</Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

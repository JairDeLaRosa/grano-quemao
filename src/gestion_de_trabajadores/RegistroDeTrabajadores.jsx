import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";

import { CardTrabajador } from "./CardTrabajador";
import { ADMIN_REGISTRO_TRABAJADORES } from "../router/RoutesTypes";


export const RegistroDeTrabajadores = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const handleSelect=({target})=>{
    console.log(target.value)
  }
  const aggTrabajador=()=>{
    navigate(ADMIN_REGISTRO_TRABAJADORES.REGISTRAR_TRABAJADORES)
  }  
  return (
    <>
      <Nav />
      <Aside />
      <section>
        <div className="back">
          <h1 className="title">Modulo de trabajadores</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <h5 className="ml">Area</h5>
        <div className="row">
          <div className="col-4"><select
            onChange={handleSelect}
            className="form-select select-tipo-insumo"
            aria-label="Default select example"
          >
            <option value="insumos">Todos</option>
            <option value="insumos">Administrativa</option>
            <option value="maquinaria">Mano de obra</option>
            <option value="otra">Otros</option>
          </select></div>
        
          <button className="btn btn-primary col-2" onClick={aggTrabajador}>Agregar trabajador</button>
        </div>
        <br />
        <div className="cards">
          <CardTrabajador/>
          <CardTrabajador/>
          <CardTrabajador/>
          <CardTrabajador/>
          <CardTrabajador/>
        </div>
            

      </section>
    </>
  );
};

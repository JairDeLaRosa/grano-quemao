import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Actividad } from "./Actividad";
import { AgregarActividad } from "./AgregarActividad";

export const GestionDeCultivos = () => {
  const navigate = useNavigate();
  const [verAggActividad, setVerAggActividad]=useState(false)
  const [fixed, setFixed]=useState("")
  const back = () => {
    navigate(-1);
  };
  const handleSelect = ({ target }) => {
    console.log(target.value);
  };
  const agregarActividad=()=>{
    setVerAggActividad(true)
    setFixed("fixed")
  }
  return (
    <>
      <Nav />
      <Aside />
      {verAggActividad ? <AgregarActividad/> :null}
      
      <section className={fixed}>
        
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1 className="title">Gestion de cultivos</h1>
            <button className="buttonBackInventario" onClick={back}>
              <IoIosArrowRoundBack size={30} />
            </button>
          </div>
          <br />
          <div className="row">
            <h3 className="col-3 colorSubtitle">Seleccionar cultivo</h3>
            <div className="col-7">
              <select
                onChange={handleSelect}
                className="form-select select"
                aria-label="Default select example"
              >
                <option value="Cultivo de cafe">Cultivo de cafe</option>
                <option value="Cultivo de plantas">Cultivo de plantas</option>
              </select>
            </div>

            <button className="btn btn-primary col-2">Agragar cultivo</button>
          </div>

          <h4 className="colorSubtitle mt-1 mb-3">
            Estado del cultivo: -----------------
          </h4>

          <div className="row">
            <div className="col-3">
              <select
                onChange={handleSelect}
                className="form-select select"
                aria-label="Default select example"
              >
                <option value="Cultivo de cafe">Planificacion</option>
                <option value="Cultivo de plantas">Cultivo de plantas</option>
              </select>
              
            </div>
            <button className="btn btn-primary aggActividad col-2" onClick={agregarActividad}>Agregar actividad</button>
            <div className="col-7 d-flex justify-content-between align-items-center">
              <div>Fecha de inicio: 00/33/2020</div>
              <div>Fecha de fin: 00/33/2020</div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Actividad />
              <Actividad />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <Actividad />
              <Actividad />
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

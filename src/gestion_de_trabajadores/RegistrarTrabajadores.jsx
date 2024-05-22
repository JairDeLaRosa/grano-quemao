import React from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const RegistrarTrabajadores = () => {
    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
      };
  return (
    <>
      <Nav />
      <Aside />
      <section>
      <div className="back">
          <h1 className="title">Registrar trabajador</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <div className="registroTrabajadores">
        <form className="formTrabajadore">
            <div className="input">
               <label >Ingresar nombre</label>
            <input type="text" className="form-control"/>
            </div>
            <div className="input">
            <label >Ingresar Apellidos</label>
            <input  type="text" className="form-control"/>
            </div>
            <div className="input">
                <label>Ingresar area de trabajo</label>
            <input  type="text" className="form-control"/>
            </div>
            <div className="input">
            <label>Ingresar cargo laboral</label>
            <input  type="text" className="form-control"/>
            </div>
            <div className="input">
            <label >Ingresar fecha de nacimiento</label>
            <input  type="date" placeholder="Fecha de nacimiento" className="form-control"/>
            </div>
            <div className="input">
            <label>Insertar salario mensual</label>
            <input  type="number" className="form-control"/>
            </div>
            <div className="input">
            <label>Ingresar EPS</label>
            <input  type="text" className="form-control"/>
            </div>
            <div className="input">
            <label>Fecha de afiliación con eps</label>
            <input  type="Date" className="form-control"/>
            </div>
            <div className="input">
            <label>Costo de EPS</label>
            <input  type="number" className="form-control"/>
            </div>
            <div className="input">
            <button className="btn btn-primary registrar">Registrar</button>
            </div>
                
        </form>    
        </div>
        
      </section>
    </>
  );
};

import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const RegistrarTrabajadores = () => {
  const [nombre,setNombre]=useState("")
  const [apellidos,setApellidos]=useState("")
  const [area,setArea]=useState("")
  const [cargo,setCargo]=useState("")
  const [fechaDeNacimiento,setfechaDeNacimiento]=useState("")
  const [salarioMensual,setSalarioMensual]=useState("")
  const [EPS,setEPS]=useState("")
  const [afiliación,setAfiliacion]=useState("")
  const [costoEPS,setCostoEPS]=useState("")
  const manejadorSubmit=()=>{
    const data={
      nombre,apellidos,area,cargo,fechaDeNacimiento,salarioMensual,EPS, afiliación, costoEPS
    }
    console.log(data)
  }
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
            <input type="text" className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            </div>
            <div className="input">
            <label >Ingresar apellidos</label>
            <input  type="text" className="form-control" value={apellidos} onChange={(e)=>setApellidos(e.target.value)}/>
            </div>
            <div className="input">
                <label>Ingresar area de trabajo</label>
            <input  type="text" className="form-control" value={area} onChange={(e)=>setArea(e.target.value)}/>
            </div>
            <div className="input">
            <label>Ingresar cargo laboral</label>
            <input  type="text" className="form-control" value={cargo} onChange={(e)=>setCargo(e.target.value)}/>
            </div>
            <div className="input">
            <label >Ingresar fecha de nacimiento</label>
            <input  type="date" placeholder="Fecha de nacimiento" className="form-control" value={fechaDeNacimiento} onChange={(e)=>setfechaDeNacimiento(e.target.value)}/>
            </div>
            <div className="input">
            <label>Insertar salario mensual</label>
            <input  type="number" className="form-control" value={salarioMensual} onChange={(e)=>setSalarioMensual(e.target.value)}/>
            </div>
            <div className="input">
            <label>Ingresar EPS</label>
            <input  type="text" className="form-control" value={EPS} onChange={(e)=>setEPS(e.target.value)}/>
            </div>
            <div className="input">
            <label>Fecha de afiliación con eps</label>
            <input  type="Date" className="form-control" value={afiliación} onChange={(e)=>setAfiliacion(e.target.value)}/>
            </div>
            <div className="input">
            <label>Costo de EPS</label>
            <input  type="number" className="form-control" value={costoEPS} onChange={(e)=>setCostoEPS(e.target.value)}/>
            </div>
            <div className="input">
            <button className="btn btn-primary registrar" type="button" onClick={manejadorSubmit}>Registrar</button>
            </div>
                
        </form>    
        </div>
        
      </section>
    </>
  );
};

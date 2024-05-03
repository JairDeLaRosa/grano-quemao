import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { FilaMovimientos } from "./FilaMovimientos";
import { AgregarIngreso } from "./AgregarIngreso";
import { AgrgarSalida } from "./AgrgarSalida";
import  {movimientos}  from "./objetos";

export const ControlCostosFinanzas = () => {
  const navigate = useNavigate();
  const [verAggIngresos, setVerAggIngresos]=useState(false);
  const [verAggSalidas, setVerAggSalidas]=useState(false);
  const [transacciones, setTransacciones] = useState(movimientos.movi);
  const formateador = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP"
  });
  
const calcularGanancias=()=>{
  let total=0;
  for (let index = 0; index < transacciones.length; index++) {
    const element = transacciones[index];
    if(element.tipo==="ingreso"){
      total=total + +element.costo
    }else{
      total=total - +element.costo
    }
  }
  return total
}
  const agregarMovimientos = (nuevoMovimiento) => {
    setTransacciones([...transacciones, nuevoMovimiento]);
  };
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <Nav />
      <Aside />
      {(verAggIngresos)?<AgregarIngreso back={()=>setVerAggIngresos(false)} agregarMovi={agregarMovimientos}/>:null}
      {(verAggSalidas)?<AgrgarSalida back={()=>setVerAggSalidas(false)} agregarMovi={agregarMovimientos}/>:null}
      <section>
        <div className="back">
          <h1 className="title">Control de costos y finanzas</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <br />
        <div className="row">
          <h3 className=" col-3 colorSubtitle">Movimientos</h3>
          <h3 className=" col-5 colorSubtitle">Ganancias: {formateador.format(calcularGanancias())}</h3>
          <div className="col-4 d-flex justify-content-between">
            <button className="btn btn-primary agregar" onClick={()=>setVerAggIngresos(true)}>
              Agragar ingreso
            </button>
            <button className="btn btn-primary agregar" onClick={()=>setVerAggSalidas(true)}>
              Agragar Salida
            </button>
          </div>
        </div>
        <br />
        <div>
          <div className="row encabezado">
            <div className="col-2 celda">Id</div>
            <div className="col-3 celda">Tipo de movimiento</div>
            <div className="col-3 celda">Nombre</div>
            <div className="col-2 celda">Costo</div>
            <div className="col-2 celda">Fecha</div>
          </div>
          {transacciones.map((movimiento, index) => (
            <FilaMovimientos costo={formateador.format(movimiento.costo)} nombre={movimiento.Nombre} fecha={movimiento.fecha} tipo={movimiento.tipo} id={index} key={index}/>
      ))}
          
        </div>
        <br />
      </section>
    </>
  );
};

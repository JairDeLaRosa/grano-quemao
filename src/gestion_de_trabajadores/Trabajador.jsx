import React from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import foto from "./../assets/fotoPerfil.jpeg";

export const Trabajador = () => {
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
          

          <h1 className="title">Trabajador</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <div className="trabajador">
        <div className="fotoTrabajador">
            <img src={foto} alt="fotoperfil" className="fotoTrabajador-img"/>
          </div>
          <div className="infoTrabajador">
            <h2>Jair De La Rosa</h2>
            <h4>Trabajo: Area administrativa, asesor de ventas</h4>
            <span>Fecha de contratación: 17/08/2023</span>
            <br />
            <span>Salario mensual:  $ 300.000,00</span>
            <br />
            <span>Edad: 24 años</span>
            <br />
            <h4>Eps: Mutual ser</h4>
            <span>Afiliación: 09/07/2010</span>
            <br />
            <span>Costo: $ 100.000,00</span>
          </div>
        </div>
        
      </section>
    </>
  );
};

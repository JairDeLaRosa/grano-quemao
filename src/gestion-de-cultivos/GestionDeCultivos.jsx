import React from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";


export const GestionDeCultivos = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1);
      };
  return (
    <>
      <Nav />
      <Aside />
      <section>
        <div className="back">
          <h1 className="title">Gestion de cultivos</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        </section>
    </>
  );
};

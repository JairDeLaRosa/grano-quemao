import React, { useState } from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { RegistroMantenimiento } from "./RegistroMantenimiento";
import { ListaMantenimiento } from "./ListaMantenimiento";
import { mantenimientos } from "./objetos";
import { InformeMantenimiento } from "./InformeMantenimiento";

export const GestionDeMantenimiento = () => {
  const [actividades, setActividades] = useState(mantenimientos.mantenimiento);
  const [registrrMantenimiento, setRegistrarMantenimiento] = useState(false);

  const agregarMantenimiento = (nuevaActividad) => {
    setActividades([...actividades, nuevaActividad]);
  };
  const navigate = useNavigate();
  const back = () => {
    if (registrrMantenimiento) {
      setRegistrarMantenimiento(false);
    } else {
      navigate(-1);
    }
  };
  return (
    <>
      <Nav />
      <Aside />
      <section>
        <div className="back">
          <h1 className="title">Gestion de mantenimiento</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <br />
        <div>
          {registrrMantenimiento ? (
            <RegistroMantenimiento
              agregarMantenimiento={agregarMantenimiento}
              RegistrarMantenimiento={setRegistrarMantenimiento}
            />
          ) : (
            <>
              <button
                className="btn btn-primary registerM"
                onClick={() => setRegistrarMantenimiento(true)}
              >
                Registrar mantenimiento
              </button>
              <ListaMantenimiento actividades={actividades} />
              <InformeMantenimiento actividades={actividades} />
            </>
          )}
        </div>
      </section>
    </>
  );
};

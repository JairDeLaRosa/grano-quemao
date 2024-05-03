import React from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const ControlDeCalidad = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const handleSelect = ({ target }) => {
    console.log(target.value);
  };
  return (
    <>
      <Nav />
      <Aside />
      <section>
        <div className="back">
          <h1 className="title">Control de calidad del cafe</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
        <div className="row">
          <h3 className="col-2 colorSubtitle">Registros</h3>
          <div className="col-8">
            <select
              onChange={handleSelect}
              className="form-select select"
              aria-label="Default select example"
            >
              <option value="Cultivo de cafe">Registro 1</option>
              <option value="Cultivo de plantas">Registro 2</option>
            </select>
          </div>

          <button className="btn btn-primary col-2">Agragar Registro</button>
        </div>
      </section>
    </>
  );
};

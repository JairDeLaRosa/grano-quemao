import React from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";

export const AgregarIngreso = ({ back, agregarMovi}) => {
    let ob={}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitI = (data) => {
    const hoy = new Date();
    const formatoISO = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}-${String(hoy.getDate()).padStart(2, '0')}`;
    const objeto = { ...data, tipo: "ingreso",  fecha: formatoISO};
    console.log(objeto)
    agregarMovi(objeto)
    back()
  };
  return (
    <div className="editar">
      <div className="containerForm">
        <form onSubmit={handleSubmit(onSubmitI)} className="row g-3">
          <div className="back">
            <h1>Agregar ingreso</h1>
            <button className="buttonBack" onClick={back}>
              <IoIosArrowRoundBack size={40} color="white" />
            </button>
          </div>

          <div class="col-md-5">
            <label for="inputEmail4" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              {...register("Nombre", { required: true })}
            />
          </div>

          <div class="col-md-5">
            <label for="inputPassword4" class="form-label">
              Costo
            </label>
            <input
              type="number"
              class="form-control"
              {...register("costo", { required: true })}
            />
          </div>

          <div class="col-2">
            <button type="submit" class="btn btn-secondary sendEdit">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

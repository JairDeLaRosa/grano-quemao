import React from "react";
import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import { Fila } from "./Fila";
import { IoIosArrowRoundBack, IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Edit } from "./Edit";
import { Agregar } from "./Agregar";

export const ControlDeInventario = () => {
  const [tipeEdit,setTipeEdit]=useState("insumos")
  const [tipeAgg,setTipeAgg]=useState("insumos")
  const [visible, setVisible] = useState("alert alert-primary false");
  const [visibleEdit, setVisibleEdit] = useState("alert alert-primary false");
  const [visibleAgg, setVisibleAgg] = useState("alert alert-primary false");

  const [visibleTable1, setVisibleTable1] = useState(
    "container text-center top-table true"
  );
  const [visibleTable2, setVisibleTable2] = useState(
    "container text-center top-table false"
  );
  const [visibleTable3, setVisibleTable3] = useState(
    "container text-center top-table false"
  );
  const [editar, setEditar]=useState(false)
  const [agregar, setAgregar]=useState(false)

  const handleSelect = ({ target }) => {
    setTipeAgg(target.value)
    if (target.value === "insumos") { 
      setVisibleTable1("container text-center top-table true");
      setVisibleTable2("container text-center top-table false");
      setVisibleTable3("container text-center top-table false");
    } else if (target.value === "maquinaria") {
      setVisibleTable1("container text-center top-table false");
      setVisibleTable2("container text-center top-table true");
      setVisibleTable3("container text-center top-table false");
    } else if (target.value === "otra") {
      setVisibleTable1("container text-center top-table false");
      setVisibleTable2("container text-center top-table false");
      setVisibleTable3("container text-center top-table true");
    }
  };
  const alert = () => {
    setVisible("alert alert-primary true");
    setTimeout(() => {
      setVisible("alert alert-primary false");
    }, 3000);
  };
  const alertEditar = () => {
    setVisibleEdit("alert alert-primary true");
    setTimeout(() => {
      setVisibleEdit("alert alert-primary false");
    }, 3000);
  };
  const alertAgg = () => {
    setVisibleAgg("alert alert-primary true");
    setTimeout(() => {
      setVisibleAgg("alert alert-primary false");
    }, 3000);
  };
  const navigate = useNavigate();
  const agg=()=>{
    setAgregar(true)

  }
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <Nav />
      <Aside />
      {console.log(tipeEdit)}
      {editar ? <Edit edit={setEditar} tipe={tipeEdit} alertEdit={alertEditar}/> : null}
      {agregar ? <Agregar agg={setAgregar} tipe={tipeAgg} alertAgg={alertAgg}/> : null}

      <section>
        <div className="back">
          <h1 className="title">Sistema de inventario</h1>
          <button className="btn " onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>

        <div className="back">
          <select
            onChange={handleSelect}
            class="form-select select-tipo-insumo"
            aria-label="Default select example"
          >
            <option value="insumos">Insumos</option>
            <option value="maquinaria">Maquinarias</option>
            <option value="otra">Otros</option>
          </select>

          <button className="btn btn-primary" onClick={agg}>
            <IoMdAdd size={25} /> Agregar
          </button>
        </div>

        <div class={visibleTable1}>
          <div class="row encabezado">
            <div class="col-2 celda">Id</div>
            <div class="col-2 celda">Tipo</div>
            <div class="col-2 celda">Nombre</div>
            <div class="col-2 celda">Cantidad</div>
            <div class="col-2 celda">Costos</div>
            <div class="col-2 celda">Acciones</div>
          </div>

          <Fila alert={alert} edit={setEditar} setEdit={setTipeEdit} tipeEdit={"insumos"}/>
        </div>
        <div class={visibleTable2}>
          <div class="row encabezado">
            <div class="col-2 celda">Id2</div>
            <div class="col-2 celda">Tipo</div>
            <div class="col-2 celda">Nombre</div>
            <div class="col-2 celda">Cantidad</div>
            <div class="col-2 celda">Costos</div>
            <div class="col-2 celda">Acciones</div>
          </div>

          <Fila alert={alert} edit={setEditar} setEdit={setTipeEdit} tipeEdit={"maquinaria"}/>
        </div>
        <div class={visibleTable3}>
          <div class="row encabezado">
            <div class="col-2 celda">Id3</div>
            <div class="col-2 celda">Tipo</div>
            <div class="col-2 celda">Nombre</div>
            <div class="col-2 celda">Cantidad</div>
            <div class="col-2 celda">Costos</div>
            <div class="col-2 celda">Acciones</div>
          </div>

          <Fila alert={alert} edit={setEditar} setEdit={setTipeEdit} tipeEdit={"otro"}/>
        </div>
        <div class={visible} role="alert">
          Elemento eliminado
        </div>
        <div class={visibleEdit} role="alert">
          Elemento editado
        </div>
        <div class={visibleAgg} role="alert">
          Elemento agregado
        </div>

      </section>
    </>
  );
};

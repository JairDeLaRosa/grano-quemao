import React, { useEffect, useState } from "react";
import { EditInsumos } from "./EditInsumos";
import { EditarMaquinaria } from "./EditarMaquinaria";
import { EditOtros } from "./EditOtros";

export const Edit = ({ tipe, edit,alertEdit }) => {

    const onSubmit = (data) => {
    console.log(data);
    alertEdit()
    edit(false);
  };
  return (
    <div className="editar">
      <div className="containerForm">
        {(tipe==="insumos")?<EditInsumos onSubmit={onSubmit}/>:null}
        {(tipe==="maquinaria")?<EditarMaquinaria onSubmit={onSubmit}/>:null}
        {(tipe==="otro")?<EditOtros onSubmit={onSubmit}/>:null}
      </div>
      
    </div>
  );
};

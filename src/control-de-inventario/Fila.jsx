import React from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
export const Fila = ({alert, edit, tipeEdit, setEdit}) => {
  const delet=()=>{
    alert()
  }
  const editar=()=>{
    setEdit(tipeEdit)
    edit(true)
    
  }
  
  return (
    <div class="row celdas">
      <div class="col-1 celda"></div>
      <div class="col-2 celda"></div>
      <div class="col-3 celda"></div>
      <div class="col-2 celda"></div>
      <div class="col-2 celda"></div>
      <div class="col-2 celda">
        <button className="btn btn-primary delete" onClick={editar}>
          <CiEdit />
        </button>
        <button className="btn btn-danger" onClick={delet}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

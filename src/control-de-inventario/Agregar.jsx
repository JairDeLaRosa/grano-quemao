import React from 'react'
import { AgregarInsumos } from './AgregarInsumos';
import { AgregarMaquinaria } from './AgregarMaquinaria';
import { AgregarOtros } from './AgregarOtros';

export const Agregar = ({ tipe, agg ,alertAgg }) => {
    const onSubmit = (data) => {
        console.log(data);
        alertAgg()
        agg(false);
      };
      return (
        <div className="editar">
          <div className="containerForm">
            {(tipe==="insumos")?<AgregarInsumos onSubmit={onSubmit}/>:null}
            {(tipe==="maquinaria")?<AgregarMaquinaria onSubmit={onSubmit}/>:null}
            {(tipe==="otra")?<AgregarOtros onSubmit={onSubmit}/>:null}
          </div>
          
        </div>
      );
}

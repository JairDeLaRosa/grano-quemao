import { AgregarInsumos } from './AgregarInsumos';
import { AgregarMaquinaria } from './AgregarMaquinaria';
import { AgregarOtros } from './AgregarOtros';

export const Agregar = ({ tipe, agg ,alertAgg }) => {
  const back=()=>{
    agg(false)
  }
    const onSubmit = (data) => {
        console.log(data);
        alertAgg()
        agg(false);
      };
      return (
        <div className="editar">
          
          <div className="containerForm">
          
            {(tipe==="insumos")?<AgregarInsumos onSubmit={onSubmit} back={back}/>:null}
            {(tipe==="maquinaria")?<AgregarMaquinaria onSubmit={onSubmit} back={back}/>:null}
            {(tipe==="otra")?<AgregarOtros onSubmit={onSubmit} back={back}/>:null}
            
          </div>
        </div>
      );
}

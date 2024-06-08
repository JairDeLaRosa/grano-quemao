import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io';

import { useForm } from 'react-hook-form';
export const AgregarInsumos = ({onSubmit, back}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitI=(data)=>{
    onSubmit(data)
  }
return (
<form onSubmit={handleSubmit(onSubmitI)} className='row g-3'>
  <div className='back'>
  <h1>Agregar biocida</h1>
      <button className='buttonBack' onClick={back} >
            <IoIosArrowRoundBack size={40} color='white'/>
          </button>
  </div>
  <div class="col-md-5">
        <label for="inputPassword4" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          class="form-control"
          {...register("nombre", { required: true })}
        />
      </div>
      <div class="col-md-5">
        <label for="inputPassword4" class="form-label">
          Descripción
        </label>
        <textarea
          type="text"
          class="form-control"
          {...register("descripcion", { required: true })}
        />
      </div>
      <div class="col-md-5">
        <label for="inputEmail4" class="form-label">
          Cantidad
        </label>
        <input
          type="number"
          class="form-control"
          {...register("cantidad", { required: true })}
          step="1" min="0"
        />
        
      </div>
      <div class="col-md-5">
        <label for="inputEmail4" class="form-label">
          Costo
        </label>
        <input
          type="number"
          class="form-control"
          {...register("costo", { required: true })}
          step="0.01" min="0"
        />
        
      </div>
      
      

      <div class="col-2">
        <button type="submit" class="btn btn-secondary sendEdit">
          Agregar
        </button>
      </div>
    </form>
)
}

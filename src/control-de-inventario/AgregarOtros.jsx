import React from 'react'
import { useForm } from 'react-hook-form';
export const AgregarOtros = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitO=(data)=>{
    onSubmit(data)
  }
return (
<form onSubmit={handleSubmit(onSubmitO)} className='row g-3'>
      <h1>Agregar Otros</h1>
      <div class="col-md-5">
        <label for="inputEmail4" class="form-label">
          Cantidad
        </label>
        <input
          type="number"
          class="form-control"
          {...register("cantidad", { required: true })}
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
)
}

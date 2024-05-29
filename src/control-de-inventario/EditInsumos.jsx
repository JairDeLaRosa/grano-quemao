import React from 'react'
import { useForm } from 'react-hook-form';
import { IoIosArrowRoundBack } from 'react-icons/io';

export const EditInsumos = ({onSubmit, back}) => {
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
  <h1>Editar insumo</h1>
      <button className='buttonBack' onClick={back} >
            <IoIosArrowRoundBack size={40} color='white'/>
          </button>
  </div>
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
              Editar
            </button>
          </div>
        </form>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Card = ({title, optionLogo, ruta}) => {
  const navigate= useNavigate()
  const customNavigate = () =>{
    navigate(ruta)
  }
  return (
    <div class="card btn btn-Ligth" onClick={customNavigate}>
              

                <div class="card-body">
                <h5 class="card-title">{title}</h5>
                </div>
                <img src={optionLogo} class="card-img-top" alt="Inventario" />
              
              
            </div>
  )
}

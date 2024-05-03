import React from 'react'

export const FilaMovimientos = ({id,tipo, nombre, costo, fecha}) => {
  return (
    <div class="row celdas">
    <div class="col-2 celda">{id}</div>
    <div class="col-3 celda">{tipo}</div>
    <div class="col-3 celda">{nombre}</div>
    <div class="col-2 celda">{costo}</div>
    <div class="col-2 celda">{fecha}</div>
  </div>
  )
}

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import { ControlDeInventario } from '../control-de-inventario/ControlDeInventario'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='sistema_cafetero' element={<App/>}/>
        <Route path='sistema_cafetero/control_inventario' element={<ControlDeInventario/>}/>

        <Route path='/' element={<Navigate to={"/sistema_cafetero"}/>}/>
    </Routes>
    </>
  )
}

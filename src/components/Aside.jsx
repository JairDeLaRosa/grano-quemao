import React from 'react'
import fotoPerfil from "../assets/fotoPerfil.jpeg";


export const Aside = () => {
  return (
    <aside>
        <img src={fotoPerfil} alt="fotoPerfil" className="fotoPerfil top" />
        <h3 className="info top">Administrador</h3>
        <h3 className="info">Jair De La Rosa</h3>
      </aside>
  )
}



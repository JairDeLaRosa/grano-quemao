import React from 'react'
import logo from "../assets/logo.jpeg";

export const Nav = () => {
  return (
    <nav > 
      <img src={logo} alt="logo" className="logo" />
      <button className="btn grano-quemado">Grano Quemado</button>
      <button className="btn salir">Salir</button>
    </nav>
  )
}

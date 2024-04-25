import React from 'react'
import logo from "../assets/logo.jpeg";

export const Nav = () => {
  return (
    <nav > 
        <img src={logo} alt="logo" className="logo" />
        <button className="grano-quemado">Grano Quemado</button>
        <button className=" salir">Salir</button>
      </nav>
  )
}

import React from 'react'
import logo from "../assets/logo.jpeg";
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const navigate=useNavigate()
  return (
    <nav > 
        <img src={logo} alt="logo" className="logo" />
        <button className="btn grano-quemado">Grano Quemado</button>
        <button className="btn salir" onClick={()=>navigate("/")}>Salir</button>
      </nav>
  )
}

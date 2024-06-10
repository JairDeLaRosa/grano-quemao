import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import WeatherPage from './WeatherPage';
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

//import React, { useState } from 'react';
//import CultivoList from './CultivoList';
//import CultivoDetail from './CultivoDetail';

export const MonitoreoDeClima= () => {
  const navigate=useNavigate()
  const back=()=>{
    navigate(-1)
  }
  return (
  <>
    <Nav/>
    <Aside />
    <section><div className="back">
    <h1 className="title">Página de Monitoreo de Clima</h1>
          <button className="buttonBackInventario" onClick={back}>
            <IoIosArrowRoundBack size={30} />
          </button>
        </div>
    <WeatherPage/></section>
    
  </>
  );
};


export default MonitoreoDeClima;
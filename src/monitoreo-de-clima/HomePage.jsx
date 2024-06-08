import { Nav } from "../components/Nav";
import { Aside } from "../components/Aside";
import WeatherPage from './WeatherPage';

//import React, { useState } from 'react';
//import CultivoList from './CultivoList';
//import CultivoDetail from './CultivoDetail';

export const MonitoreoDeClima= () => {
  return (
  <>
    <Nav/>
    <Aside />
    <WeatherPage/>
  </>
  );
};


export default MonitoreoDeClima;
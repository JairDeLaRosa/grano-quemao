import { NavBar } from "./components/Nav";
import Aside from '../components/Aside';
//import React, { useState } from 'react';
//import CultivoList from './CultivoList';
//import CultivoDetail from './CultivoDetail';

export const GestionDeCultivo = () => {
  const [cultivos, setCultivos] = useState([
    { id: 1, nombre: 'Maíz', descripcion: 'Cereal utilizado en alimentación humana y animal.' },
    { id: 2, nombre: 'Trigo', descripcion: 'Cereal de gran importancia en la alimentación mundial.' },
    // Agrega más cultivos según sea necesario
  ]);
  const [selectedCultivo, setSelectedCultivo] = useState(null);

  const handleCultivoSelect = (cultivo) => {
    setSelectedCultivo(cultivo);
  };

  return (
    <>
    <NavBar />
    <Aside />
    </>
  );
};

export default CultivoPage;

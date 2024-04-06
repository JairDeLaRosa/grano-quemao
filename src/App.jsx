import { useState } from "react";
import logo from "./assets/logo.jpeg";
import fotoPerfil from "./assets/fotoPerfil.jpeg";
import { Card } from "./components/Card";
import logoListarProductos from "./assets/listaProductos.png"
import logoRegistrarProductos from "./assets/inventario.png"
import logoSalidas from "./assets/logoSalidas.png"
import logoMovimientos from "./assets/movimientos.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav > 
        <img src={logo} alt="logo" className="logo" />
        <button className="btn grano-quemado">Grano Quemado</button>
        <button className="btn salir">Salir</button>
      </nav>

      <aside>
        <img src={fotoPerfil} alt="fotoPerfil" className="fotoPerfil top" />
        <h3 className="info top">Administrador</h3>
        <h3 className="info">Jair De La Rosa</h3>
      </aside>
      <section>
        <h1 className="title">Sistema Cafetero</h1>
        <br />
        <div className="row">
          <div className="col-3">
            <Card title={"Control de inventario"} optionLogo={logoRegistrarProductos} ruta={"/sistema_cafetero/control_inventario"}/>
            <br />
            <Card title={"Monitoreo de clima y temperatura"} optionLogo={logoListarProductos}/>
            <br />
          </div>
          <div className="col-3">
          <Card title={"Gestión de cultivos"} optionLogo={logoListarProductos}/>
            <br />
            <Card title={"Registro de trabajadore"} optionLogo={logoMovimientos}/>
            <br />
          </div>
          <div className="col-3">
          <Card title={"Control de calidad"} optionLogo={logoSalidas}/>
            <br />
            <Card title={"Gestión de mantenimiento"} optionLogo={logoSalidas}/>
            <br />
          </div>
          <div className="col-3">
          <Card title={"Control de costos y finanzas"} optionLogo={logoMovimientos}/>
            <br />
            <Card title={"Sistema de venta"} optionLogo={logoRegistrarProductos}/>
            <br />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

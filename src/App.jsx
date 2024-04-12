import { Card } from "./components/Card";
import logoListarProductos from "./assets/listaProductos.png";
import logoRegistrarProductos from "./assets/inventario.png";
import logoSalidas from "./assets/logoSalidas.png";
import logoMovimientos from "./assets/movimientos.png";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";

function App() {


  return (
    <>
      <Nav />

      <Aside />
      <section>
        <h1 className="title">Sistema Cafetero</h1>
        <br />
        <div className="row">
          <div className="col-3">
            <Card
              title={"Control de inventario"}
              optionLogo={logoRegistrarProductos}
              ruta={"/sistema_cafetero/control_inventario"}
            />
            <br />
            <Card
              title={"Monitoreo de clima y temperatura"}
              optionLogo={logoListarProductos}
            />
            <br />
          </div>
          <div className="col-3">
            <Card
              title={"Gestión de cultivos"}
              optionLogo={logoListarProductos}
            />
            <br />
            <Card
              title={"Registro de trabajadores"}
              optionLogo={logoMovimientos}
            />
            <br />
          </div>
          <div className="col-3">
            <Card title={"Control de calidad"} optionLogo={logoSalidas} />
            <br />
            <Card title={"Gestión de mantenimiento"} optionLogo={logoSalidas} />
            <br />
          </div>
          <div className="col-3">
            <Card
              title={"Control de costos y finanzas"}
              optionLogo={logoMovimientos}
            />
            <br />
            <Card
              title={"Sistema de venta"}
              optionLogo={logoRegistrarProductos}
            />
            <br />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

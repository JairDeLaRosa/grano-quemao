import { Card } from "./components/Card";
import logoListarProductos from "./assets/listaProductos.png";
import logoRegistrarProductos from "./assets/inventario.png";
import logoSalidas from "./assets/logoSalidas.png";
import logoMovimientos from "./assets/movimientos.png";
import logoGestionCultivo from "./assets/gestionCultivo.png";
import { Nav } from "./components/Nav";
import { Aside } from "./components/Aside";
import { ADMIN_INVENTARY_CONTROL } from "./router/RoutesTypes";
import { ADMIN_CROP_MANAGEMENT } from "./router/RoutesTypes";

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
              ruta={ADMIN_INVENTARY_CONTROL.INVENTARY_CONTROL}
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
              title={"Gestion de cultivos"}
             optionLogo={logoGestionCultivo}
             ruta={ADMIN_CROP_MANAGEMENT.CROP_MANAGEMENT}
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

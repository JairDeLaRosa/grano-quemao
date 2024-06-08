import { Card } from "./components/Card";
import logoListarProductos from "./assets/listaProductos.png";
import logoRegistrarProductos from "./assets/inventario.png";
import logoSalidas from "./assets/logoSalidas.png";
import logoMovimientos from "./assets/movimientos.png";
import logoControlDeCalidad from "./assets/ControlDeCalidad.png";
import { Nav } from "./components/Nav"; 
import { Aside } from "./components/Aside";

import { ADMIN_INVENTARY_CONTROL, ADMIN_GESTION_CULTIVOS, ADMIN_CONTROL_CALIDAD, ADMIN_CONTROL_COSTOS_FINANZAS, ADMIN_GESTION_MANTENIMIENTO, ADMIN_REGISTRO_TRABAJADORES,WEATHER_MONITORING_MANAGER, QA } from "./router/RoutesTypes";

function App() {


  return (
    <>
      <Nav />

      <Aside />
      <section>
        <h1 className="title">Sistema Cafetero</h1>
        <br />
        <div className="cards">
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
              ruta={WEATHER_MONITORING_MANAGER.WEATHER_MONITORING}
            />
            <br />
          </div>
          <div className="col-3">
            <Card
              title={"Gestión de cultivos"}
              optionLogo={logoListarProductos}
              ruta={ADMIN_GESTION_CULTIVOS.GESTION_CULTIVOS}
              />
            <br />
            <Card
              title={"Registro de trabajadores"}
              optionLogo={logoMovimientos}
              ruta={ADMIN_REGISTRO_TRABAJADORES.REGISTRO_TRABAJADORES}
            />
            <br />
          </div>
          <div className="col-3">
            <Card title={"Control de calidad"}  
              optionLogo={logoControlDeCalidad}
              ruta={QA.Q_A}
            />
            <br />
            <Card title={"Gestión de mantenimiento"} optionLogo={logoSalidas} ruta={ADMIN_GESTION_MANTENIMIENTO.GESTION_MANTENIMIENTO}/>
            <br />
          </div>
          <div className="col-3">
            <Card
              title={"Control de costos y finanzas"}
              optionLogo={logoMovimientos}
              ruta={ADMIN_CONTROL_COSTOS_FINANZAS.CONTROL_COSTOS_FINANZAS}
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

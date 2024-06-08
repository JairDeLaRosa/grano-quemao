import { Routes, Route } from "react-router-dom";
import App from "../App";
import { ControlDeInventario } from "../control-de-inventario/ControlDeInventario";

import { BASIC_MODULES_ROUTES, ADMIN_INVENTARY_CONTROL, ADMIN_CONTROL_CALIDAD, ADMIN_CONTROL_COSTOS_FINANZAS, ADMIN_GESTION_MANTENIMIENTO, ADMIN_REGISTRO_TRABAJADORES,WEATHER_MONITORING_MANAGER, QA } from "./RoutesTypes";
import { ControlDeCalidad } from "../control-de-calidad/ControlDeCalidad";
import { ControlCostosFinanzas } from "../control-costos-finanzas/ControlCostosFinanzas";
import { GestionDeMantenimiento } from "../gestion-de-mantenimiento/GestionDeMantenimiento";
import { RegistroDeTrabajadores } from "../gestion_de_trabajadores/RegistroDeTrabajadores";
import { Trabajador } from "../gestion_de_trabajadores/Trabajador";
import { RegistrarTrabajadores } from "../gestion_de_trabajadores/RegistrarTrabajadores";
import { MonitoreoDeClima } from "../monitoreo-de-clima/HomePage";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={BASIC_MODULES_ROUTES[404]} element={ <App />} />
        <Route path={BASIC_MODULES_ROUTES.HOME} element={<App />} />
        <Route
          path={ADMIN_INVENTARY_CONTROL.INVENTARY_CONTROL}
          element={<ControlDeInventario />}
        />
        <Route
          path={WEATHER_MONITORING_MANAGER.WEATHER_MONITORING}
          element={<MonitoreoDeClima />}
        />
        <Route
          path={QA.Q_A}
          element={<ControlDeCalidad/>}
        />
        <Route
          path={ADMIN_CONTROL_CALIDAD.CONTROL_CALIDAD}
          element={<ControlDeCalidad />}
        />
        <Route
          path={ADMIN_CONTROL_COSTOS_FINANZAS.CONTROL_COSTOS_FINANZAS}
          element={<ControlCostosFinanzas />}
        />
        <Route
          path={ADMIN_GESTION_MANTENIMIENTO.GESTION_MANTENIMIENTO}
          element={<GestionDeMantenimiento />}
        />
        <Route
          path={ADMIN_REGISTRO_TRABAJADORES.REGISTRO_TRABAJADORES}
          element={<RegistroDeTrabajadores />}
        />
        <Route
          path={ADMIN_REGISTRO_TRABAJADORES.TRABAJADORES}
          element={<Trabajador />}
        />
        <Route
          path={ADMIN_REGISTRO_TRABAJADORES.REGISTRAR_TRABAJADORES}
          element={<RegistrarTrabajadores/>}
        />
      </Routes>
    </>
  );
};

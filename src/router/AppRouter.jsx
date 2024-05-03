import { Routes, Route } from "react-router-dom";
import App from "../App";
import { ControlDeInventario } from "../control-de-inventario/ControlDeInventario";
import { BASIC_MODULES_ROUTES, ADMIN_INVENTARY_CONTROL, ADMIN_GESTION_CULTIVOS, ADMIN_CONTROL_CALIDAD, ADMIN_CONTROL_COSTOS_FINANZAS, ADMIN_GESTION_MANTENIMIENTO } from "./RoutesTypes";
import { GestionDeCultivos } from "../gestion-de-cultivos/GestionDeCultivos";
import { ControlDeCalidad } from "../control-de-calidad/ControlDeCalidad";
import { ControlCostosFinanzas } from "../control-costos-finanzas/ControlCostosFinanzas";
import { GestionDeMantenimiento } from "../gestion-de-mantenimiento/GestionDeMantenimiento";
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
          path={ADMIN_GESTION_CULTIVOS.GESTION_CULTIVOS}
          element={<GestionDeCultivos />}
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
      </Routes>
    </>
  );
};

import { Routes, Route } from "react-router-dom";
import App from "../App";
import { ControlDeInventario } from "../control-de-inventario/ControlDeInventario";
import { MonitoreoDeClima } from "../monitoreo-de-clima/HomePage";
import { ControlDeCalidad} from "../control-de-calidad/HomePage";
import { BASIC_MODULES_ROUTES, ADMIN_INVENTARY_CONTROL, WEATHER_MONITORING_MANAGER, QA} from "./RoutesTypes";
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
      </Routes>
    </>
  );
};

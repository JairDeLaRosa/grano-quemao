import { Routes, Route } from "react-router-dom";
import App from "../App";
import { ControlDeInventario } from "../control-de-inventario/ControlDeInventario";
import { BASIC_MODULES_ROUTES, ADMIN_INVENTARY_CONTROL } from "./RoutesTypes";
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
      </Routes>
    </>
  );
};

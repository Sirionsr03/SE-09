import { useRoutes, RouteObject } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

function ConfigRoutes() {
  // Directly include the routes without any login checks
  const routes: RouteObject[] = [AdminRoutes()];

  return useRoutes(routes);
}

export default ConfigRoutes;
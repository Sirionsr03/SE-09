import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../third-party/Loadable";

import FullLayout from "../components/FullLayout/FullLayout.tsx";

const ManageLecturer = Loadable(lazy(() => import("../pages/ManageLecturer/ManageLecturer")));
//const LecturerList = Loadable(lazy(() => import("../pages/ManageLecturer/LecturerList/LecturerList")));

const AdminRoutes = (): RouteObject => {
  return {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "managelecturer",
        element: <ManageLecturer />,
      },
    //   {
    //     path: "managelecturer/computer-engineering",
    //     element: <LecturerList />,
    //   },
    ],
  };
};


export default AdminRoutes;

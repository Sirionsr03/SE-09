// import { lazy } from "react";
import { RouteObject } from "react-router-dom";
// import Loadable from "../third-party/Loadable";

import FullLayout from "../components/FullLayout/FullLayout.tsx";

// const ManageLecturer = Loadable(lazy(() => import("../pages/ManageLecturer/ManageLecturer")));
// const LecturerList = Loadable(lazy(() => import("../pages/ManageLecturer/LecturerList/LecturerList")));
// const CreateLecturer = Loadable(lazy(() => import("../pages/ManageLecturer/LecturerList/Create/index")));

const AdminRoutes = (): RouteObject => {
  return {
    path: "/",
    element: <FullLayout />,
    children: [

    //   {
    //     path: "managelecturer",
    //     element: <ManageLecturer />,
    //   },
    //   {
    //     path: "managelecturer/major/:id",
    //     element: <LecturerList />,
    //   },
    //   {
    //     path: "/managelecturer/create",
    //     element: <CreateLecturer />,
    //   },
    
    ],
  };
};


export default AdminRoutes;
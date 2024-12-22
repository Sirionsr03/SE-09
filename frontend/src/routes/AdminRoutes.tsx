// import { lazy } from "react";
import { RouteObject } from "react-router-dom";
// import Loadable from "../third-party/Loadable";

import FullLayout from "../components/FullLayout/FullLayout.tsx";
import { lazy } from "react";
import Loadable from "../third-party/Loadable.tsx";

// const ManageLecturer = Loadable(lazy(() => import("../pages/ManageLecturer/ManageLecturer")));
// const LecturerList = Loadable(lazy(() => import("../pages/ManageLecturer/LecturerList/LecturerList")));
// const CreateLecturer = Loadable(lazy(() => import("../pages/ManageLecturer/LecturerList/Create/index")));

const Request1 = Loadable(lazy(() => import("../pages/Request/Request1/Request1.tsx")));

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

      {
        path: "/request1",
        element: <Request1 />,
      },

    ],
  };
};


export default AdminRoutes;
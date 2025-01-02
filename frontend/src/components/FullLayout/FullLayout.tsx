import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../App.css";
import { Breadcrumb, Layout } from "antd";

import NavbarHome from "../Navbar";
import Request1 from "../../pages/Request/Request1/Request1";
import Request2 from "../../pages/Request/Request2/Request2";
import HomeRequest from "../../home/HomeRequest/HomeRequest";


// import HomeRequest from "../../pages/home/HomeRequest/HomeRequest";
// import ManageLecturer from "../../pages/ManageLecturer/ManageLecturer";
// import LecturerList from "../../pages/ManageLecturer/LecturerList/LecturerList";
// import CreateLecturer from "../../pages/ManageLecturer/LecturerList/Create";

const { Content } = Layout;

const FullLayout: React.FC = () => {
  // const [messageApi, contextHolder] = message.useMessage();

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <>
      <NavbarHome />
      <Layout style={{ minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
        <Layout style={{ backgroundColor: "#434343", minHeight: "100vh" }}>
          <Content style={{ margin: "0 0px", marginTop: "0px", display: "flex", justifyContent: "center" }}>
            <Breadcrumb style={{ margin: "0px 0" }} />
            <div
              // style={{
              //   padding: 24,
              //   minHeight: "93%",
              //   maxHeight: "93%",
              //   background: "#f5f5f5",
              //   borderRadius: "8px",
              //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
              // }}
            >
              <Routes>

                {/* <Route path="/homerequest" element={<HomeRequest />}/>
                <Route path="/managelecturer" element={<ManageLecturer />} />
                <Route path="/managelecturer/major/:id" element={<LecturerList />} /> */}
                <Route path="/homeRequest" element={<HomeRequest />}/>
                <Route path="/request1" element={<Request1 />}/>
                <Route path="/request2" element={<Request2 />}/>

              </Routes>

            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default FullLayout;
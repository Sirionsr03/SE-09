import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../App.css";
import { Breadcrumb, Layout } from "antd";

import NavbarHome from "../Navbar";

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
          <Content style={{ margin: "0 30px", marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <Breadcrumb style={{ margin: "16px 0" }} />
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
                <Route path="/managelecturer/major/:id" element={<LecturerList />} />
                <Route path="/managelecturer/create" element={<CreateLecturer />}/> */}

              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default FullLayout;
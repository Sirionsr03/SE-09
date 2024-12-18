import React from 'react';
import { Layout, theme, Dropdown, MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";

import "./ManageLecturer.css"

const { Header, Content } = Layout;

const ManageLecturer: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate here

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Define items with the onClick handlers
    const items: MenuProps["items"] = [
        {
            label: "คณะวิศวกรรมคอมพิวเตอร์",
            key: "0",
            onClick: () => navigate("/managelecturer/computer-engineering"),  // Use navigate to route
        },
        {
            label: "คณะวิศวกรรมโยธา",
            key: "1",
            onClick: () => navigate("/managelecturer/computer-engineering"),  // Update path as needed
        },
    ];

    return (
        <>
            <Header style={{ backgroundColor: "#03194A", opacity: "0.91", borderRadius: "0px", width: "1440px", marginLeft: "48px" }}>
                <Content style={{ padding: '0 40px' }}>
                    <div
                        style={{
                            minHeight: 80,
                            padding: 20,
                            borderRadius: borderRadiusLG,
                            marginTop: "95px",
                        }}
                    >
                        <div style={{ marginTop: "-20px", color: "#fff", marginLeft: "-40px" }}>
                            <h2>เลือกสำนักวิชาและหลักสูตร</h2>
                        </div>
                        <div
                            style={{
                                marginTop: "-32px",
                                width: "40px",
                                display: "flex"
                            }}
                        >
                            <i className="fa-solid fa-file-lines fa-flip-horizontal fa-2xl" style={{ color: "#fff", marginLeft: "-80px" }}></i>
                            <i className="fa-solid fa-circle-left fa-2xl" style={{ color: "#ffff", marginLeft: "1320px" }}></i>
                        </div>
                    </div>
                </Content>
            </Header>

            <Content style={{ padding: '0 40px', height: "490px", width: "1520px", marginLeft: "8px" }}>
                <div
                    style={{
                        background: colorBgContainer,
                        height: "514px",
                        padding: 20,
                        backgroundColor: "#DFDFE2",
                        marginTop: "0px",
                        marginBottom: "40px",
                    }}
                >
                    <div className='button-menu' style={{ marginTop: "-10px" }}>
                        <Dropdown menu={{ items }} trigger={["click"]} overlayClassName="custom-dropdown">
                            <button className="btn-donate"> <i className="fa-solid fa-play fa-xl" style={{ marginRight: "10px" }}></i>สำนักวิชาวิศวกรรมศาสตร์</button>
                        </Dropdown>
                    </div>
                </div>
            </Content>
        </>
    );
};

export default ManageLecturer;

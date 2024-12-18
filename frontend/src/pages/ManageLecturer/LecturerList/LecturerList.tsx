import React from 'react';
import { Layout, theme } from 'antd';


const { Header, Content } = Layout;

const LecturerList: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
                            <h2>เลือกสำนักวิชา และหลักสูตร</h2>
                        </div>
                        <div
                            style=
                            {{
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
                        
                    </div>
                </div>
            </Content>
        </>
    );
};

export default LecturerList;

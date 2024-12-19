import React from 'react';
import {  Layout, theme } from 'antd';

import "./HomeRequest.css"
import Test from '../../components/Test';


const { Header, Content  } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const HomeRequest: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
    <Test/>
        <Header style={{backgroundColor:"#03194A",opacity:"0.91", borderRadius:"0px",width:"1440px",marginLeft:"48px"}}>
            <Content style={{ padding: '0 40px' }}>
          <div
            style={{
              minHeight: 80,
              padding: 20,
              borderRadius: borderRadiusLG,
              marginTop:"95px",
            }}
          >   
            <div style={{marginTop:"-20px",color:"#fff",marginLeft:"-40px"}}>
              <h2>เลือกคำร้องที่ต้องการ</h2>
            </div>
            <div 
              style=
              {{  marginTop:"-32px",
                  width:"40px",
                  display:"flex"
              }}
            >
              <i className="fa-solid fa-file-lines fa-flip-horizontal fa-2xl" style={{color:"#fff",marginLeft:"-80px"}}></i>
              <i className="fa-solid fa-circle-left fa-2xl" style={{color:"#ffff",marginLeft:"1320px"}}></i>

            </div>
          </div>
            </Content>
        </Header>

        <Content style={{ padding: '0 40px',height:"490px" ,width:"1520px", marginLeft:"8px"}}>
          <div
            style={{
              background: colorBgContainer,
              height:"514px",
              padding: 20,
              backgroundColor: "#DFDFE2",
              marginTop:"0px",
              marginBottom:"40px",
            }}
          >
            <div className='button-menu' style={{marginTop:"-10px"}}>
              <button className="btn-donate"> <i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาระหว่างเรียน </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาระหว่างสอบ</button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอถอนรายวิชา ( ติด W ) </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาออกจากการเป็นนักศึกษา </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ </button>
              <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน </button>
              
            </div>
          </div>
        </Content>
    </>
  );
};

export default HomeRequest;






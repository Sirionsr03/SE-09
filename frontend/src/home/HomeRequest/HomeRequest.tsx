// import React from 'react';
// import {  Layout, theme } from 'antd';

// import "./HomeRequest.css"
// import { useNavigate } from 'react-router-dom';
// import { RequestInterface } from '../../interfaces/Request';
// import { CreateRequest } from '../../services/https';


// const { Header, Content  } = Layout;

// const HomeRequest: React.FC = () => {
//   const navigate = useNavigate(); 
  
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   const handleToRequest1 = async () => {

//     const values: RequestInterface = {
//       StudentID: 1, // Replace with dynamic data if needed
//       CourseID: null, // Replace with dynamic data if needed
//       RequestTypeID: 1, // Type of request
//       StatusRequestID: 2, // Default status
//       Note: "", // Any additional notes
//     };
//     console.log("API response:", values);

//     try {
//       const res = await CreateRequest(values);
  
//       if (res && res.status === 201) {
//         const createdRequestID = res.data.RequestID;
       
//         navigate('/request1', { state: { RequestID: createdRequestID } });
//       } else {
//         console.error("Request creation failed", res);
//         alert("ไม่สามารถสร้างคำร้องได้ กรุณาลองใหม่");
//       }
//     } catch (error) {
//       console.error("Error creating request:", error);
//       alert("เกิดข้อผิดพลาดในการส่งคำร้อง กรุณาลองใหม่");
//     }
    

//     navigate('/request1'); // Navigate to ApplyToSeller page
//     };


//   const handleToHome = () => {
//     navigate('/'); // Navigate to ApplyToSeller page
//     };

//   return (
//     <>
//         <Header style={{backgroundColor:"#03194A",opacity:"0.91", borderRadius:"0px",width:"1440px",marginLeft:"48px"}}>
//             <Content style={{ padding: '0 40px' }}>
//           <div
//             style={{
//               minHeight: 80,
//               padding: 20,
//               borderRadius: borderRadiusLG,
//               marginTop:"95px",
//             }}
//           >   
//             <div style={{marginTop:"-20px",color:"#fff",marginLeft:"-40px"}}>
//               <h2>เลือกคำร้องที่ต้องการ</h2>
//             </div>
//             <div 
//               style=
//               {{  marginTop:"-32px",
//                   width:"40px",
//                   display:"flex"
//               }}
//             >
//               <i className="fa-solid fa-file-lines fa-flip-horizontal fa-2xl" style={{color:"#fff",marginLeft:"-80px"}}></i>
//               <i onClick={handleToHome} className="fa-solid fa-circle-left fa-2xl icon-style"></i>


//             </div>
//           </div>
//             </Content>
//         </Header>

//         <Content style={{ padding: '0 40px',height:"490px" ,width:"1520px", marginLeft:"8px"}}>
//           <div
//             style={{
//               background: colorBgContainer,
//               height:"514px",
//               padding: 20,
//               backgroundColor: "#DFDFE2",
//               marginTop:"0px",
//               marginBottom:"40px",
//             }}
//           >
//             <div className='button-menu' style={{marginTop:"-10px"}}>
//               <button className="btn-donate" onClick={handleToRequest1}> <i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาระหว่างเรียน </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาระหว่างสอบ</button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอถอนรายวิชา ( ติด W ) </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลาออกจากการเป็นนักศึกษา </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ </button>
//               <button className="btn-donate"><i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน </button>
              
//             </div>
//           </div>
//         </Content>
//     </>
//   );
// };

// export default HomeRequest;

























import React from 'react';
import {  Layout, theme } from 'antd';

import "./HomeRequest.css"
import { useNavigate } from 'react-router-dom';
import { RequestInterface } from '../../interfaces/Request';
import { CreateRequest } from '../../services/https';


const { Header, Content  } = Layout;

const HomeRequest: React.FC = () => {
  const navigate = useNavigate(); 
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleToRequest1 = async () => {
    const values: RequestInterface = {
      Note: "",
      StudentID: 1,
      RequestTypeID: 1,
      StatusRequestID: 2,
      CourseID: null,
    };

  
    try {
      const res = await CreateRequest(values);

      if (res && res.status === 201) {

        const createdRequestID = res.data.data.ID; 
        console.log("Created RequestID:", createdRequestID);
  
        navigate('/request1', { state: { RequestID: createdRequestID } });

      } else {

        alert("ไม่สามารถสร้างคำร้องได้ กรุณาลองใหม่");

      }
    } catch (error) {

      console.error("Error creating request:", error);

      alert("เกิดข้อผิดพลาดในการส่งคำร้อง กรุณาลองใหม่");

    }
  };


  const handleToHome = () => {
    navigate('/'); // Navigate to ApplyToSeller page
    };

  return (
    <>
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
              <i onClick={handleToHome} className="fa-solid fa-circle-left fa-2xl icon-style"></i>


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
              <button className="btn-donate" onClick={handleToRequest1}> <i className ="fa-solid fa-play fa-xl" style={{marginRight:"10px"}}></i>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </button>
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












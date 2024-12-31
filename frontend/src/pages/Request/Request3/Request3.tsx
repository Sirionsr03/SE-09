// import React from 'react';
// import {  DatePicker, DatePickerProps, Layout, Space, theme } from 'antd';
// import "./Request3.css"
// import NavbarHome from '../../../components/Navbar';


// const { Header, Content  } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
//     console.log(date, dateString);
//   };


// const Request: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();




//   return (
//     <>
//     <NavbarHome/>
//         <Header style={{backgroundColor:"#03194A",opacity:"0.91", borderRadius:"0px",width:"1440px",marginLeft:"48px"}}>
//             <Content style={{ padding: '0 40px' }}>
//                 <div
//                   style={{
//                     minHeight: 80,
//                     padding: 20,
//                     borderRadius: borderRadiusLG,
//                     marginTop:"95px",
//                   }}
//                 >   
//                     {/* ส่วนของคำอธิบายประเภทคำร้อง */}
//                     <div style={{marginTop:"-30px",color:"#fff",marginLeft:"-40px"}}>
//                       <h3>คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า </h3>
//                       <h4 style={{marginTop:"-40px"}}>Request for late payment of registration fee </h4>
//                     </div>

//                   {/* ส่วนของการกรอกปุ่มกลับและ icon  */}
//                     <div 
//                       style=
//                       {{  marginTop:"-45px",
//                           width:"40px",
//                           display:"flex"
//                       }}
//                     >
//                       <i className="fa-solid fa-print fa-2xl" style={{color:"#fff",marginLeft:"-90px"}}></i>
//                       <i className="fa-solid fa-circle-left fa-2xl" style={{color:"#ffff",marginLeft:"1320px"}}></i>
//                     </div>

//                     {/* ส่วนของการกรอกข้อมูล */}
//                     <div className='form-input' 
//                         style=
//                         {{
//                             marginTop:"25px",
//                             marginLeft:"-35px",
//                             fontSize:"17px",
//                             fontWeight:"900"
//                         }}
//                     >
//                         <p>เรียน ผู้อำนวยการศูนย์บริการการศึกษา To Director of The Center for Educational Service </p>
//                         <p style={{marginTop:"-15px",display:"flex"}}>ข้าพเจ้า <input type="text" name="text" className="input" placeholder="กรุณาหรอกชื่อและนามสกุล"></input> 
//                             เลขประจำตัว <input type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา"></input>
//                             เป็นนักศึกษาสังกัด สำนักวิชา <div className="select">
//                                                     <select name="format" id="format">
//                                                        <option selected disabled>Choose a book format</option>
//                                                        <option value="pdf">PDF</option>
//                                                        <option value="txt">txt</option>
//                                                        <option value="epub">ePub</option>
//                                                        <option value="fb2">fb2</option>
//                                                        <option value="mobi">mobi</option>
//                                                     </select>
//                                                 </div>
//                         </p>
                        
//                         <p style={{marginTop:"-10px",display:"flex"}}>สาขาวิชา <div className="select">
//                                                                                     <select name="format" id="format">
//                                                                                        <option selected disabled>Choose a book format</option>
//                                                                                        <option value="pdf">PDF</option>
//                                                                                        <option value="txt">txt</option>
//                                                                                        <option value="epub">ePub</option>
//                                                                                        <option value="fb2">fb2</option>
//                                                                                        <option value="mobi">mobi</option>
//                                                                                     </select>
//                                                                                 </div>
//                             มีความประสงค์ขอชำระเงินค่าธรรมเนียมการลงทะเบียนเรียน ภาคการศึกษาที่  <input type="text" name="text" className="input" placeholder="กรุณากรอก x / 256x" style={{width:"150px"}}></input>
//                         </p>
//                         <p style={{marginTop:"-10px",display:"flex"}} >เนื่องจาก Because   <input type="text" name="text" className="input"  style={{width:"1060px"}}></input>  </p> 
//                         <p style={{marginTop:"-10px",display:"flex"}} >ทั้งนี้ ข้าพเจ้าสามารถชำระเงินได้ในวันที่   <Space direction="vertical" style={{color:"#9999"}}>
//                                                                                                           <DatePicker onChange={onChange} 
//                                                                                                             className="custom-datepicker" />
//                                                                                                         </Space>
//                             หรือสามารถชำระเงินได้ทันทีที่ได้รับการอนุมัติ
//                         </p>
//                         <p style={{marginTop:"-10px",display:"flex",marginLeft:"640px"}}> ลงชื่อ <input type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา"></input> </p>
//                         <p style={{marginTop:"-10px",display:"flex",marginLeft:"640px"}}> วันที่ <Space direction="vertical" style={{color:"#9999"}}>
//                                                                                                     <DatePicker onChange={onChange} 
//                                                                                                       className="custom-datepicker" />
//                                                                                               </Space>
//                             โทรศัพท์ Tel. <input type="text" name="text" className="input" placeholder="กรุณากรอกเบอร์โทรศัพท์"></input>
//                         </p>



//                     </div>

//                 </div>
//             </Content>
//         </Header>


//         <Content style={{ padding: '0 40px',height:"490px" ,width:"1520px", marginLeft:"8px"}}>
//           <div
//             style={{
//               background: colorBgContainer,
//               height:"110vh",
//               padding: 20,
//               backgroundColor: "#fff7f5",
//               marginTop:"0px",
//               marginBottom:"40px",
//             }}
//           >


//             {/* Form Section */}
//             <div
//               style={{
//                 backgroundColor: "#DFDFE2",
//                 padding: "20px",
//                 borderRadius: "10px",
//                 marginTop: "350px",
//                 fontFamily:"Oswald",
//               }}
//             >
//               {/* Advisor Section */}
//               <div
//                 style={{
//                   backgroundColor: "#9DB2C4",
//                   padding: "10px",
//                   borderRadius: "10px",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <h3 style={{ color: "#fff", fontFamily:"Oswald",fontWeight:"900"}}>1. ความเห็นของอาจารย์ที่ปรึกษา (Advisor's Comments)</h3>
//                 <p> <input type="text" name="text" className="input" style={{background:"#ffff",width:"190vh",height:"10vh"}}></input> </p>
//                 <p style={{ fontFamily:"Oswald",fontWeight:"900",marginLeft:"54vh"}}>
//                   ลงชื่อ <input type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา" style={{background:"#fff"}}></input>  
//                   วันที่ <Space direction="vertical" style={{color:"#ffff"}}>
//                           <DatePicker onChange={onChange} 
//                             className="custom-datepicker1" />
//                     </Space>
//                 </p>

//               </div>
              
//               {/* Chair Section */}
//               <div
//                 style={{
//                   backgroundColor: "#9DB2C4",
//                   padding: "10px",
//                   borderRadius: "10px",
//                 }}
//               >
//                 <h3 style={{ color: "#fff" ,fontFamily:"Oswald",fontWeight:"900"}}>2. ผลการพิจารณาของหัวหน้าสายวิชา (Chair's Decision)</h3>
//                 <p style={{fontFamily:"Oswald",fontWeight:"900"}}>อนุมัติพร้อมค่าปรับ Approved, with payable fine</p>
//                 <p>
//                   ลงชื่อ{" "}
//                   <input type="text" style={{ width: "200px" }} placeholder="กรุณากรอกชื่อ" />
//                 </p>
//                 <p>
//                   วันที่{" "}
//                   <Space direction="vertical" style={{borderColor:"#ffff"}}>
//                     <DatePicker onChange={onChange} />
//                   </Space>
//                 </p>
//               </div>
//             </div>


//           </div>
//         </Content>
//     </>
//   );
// };

// export default Request;












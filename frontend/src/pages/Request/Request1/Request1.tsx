// import React from 'react';
// import { Layout, theme } from 'antd';
// import Test from '../../../Component/Test';
// import './Request1.css';

// const { Header, Content } = Layout;

// const Request: React.FC = () => {
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <>
//       <Test />
//       <Header
//         style={{
//           backgroundColor: '#03194A',
//           opacity: '0.91',
//           borderRadius: '0px',
//           width: '1440px',
//           marginLeft: '48px',
//         }}
//       >
//         <Content style={{ padding: '0 40px' }}>
//           <div
//             style={{
//               minHeight: 80,
//               padding: 20,
//               borderRadius: borderRadiusLG,
//               marginTop: '95px',
//             }}
//           >
//             <div style={{ marginTop: '-30px', color: '#fff', marginLeft: '-40px' }}>
//               <h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </h3>
//               <h4 style={{ marginTop: '-40px' }}>
//                 Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
//               </h4>
//             </div>

//             <div
//               style={{
//                 marginTop: '-45px',
//                 width: '40px',
//                 display: 'flex',
//               }}
//             >
//               <i className="fa-solid fa-print fa-2xl" style={{ color: '#fff', marginLeft: '-90px' }}></i>
//               <i
//                 className="fa-solid fa-circle-left fa-2xl"
//                 style={{ color: '#ffff', marginLeft: '1320px' }}
//               ></i>
//             </div>
//           </div>
//         </Content>
//       </Header>

//       <Content style={{ padding: '0 40px', height: '490px', width: '1520px', marginLeft: '8px' }}>
//         <div
//           style={{
//             background: colorBgContainer,
//             height: '514px',
//             padding: 20,
//             backgroundColor: '#DFDFE2',
//             marginTop: '0px',
//             marginBottom: '40px',
//           }}
//         >
//           <h4 style={{ marginLeft: '20px' }}>ปีการศึกษา 2567/2</h4>

//             <div className="radio-input">
//               <div className="radio-b">
//                 <input type="radio" className="radio-b__input" id="radio1" name="radio-group" />
//                 <label className="radio-b__label" htmlFor="radio1">
//                   <div className="radio-b__custom">
//                     <span className="radio-b__custom-fill"></span>
//                   </div>
//                   <span className="radio-b__text">เพิ่มวิชา</span>
//                 </label>
//               </div>
//               <div className="radio-b">
//                 <input type="radio" className="radio-b__input" id="radio2" name="radio-group" />
//                 <label className="radio-b__label" htmlFor="radio2">
//                   <div className="radio-b__custom">
//                     <span className="radio-b__custom-fill"></span>
//                   </div>
//                   <span className="radio-b__text">ลดรายวิชา</span>
//                 </label>
//               </div>
//               <div className="radio-b">
//                 <input type="radio" className="radio-b__input" id="radio3" name="radio-group" />
//                 <label className="radio-b__label" htmlFor="radio3">
//                   <div className="radio-b__custom">
//                     <span className="radio-b__custom-fill"></span>
//                   </div>
//                   <span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
//                 </label>
//               </div>
//             </div>



//         </div>
//       </Content>
//     </>
//   );
// };

// export default Request;













//เดิม ใช้งานได้

// import React, { useContext, useEffect, useRef, useState } from 'react';
// import { Button, Form, Input, Popconfirm, Table, theme } from 'antd';

// import { Header, Content } from 'antd/es/layout/layout';
// import "./Request1.css"
// import NavbarHome from '../../../components/Navbar';

// const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const form = useContext(EditableContext);

//   useEffect(() => {
//     if (editing) {
//       inputRef.current?.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({ [dataIndex]: record[dataIndex] });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({ ...record, ...values });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   let childNode = children;

//   if (editable) {
//     childNode = editing ? (
//       <Form.Item
//         style={{ margin: 0 }}
//         name={dataIndex}
//         rules={[{ required: true, message: `${title} is required.` }]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         onClick={toggleEdit}
//         style={{ cursor: 'pointer' }}
//       >
//         {children}
//       </div>
//     );
//   }

//   return <td {...restProps}>{childNode}</td>;
// };

// const App = () => {
//   const [dataSource, setDataSource] = useState([
//     {
//       key: '0',
//       courseCode: '',
//       courseName: '',
//       credits: '',
//       group: '',
//       time: '',
//       reason: '',
//     },
//   ]);

//   const handleAdd = () => {
//     const newData = {
//       key: Date.now().toString(),
//       courseCode: '',
//       courseName: '',
//       credits: '',
//       group: '',
//       time: '',
//       reason: '',
//     };
//     setDataSource([...dataSource, newData]);
//   };

//   const handleDelete = (key) => {
//     setDataSource(dataSource.filter((item) => item.key !== key));
//   };

//   const handleSave = (row) => {
//     const newData = [...dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, { ...item, ...row });
//     setDataSource(newData);
//   };

//   const columns = [
//     {
//       title: 'รหัสวิชา (Course Code)',
//       dataIndex: 'courseCode',
//       editable: true,
//     },
//     {
//       title: 'รายการ (Course Name)',
//       dataIndex: 'courseName',
//       editable: true,
//     },
//     {
//       title: 'หน่วยกิต (Credits)',
//       dataIndex: 'credits',
//       editable: true,
//     },
//     {
//       title: 'กลุ่ม (Group)',
//       dataIndex: 'group',
//       editable: true,
//     },
//     {
//       title: 'เวลา (Time)',
//       dataIndex: 'time',
//       editable: true,
//     },
//     {
//       title: 'หมายเหตุ (Reason)',
//       dataIndex: 'reason',
//       editable: true,
//     },
//     {
//       title: 'Operation',
//       dataIndex: 'operation',
//       render: (_, record) =>
//         dataSource.length >= 1 ? (
//           <Popconfirm
//             title="Are you sure to delete?"
//             onConfirm={() => handleDelete(record.key)}
//           >
//             <a>Delete</a>
//           </Popconfirm>
//         ) : null,
//     },
//   ];

//   const components = {
//     body: {
//       row: EditableRow,
//       cell: EditableCell,
//     },
//   };

//   const tableColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }
//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave,
//       }),
//     };
//   });

//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <>
//       <NavbarHome />
//       <Header
//         style={{
//           backgroundColor: '#03194A',
//           opacity: '0.91',
//           width: '1440px',
//           marginLeft: '48px',
//         }}
//       >
//         <Content style={{ padding: '0 40px' }}>
//           <div
//             style={{
//               minHeight: 80,
//               padding: 20,
//               borderRadius: theme.useToken().token.borderRadiusLG,
//               marginTop: '95px',
//             }}
//           >
//             <div style={{ marginTop: '-30px', color: '#fff', marginLeft: '-40px' }}>
//               <h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </h3>
//               <h4 style={{ marginTop: '-40px' }}>
//                 Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
//               </h4>
//             </div>
//             <div 
//               style={{
//                 marginTop: '-45px',
//                 display: 'flex',
//               }}
//             >
//               <i
//                 className="fa-solid fa-print fa-2xl"
//                 style={{ color: '#fff', marginLeft: '-90px' }}
//               ></i>
//                 <i
//                   className="fa-solid fa-circle-left fa-2xl"
//                   style={{ color: '#ffff', marginLeft: '1320px'}}
//                 ></i>

//             </div>
//           </div>
//         </Content>
//       </Header>


//       <Content style={{ padding: '0 40px', marginLeft: '8px' }}>
//         <div
//           style={{
//             background: theme.useToken().token.colorBgContainer,
//             backgroundColor: '#DFDFE2',
//             marginTop: '0px',
//             marginBottom: '40px',
//             padding: 24,
//             minHeight: '580px',
//             width:'1440px'
//           }}
//         >
//           <h4 style={{ marginLeft: '20px' }}>ปีการศึกษา 2567/2</h4>
//           <div className="radio-input">
//             {['เพิ่มวิชา', 'ลดรายวิชา', 'เปลี่ยนกลุ่มวิชา'].map((label, index) => (
//               <div className="radio-b" key={index}>
//                 <input
//                   type="radio"
//                   className="radio-b__input"
//                   id={`radio${index + 1}`}
//                   name="radio-group"
//                 />
//                 <label className="radio-b__label" htmlFor={`radio${index + 1}`}>
//                   <div className="radio-b__custom">
//                     <span className="radio-b__custom-fill"></span>
//                   </div>
//                   <span className="radio-b__text">{label}</span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div style={{marginTop:"-520px",marginLeft:"35px",marginRight:"35px"}}>
//         <Table
//             className="custom-table"
//             components={components}
//             rowClassName={() => 'editable-row'}
//             bordered
//             dataSource={dataSource}
//             columns={tableColumns}
//             pagination={false}
//         />
//         <div className="input-container" onClick={handleAdd} type='primary'>
//           <input placeholder="Add Item" type="text"/>
//           <button className="button" style={{marginTop:"0px"}}> <p style={{marginTop:"-10px"}}>Add</p></button>
//         </div>

//       </div>

//       <div style={{marginTop:"50px",marginLeft:"35px",marginRight:"35px"}}>
//         <h3 style={{marginBottom:"20px"}}>รายวิชาที่ลงทะเบียนไว้แล้ว</h3>
//         <Table
//             className="custom-table2"
//             components={components}
//             rowClassName={() => 'editable-row'}
//             bordered
//             dataSource={dataSource}
//             columns={tableColumns}
//             pagination={false}
//         />
//       </div>

//       </Content>

//     </>
//   );
// };

// export default App;

















// import React from 'react';
// import {  DatePicker, DatePickerProps, Layout, Space, theme } from 'antd';
// import "./Request1.css"
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
//       <div
//           style={{
//             background: '#1a2e5a',
//             padding: '15px 20px',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >

//         <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>จัดการวิชา</h2>
//       </div>

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
//                       <h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา
//                       </h3>
//                       <h4 style={{marginTop:"-40px"}}>Request to Register for Additional Credits / to Change Study Group / to Reduce Courses</h4>
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




//                                                                                         <option value="fb2">fb2</option>
//                                                                                        <option value="mobi">mobi</option>
//                                                                                     </select>
//                                                                                 </div>
//                               สาขาวิชา / หลักสูตร School of        <div className="select">
//                                                                     <select name="format" id="format">
//                                                                        <option selected disabled>Choose a book format</option>
//                                                                        <option value="pdf">PDF</option>
//                                                                        <option value="txt">txt</option>
//                                                                        <option value="epub">ePub</option>
//                                                                        <option value="fb2">fb2</option>
//                                                                        <option value="mobi">mobi</option>
//                                                                     </select>
//                                                                 </div>

//                         </p>



//                         <p style={{marginTop:"-10px",display:"flex"}} >มีความประสงค์จะลงทะเบียน wish to register : </p> 


//                         <div
//                           style={{
//                             backgroundColor: "#9DB2C4",
//                             padding: "10px",
//                             borderRadius: "10px",
//                             marginBottom: "20px",
//                             maxWidth: "90%", // จำกัดขนาดไม่ให้เกินขอบหน้าจอ
//                             margin: "0 auto", // จัดให้อยู่กลาง
//                             display: "flex", // ใช้ flexbox เพื่อจัดวางเนื้อหา
//                             flexDirection: "column", // ตั้งค่าการจัดเรียงในแนวตั้ง (เหมาะสำหรับหน้าจอเล็ก)
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                         </div>


//                         <p style={{marginTop:"-10px",display:"flex",marginLeft:"640px"}}> ลงชื่อ <input type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา"></input> </p>
//                         <p style={{marginTop:"-10px",display:"flex",marginLeft:"640px"}}> วันที่ <Space direction="vertical" style={{color:"#9999"}}>
//                                                                                                     <DatePicker onChange={onChange} 
//                                                                                                       className="custom-datepicker" />
//                                                                                               </Space>
//                             โทรศัพท์ Tel. <input type="text" name="text" className="input" placeholder="กรุณากรอกเบอร์โทรศัพท์"></input>
//                         </p>


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
//                         <p>เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator </p>
//                         <p style={{marginTop:"-15px",display:"flex"}}>ข้าพเจ้า <input type="text" name="text" className="input" placeholder="กรุณาหรอกชื่อและนามสกุล"></input> 
//                             เลขประจำตัว <input style={{marginRight:"20px"}} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา"></input>
//                             เป็นนักศึกษาระดับ a student at <div className="selectdegree">
//                                                     <select name="format" id="format">
//                                                        <option selected disabled>เลือกระดับ</option>
//                                                        <option value="ปริญญาตรี">ปริญญาตรี</option>
//                                                        <option value="ปริญญาโท">ปริญญาโท</option>
//                                                        <option value="ปริญญาเอก">ปริญญาเอก</option>

//                                                     </select>
//                                                 </div>
//                         </p>

//                         <p style={{marginTop:"-10px",display:"flex"}}>สังกัดสำนักวิชา the Institute of
//                                                                                 <div className="select">
//                                                                                     <select name="format" id="format">
//                                                                                        <option selected disabled>Choose a book format</option>
//                                                                                        <option value="pdf">PDF</option>
//                                                                                        <option value="txt">txt</option>
//                                                                                        <option value="epub">ePub</option>
//                                                                     
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











//ใช้งานได้แก้ไขแล้ว


// import React from 'react';
// import { DatePicker, DatePickerProps, Flex, Layout,  Space,  theme } from 'antd';
// import "./Request1.css"



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
//       <section
//           style={{
//             marginTop: '70px',
//             padding: '40px 60px',
//             backgroundColor: '#f7f8fc',
//             minHeight: '100vh',
//           }}
//       >
//         {/* Header */}
//         <div
//           style={{
//             background: '#1a2e5a',
//             padding: '15px 20px',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           }}
//         >


//           <div style={{ display: "flex", alignItems: "center", color: "#fff", margin: 0 }}>
//             {/* ไอคอนพิมพ์ */}
//             <i
//               className="fa-solid fa-print fa-2xl"
//               style={{ color: "#fff", marginRight: "20px" }}
//             ></i>

//             {/* ข้อความ */}
//             <div style={{ flex: 1 }}>
//               <h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา</h3>
//               <h4 style={{ marginTop: "0px" }}>
//                 Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
//               </h4>
//             </div>

//             {/* ไอคอนย้อนกลับ */}
//             <i
//               className="fa-solid fa-circle-left fa-2xl"
//               style={{ color: "#fff", marginLeft: "580px" }}
//             ></i>

//           </div>

//         </div> {/* <-- Header end*/}


//         {/* Content */}
//         <div
//           style={{
//             marginTop: '10px',
//             backgroundColor: '#ffffff',
//             borderRadius: '10px',
//             padding: '25px 35px',
//             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
//           }}
//         >


//             {/* ส่วนของการกรอกข้อมูล */}
//             <div className='form-input' 
//                 style=
//                 {{
//                     margin:0,
//                     fontSize:"17px",
//                     fontWeight:"900"

//                 }}
//             >
//                 <p style={{
//                       marginTop:"0px",
//                       display:"flex"
//                     }}>
//                       เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator 
//                 </p>
//                   <p style={{
//                       marginTop:"30px",
//                       display:"flex"
//                     }}>
//                     ข้าพเจ้า <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px"
//                               }}type="text" name="text" className="input" placeholder="กรุณาหรอกชื่อและนามสกุล"></input> 
//                     เลขประจำตัว <input style={{
//                                         marginTop:"0px",
//                                         marginRight:"20px"
//                                       }} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา"></input>
//                     เป็นนักศึกษาระดับ a student at 
//                     <div className="selectdegree">
//                         <select name="format" id="format">
//                            <option selected disabled>เลือกระดับ</option>
//                            <option value="ปริญญาตรี">ปริญญาตรี</option>
//                            <option value="ปริญญาโท">ปริญญาโท</option>
//                            <option value="ปริญญาเอก">ปริญญาเอก</option>
//                         </select>
//                     </div>
//                   </p>

//                   <p style={{
//                       marginTop:"30px",
//                       display:"flex"
//                     }}>
//                   สังกัดสำนักวิชา the Institute of        
//                     <div className="select">
//                       <select name="format" id="format">
//                           <option selected disabled>Choose a book format</option>
//                           <option value="pdf">PDF</option>
//                           <option value="txt">txt</option>
//                           <option value="epub">ePub</option>
//                           <option value="fb2">fb2</option>
//                           <option value="mobi">mobi</option>
//                       </select>
//                     </div>
//                     สาขาวิชา / หลักสูตร School of
//                     <div className="select">
//                       <select name="format" id="format">
//                           <option selected disabled>Choose a book format</option>
//                           <option value="pdf">PDF</option>
//                           <option value="txt">txt</option>
//                           <option value="epub">ePub</option>
//                           <option value="fb2">fb2</option>
//                           <option value="mobi">mobi</option>
//                       </select>
//                     </div>
//                   </p>

//                   <p style={{
//                       marginTop:"30px",
//                       display:"flex",
//                       marginBottom:"20px"
//                     }}>
//                     มีความประสงค์จะลงทะเบียน wish to register :
//                   </p>

//                   {/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
//                   <div style={{display:"flex",justifyContent:"center",marginTop:"30px",}}>
//                     <div
//                       style={{
//                         background: '#8096BC',
//                         padding: '10px 20px',
//                         // color: "black",
//                         display: 'flex',
//                         alignItems: 'center',
//                         borderRadius: '0px',
//                         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                         width:"790px"
//                       }}
//                     >
//                       <p >1. รายการ Details </p>
//                     </div>
//                       {/* ส่วนของอาจารย์ */}
//                     {/* <div
//                       style={{
//                         background: '#8096BC',
//                         padding: '10px 40px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         borderRadius: '0px',
//                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                         width:"500px"
//                       }}
//                     >
//                       <p>2. ผลการพิจารณา Decision Made</p>
//                     </div> */}

//                   </div>


//                   {/* กล่องสี่เหลี่ยมใน cotent*/}
//                   <div style={{display:"flex",justifyContent:"center"}}>
//                     {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 */}
//                     <div
//                       style={{
//                         background: '#DFDFE2',
//                         padding: '10px 20px',
//                         // color: 'white',
//                         display: 'flex',
//                         alignItems: 'center',
//                         borderRadius: '0px',
//                         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                         width:"790px"
//                       }}
//                     >


//                     {/* ส่วนของ Checkbox */}
//                       <div style={{ marginTop: "15px", marginBottom: "20px" }}>
//                         {/* Radio Buttons */}
//                         <div style={{ display: "flex", gap: "20px" }}>
//                           <div className="radio-input">
//                             <div className="radio-b">
//                               <input
//                                 type="radio"
//                                 className="radio-b__input"
//                                 id="radio1"
//                                 name="radio-group"
//                               />
//                               <label className="radio-b__label" htmlFor="radio1">
//                                 <div className="radio-b__custom">
//                                   <span className="radio-b__custom-fill"></span>
//                                 </div>
//                                 <span className="radio-b__text">เพิ่มวิชา</span>
//                               </label>
//                             </div>
//                           </div>
//                           <div className="radio-input">
//                             <div className="radio-b">
//                               <input
//                                 type="radio"
//                                 className="radio-b__input"
//                                 id="radio2"
//                                 name="radio-group"
//                               />
//                               <label className="radio-b__label" htmlFor="radio2">
//                                 <div className="radio-b__custom">
//                                   <span className="radio-b__custom-fill"></span>
//                                 </div>
//                                 <span className="radio-b__text">ลดรายวิชา</span>
//                               </label>
//                             </div>
//                           </div>
//                           <div className="radio-input">
//                             <div className="radio-b">
//                               <input
//                                 type="radio"
//                                 className="radio-b__input"
//                                 id="radio3"
//                                 name="radio-group"
//                               />
//                               <label className="radio-b__label" htmlFor="radio3">
//                                 <div className="radio-b__custom">
//                                   <span className="radio-b__custom-fill"></span>
//                                 </div>
//                                 <span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
//                               </label>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Course Code */}
//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
//                           <span>รหัสวิชา Course Code</span>
//                           <div className="selectdegree">
//                             <select name="format" id="format" style={{ padding: "5px" }}>
//                               <option selected disabled>เลือกรหัสวิชา</option>
//                               <option value="ปริญญาตรี">ปริญญาตรี</option>
//                               <option value="ปริญญาโท">ปริญญาโท</option>
//                               <option value="ปริญญาเอก">ปริญญาเอก</option>
//                             </select>
//                           </div>
//                         </div>

//                         {/* Course Title */}
//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
//                           <span>ชื่อวิชำ(ภาษาอังกฤษ) Course Title</span>
//                           <div className="selectsubject">
//                             <select name="format" id="format" style={{ padding: "5px" }}>
//                               <option selected disabled>เลือกรหัสวิชา</option>
//                               <option value="ปริญญาตรี">ปริญญาตรี</option>
//                               <option value="ปริญญาโท">ปริญญาโท</option>
//                               <option value="ปริญญาเอก">ปริญญาเอก</option>
//                             </select>
//                           </div>
//                         </div>


//                         {/* Course Title */}
//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
//                           <span>กลุ่ม Group No.</span>
//                           <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",
//                                 width:"60px"
//                               }}type="text" name="text" className="input" placeholder="กลุ่ม"></input> 
//                         </div>

//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px",color:"red" }}>
//                           <span>กรณีเปลี่ยนกลุ่ม In the case of changing study group</span>
//                         </div>

//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" ,justifyContent:"center"}}>
//                           <span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
//                           <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",
//                                 width:"60px"
//                               }}type="text" name="text" className="input" placeholder="กลุ่ม"></input> 
//                         </div>

//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px",justifyContent:"center" }}>
//                           <span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
//                           <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",
//                                 width:"60px"
//                               }}type="text" name="text" className="input" placeholder="กลุ่ม"></input> 
//                         </div>

//                         <div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
//                           <span>ระบุเหตุผล Specify reason</span>
//                           <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",
//                                 width:"480px"
//                               }}type="text" name="text" className="input" placeholder="เหตุผล"></input> 
//                         </div>

//                       </div> {/* <<--ส่วนของ Checkbox  end*/}

//                     </div> {/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 end/}



//                     //ส่วนของอาจารย์
//                     {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 */}
//                     {/*<div
//                       style={{
//                         background: '#DFDFE2',
//                         padding: '10px 40px',
//                         display: 'flex',
//                         alignItems: 'center',
//                         borderRadius: '0px',
//                         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                         width:"500px"

//                       }}
//                     >

//                         <div style={{ marginTop: "200px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent:"center" }}>
//                           <span>อาจารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา 
//                           Instructor / Course coordinator
//                           </span>

//                         </div>

//                     </div> */}{/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 end*/}

//                   </div> {/* <-- กล่องสี่เหลี่ยมใน cotent end*/}

//               <p style={{
//                   marginTop:"30px",
//                   display:"flex",
//                   marginBottom:"20px",
//                   marginLeft:"50px"
//                 }}>
//                 จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
//               </p>

//               <p style={{
//                   marginTop:"30px",
//                   display:"flex",
//                   marginBottom:"20px",
//                   marginLeft:"150px"
//                 }}>

//                 นักศึกษาลงชื่อ Signature
//                 <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",

//                               }}type="text" name="text" className="input" placeholder="กลุ่ม"></input> 

//                 โทรศัพท์ Tel. No.
//                 <input 
//                               style={{
//                                 marginTop:"0px",
//                                 marginRight:"20px",

//                               }}type="text" name="text" className="input" placeholder="กลุ่ม"></input> 
//                  วันที่ <Space direction="vertical" style={{color:"#9999",marginTop:"-16px"}}>
//                             <DatePicker onChange={onChange} 
//                               className="custom-datepicker" />
//                       </Space>



//               </p>


//             </div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

//         </div> {/* <-- Content end*/}


//       </section>


//     </>
//   );
// };

// export default Request;
















//ส่งข้อมูลไปได้แล้ว เหลือดึงสำนักกับสาขามา

import React, { useEffect, useState } from 'react';
import { DatePicker, DatePickerProps, Space } from 'antd';
import "./Request1.css"
import { FacultyInterface} from '../../../interfaces/Faculty';
import { DegreeInterface } from '../../../interfaces/Degree';
import { GetDegree, GetFaculty, GetMajorByFacultyID} from '../../../services/https';
import { MajorInterface} from '../../../interfaces/Major';



// const { Header, Content  } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
	key: index + 1,
	label: `nav ${index + 1}`,
}));

// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
// 	setdate(dateString)
// 	console.log(date, dateString);
// };

interface Data {
	inputName?: string
	inputStudentID?: string
	degree?: string
	faculty?: string
	major?: string
	details?: string
	courseCode?: string
	courseTitle?: string
	group?: string
	oldGroup?: string
	newGroup?: string
	specifyReason?: string
	inputPhoneNumber?: string
	date?: string
}


const Request1: React.FC = () => {

	const [inputName, setInputName] = useState("")
	const [inputStudentID, setInputStudentID] = useState("")

	const [degree, setdegree] = useState<DegreeInterface[]>([]);
	const [selectDegree, setSelectDegree] = useState("");

	const [faculty, setFaculty] = useState<FacultyInterface[]>([]);
	const [selectfaculty, setSelectFaculty] = useState("")

	const [major, setMajor] = useState<MajorInterface[]>([]);
	const [selectmajor, setSelectmajor] = useState("")

	const [details, setdetails] = useState("")
	const [courseCode, setcourseCode] = useState("")
	const [courseTitle, setcourseTitle] = useState("")
	const [group, setgroup] = useState("")
	const [oldGroup, setoldGroup] = useState("")
	const [newGroup, setnewGroup] = useState("")
	const [specifyReason, setspecifyReason] = useState("")
	const [inputPhoneNumber, setinputPhoneNumber] = useState("")
	const [date, setdate] = useState("")



	async function Summit() {
		const data1: Data = {
			inputName: inputName,
			inputStudentID: inputStudentID,
			degree: selectDegree,
			faculty: selectfaculty,
			major: selectmajor,
			details: details,
			courseCode: courseCode,
			courseTitle: courseTitle,
			group: group,
			oldGroup: oldGroup,
			newGroup: newGroup,
			specifyReason: specifyReason,
			inputPhoneNumber: inputPhoneNumber,
			date: date
		}
		console.log(data1)


		const url = "http://localhost:8000/CreatePrintStory"
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data1),        //json to string
			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
		});

		if (response.ok) { /* Handle */
			alert("ส่งสำเร็จ")
		}

		// If you care about a response:
		// if (response.body !== null) {
		//   // body is ReadableStream<Uint8Array>
		//   // parse as needed, e.g. reading directly, or
		//   const asString = new TextDecoder("utf-8").decode(response.body);
		//   // and further:
		//   const asJSON = JSON.parse(asString);  //strintg to json
		// }

	}



	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		
		setdate(dateString.toString())
		console.log(date, dateString);
	};



	const getdegree = async () => {
		const res = await GetDegree();
		if (res) {
			setdegree(res);
		}
	};

	useEffect(() => {
		getdegree();
	}, []);

	console.log(degree)


	const getfaculty = async () => {
		const res = await GetFaculty();
		if (res) {
			setFaculty(res.data.data);
		}
	};


	useEffect(() => {
		getfaculty();
		console.log(faculty)
	}, []);



	const getmajor = async () => {

		const facultystr: number= +selectfaculty;

		if (facultystr==0) {
			return
		}
	
		const res = await GetMajorByFacultyID(facultystr);
		console.log(res)
		// debugger
		
		if (res) {
			setMajor(res.data.data);
		}
		
	};

	  useEffect(() => {
		getmajor();
	  }, [selectfaculty]);

	//   console.log(major)

	// const {
	//   token: { colorBgContainer, borderRadiusLG },
	// } = theme.useToken();


	return (
		<>
			<section
				style={{
					marginTop: '70px',
					padding: '40px 60px',
					backgroundColor: '#f7f8fc',
					minHeight: '100vh',
				}}
			>
				{/* Header */}
				<div
					style={{
						background: '#1a2e5a',
						padding: '15px 20px',
						color: 'white',
						display: 'flex',
						alignItems: 'center',
						borderRadius: '10px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					}}
				>


					<div style={{ display: "flex", alignItems: "center", color: "#fff", margin: 0 }}>
						{/* ไอคอนพิมพ์ */}
						<i
							className="fa-solid fa-print fa-2xl"
							style={{ color: "#fff", marginRight: "20px" }}
						></i>

						{/* ข้อความ */}
						<div style={{ flex: 1 }}>
							<h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา</h3>
							<h4 style={{ marginTop: "0px" }}>
								Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
							</h4>
						</div>

						{/* ไอคอนย้อนกลับ */}
						<i
							className="fa-solid fa-circle-left fa-2xl"
							style={{ color: "#fff", marginLeft: "580px" }}
						></i>

					</div>

				</div> {/* <-- Header end*/}


				{/* Content */}
				<div
					style={{
						marginTop: '10px',
						backgroundColor: '#ffffff',
						borderRadius: '10px',
						padding: '25px 35px',
						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
					}}
				>


					{/* ส่วนของการกรอกข้อมูล */}
					<div className='form-input'
						style=
						{{
							margin: 0,
							fontSize: "17px",
							fontWeight: "900"

						}}
					>
						<p style={{
							marginTop: "0px",
							display: "flex"
						}}>
							เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator
						</p>
						<p style={{
							marginTop: "30px",
							display: "flex"
						}}>
							ข้าพเจ้า <input
								value={inputName} // ...force the input's value to match the state variable...
								onChange={e => setInputName(e.target.value)}
								style={{
									marginTop: "0px",
									marginRight: "20px"
								}} type="text" name="text" className="input" placeholder="กรุณาหรอกชื่อและนามสกุล"></input>
							เลขประจำตัว 
							<input
								value={inputStudentID} // ...force the input's value to match the state variable...
								onChange={e => setInputStudentID(e.target.value)}
								style={{
									marginTop: "0px",
									marginRight: "20px"
								}} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา">

							</input>
							เป็นนักศึกษาระดับ a student at
							<div className="selectdegree">
								<select name="format" onChange={(e) => setSelectDegree(e.target.value)}>
									{...degree.map((item, index) => {
										console.log(item.Degree)
										return (
											<option key={index} value={item.Degree}>
												{item.Degree}
											</option>
										)
									})}
								</select>
							</div>
						</p>

						<p style={{
							marginTop: "30px",
							display: "flex"
						}}>
							สังกัดสำนักวิชา the Institute of
							<div className="selectfaculty">
								<select name="format" onChange={(e) => setSelectFaculty(e.target.value)}>
									{
										faculty.map((item, index) => {
											console.log(item)
											return (
												<option key={index} value={item.ID}>{item.FacultyName}</option>
											)
										})
									}
								</select>

							</div>
							สาขาวิชา / หลักสูตร School of
							<div className="select">
							<select name="format" onChange={(e) => setSelectmajor(e.target.value)}>
									{
										major.map((item, index) => {
											console.log(item)
											return (
												<option key={index} value={item.ID}>{item.major_name}</option>
											)
										})
									}
								</select>
							</div>
						</p>

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "20px"
						}}>
							มีความประสงค์จะลงทะเบียน wish to register :
						</p>

						{/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
						<div style={{ display: "flex", justifyContent: "center", marginTop: "30px", }}>
							<div
								style={{
									background: '#8096BC',
									padding: '10px 20px',
									// color: "black",
									display: 'flex',
									alignItems: 'center',
									borderRadius: '0px',
									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
									width: "790px"
								}}
							>
								<p >1. รายการ Details </p>
							</div>
							{/* ส่วนของอาจารย์ */}
							{/* <div
                      style={{
                        background: '#8096BC',
                        padding: '10px 40px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '0px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        width:"500px"
                      }}
                    >
                      <p>2. ผลการพิจารณา Decision Made</p>
                    </div> */}

						</div>


						{/* กล่องสี่เหลี่ยมใน cotent*/}
						<div style={{ display: "flex", justifyContent: "center" }}>
							{/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 */}
							<div
								style={{
									background: '#DFDFE2',
									padding: '10px 20px',
									// color: 'white',
									display: 'flex',
									alignItems: 'center',
									borderRadius: '0px',
									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
									width: "790px"
								}}
							>


								{/* ส่วนของ Checkbox */}
								<div style={{ marginTop: "15px", marginBottom: "20px" }}>
									{/* Radio Buttons */}
									<div style={{ display: "flex", gap: "20px" }}>

										<div className="radio-input">
											<div className="radio-b">
												<input
													value={details} // ...force the input's value to match the state variable...
													onChange={e => setdetails(e.target.value)}
													type="radio"
													className="radio-b__input"
													id="radio1"
													name="radio-group"
												/>
												<label className="radio-b__label" htmlFor="radio1">
													<div className="radio-b__custom">
														<span className="radio-b__custom-fill"></span>
													</div>
													<span className="radio-b__text">เพิ่มวิชา</span>
												</label>
											</div>
										</div>

										<div className="radio-input">
											<div className="radio-b">
												<input
													type="radio"
													className="radio-b__input"
													id="radio2"
													name="radio-group"
												/>
												<label className="radio-b__label" htmlFor="radio2">
													<div className="radio-b__custom">
														<span className="radio-b__custom-fill"></span>
													</div>
													<span className="radio-b__text">ลดรายวิชา</span>
												</label>
											</div>
										</div>


										<div className="radio-input">
											<div className="radio-b">
												<input
													type="radio"
													className="radio-b__input"
													id="radio3"
													name="radio-group"
												/>
												<label className="radio-b__label" htmlFor="radio3">
													<div className="radio-b__custom">
														<span className="radio-b__custom-fill"></span>
													</div>
													<span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
												</label>
											</div>
										</div>
									</div>


									{/* Course Code */}
									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
										<span>รหัสวิชา Course Code</span>
										<div >
											<input
												value={courseCode} // ...force the input's value to match the state variable...
												onChange={e => setcourseCode(e.target.value)}
												style={{
													marginTop: "0px",
													marginRight: "20px"
												}} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสวิชา">

											</input>
										</div>
									</div>

									{/* Course Title */}
									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
										<span>ชื่อวิชา(ภาษาอังกฤษ) Course Title</span>
										<div className="selectsubject">
											<input
												value={courseTitle} // ...force the input's value to match the state variable...
												onChange={e => setcourseTitle(e.target.value)}
												style={{
													marginTop: "0px",
													marginRight: "20px"
												}} type="text" name="text" className="input" placeholder="กรุณากรอกชื่อวิชา">

											</input>
										</div>
									</div>


									{/* Course Title */}
									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
										<span>กลุ่ม Group No.</span>
										<input
											value={group} // ...force the input's value to match the state variable...
											onChange={e => setgroup(e.target.value)}
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "60px"
											}} type="text" name="text" className="input" placeholder="กลุ่ม">
											
										</input>
									</div>

									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", color: "red" }}>
										<span>กรณีเปลี่ยนกลุ่ม In the case of changing study group</span>
									</div>

									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
										<span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
										<input
											value={oldGroup} // ...force the input's value to match the state variable...
											onChange={e => setoldGroup(e.target.value)}
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "60px"
											}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
									</div>

									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
										<span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
										<input
											value={newGroup} // ...force the input's value to match the state variable...
											onChange={e => setcourseTitle(e.target.value)}
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "60px"
											}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
									</div>

									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
										<span>ระบุเหตุผล Specify reason</span>
										<input
											value={specifyReason} // ...force the input's value to match the state variable...
											onChange={e => setspecifyReason(e.target.value)}
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "480px"
											}} type="text" name="text" className="input" placeholder="เหตุผล"></input>
									</div>

								</div> {/* <<--ส่วนของ Checkbox  end*/}

							</div> {/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 end/}

                    
                    
                    //ส่วนของอาจารย์
                    {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 */}
							{/*<div
                      style={{
                        background: '#DFDFE2',
                        padding: '10px 40px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '0px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        width:"500px"
                        
                      }}
                    >

                        <div style={{ marginTop: "200px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent:"center" }}>
                          <span>อาจารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา 
                          Instructor / Course coordinator
                          </span>
                          
                        </div>

                    </div> */}{/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 end*/}

						</div> {/* <-- กล่องสี่เหลี่ยมใน cotent end*/}

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "20px",
							marginLeft: "50px"
						}}>
							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
						</p>

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "20px",
							marginLeft: "150px"
						}}>

							นักศึกษาลงชื่อ Signature
							<input
								value={inputName} // ...force the input's value to match the state variable...
								onChange={e => setInputName(e.target.value)}
								style={{
									marginTop: "0px",
									marginRight: "20px",

								}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>

							โทรศัพท์ Tel. No.
							<input
								value={inputPhoneNumber} // ...force the input's value to match the state variable...
								onChange={e => setinputPhoneNumber(e.target.value)}
								style={{
									marginTop: "0px",
									marginRight: "20px",

								}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
							วันที่ <Space direction="vertical" style={{ color: "#9999", marginTop: "-16px" }}>
								<DatePicker onChange={onChange}

									className="custom-datepicker" />
							</Space>



						</p>


					</div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

				</div> {/* <-- Content end*/}



				<button type="button" onClick={Summit} > summit</button>


			</section>


		</>
	);
};

export default Request1;
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
















// //ส่งข้อมูลไปได้แล้ว เหลือดึงสำนักกับสาขามาให้เป็น ข้อความที่ไม่ใช่ ID    แก้ไขล่าสุด 24-12-2024 02.30

// import React, { useEffect, useState } from 'react';
// import { DatePicker, DatePickerProps, Space } from 'antd';
// import "./Request1.css"
// import { FacultyInterface} from '../../../interfaces/Faculty';
// import { DegreeInterface } from '../../../interfaces/Degree';
// import { GetDegree, GetFaculty, GetMajorByFacultyID} from '../../../services/https';
// import { MajorInterface} from '../../../interfaces/Major';



// // const { Header, Content  } = Layout;

// const items = new Array(15).fill(null).map((_, index) => ({
// 	key: index + 1,
// 	label: `nav ${index + 1}`,
// }));

// // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
// // 	setdate(dateString)
// // 	console.log(date, dateString);
// // };

// interface Data {
// 	inputName?: string
// 	inputStudentID?: string
// 	degree?: string
// 	faculty?: string
// 	major?: string
// 	details?: string
// 	courseCode?: string
// 	courseTitle?: string
// 	group?: string
// 	oldGroup?: string
// 	newGroup?: string
// 	specifyReason?: string
// 	inputPhoneNumber?: string
// 	date?: string
// }


// const Request1: React.FC = () => {

// 	const [inputName, setInputName] = useState("")
// 	const [inputStudentID, setInputStudentID] = useState("")

// 	const [degree, setdegree] = useState<DegreeInterface[]>([]);
// 	const [selectDegree, setSelectDegree] = useState("");

// 	const [faculty, setFaculty] = useState<FacultyInterface[]>([]);
// 	const [selectfaculty, setSelectFaculty] = useState("")

// 	const [major, setMajor] = useState<MajorInterface[]>([]);
// 	const [selectmajor, setSelectmajor] = useState("")

// 	const [details, setdetails] = useState("")
// 	const [courseCode, setcourseCode] = useState("")
// 	const [courseTitle, setcourseTitle] = useState("")
// 	const [group, setgroup] = useState("")
// 	const [oldGroup, setoldGroup] = useState("")
// 	const [newGroup, setnewGroup] = useState("")
// 	const [specifyReason, setspecifyReason] = useState("")
// 	const [inputPhoneNumber, setinputPhoneNumber] = useState("")
// 	const [date, setdate] = useState("")



// 	async function Summit() {
// 		const data1: Data = {
// 			inputName: inputName,
// 			inputStudentID: inputStudentID,
// 			degree: selectDegree,
// 			faculty: selectfaculty,
// 			major: selectmajor,
// 			details: details,
// 			courseCode: courseCode,
// 			courseTitle: courseTitle,
// 			group: group,
// 			oldGroup: oldGroup,
// 			newGroup: newGroup,
// 			specifyReason: specifyReason,
// 			inputPhoneNumber: inputPhoneNumber,
// 			date: date
// 		}
// 		console.log(data1)


// 		const url = "http://localhost:8000/CreatePrintStory"
// 		const response = await fetch(url, {
// 			method: 'POST',
// 			body: JSON.stringify(data1),        //json to string
// 			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
// 		});

// 		if (response.ok) { /* Handle */
// 			alert("ส่งสำเร็จ")
// 		}

// 		// If you care about a response:
// 		// if (response.body !== null) {
// 		//   // body is ReadableStream<Uint8Array>
// 		//   // parse as needed, e.g. reading directly, or
// 		//   const asString = new TextDecoder("utf-8").decode(response.body);
// 		//   // and further:
// 		//   const asJSON = JSON.parse(asString);  //strintg to json
// 		// }

// 	}



// 	const onChange: DatePickerProps['onChange'] = (date, dateString) => {

// 		setdate(dateString.toString())
// 		console.log(date, dateString);
// 	};



// 	const getdegree = async () => {
// 		const res = await GetDegree();
// 		if (res) {
// 			setdegree(res);
// 		}
// 	};

// 	useEffect(() => {
// 		getdegree();
// 	}, []);

// 	console.log(degree)


// 	const getfaculty = async () => {
// 		const res = await GetFaculty();
// 		if (res) {
// 			setFaculty(res.data.data);
// 		}
// 	};


// 	useEffect(() => {
// 		getfaculty();
// 		console.log(faculty)
// 	}, []);



// 	const getmajor = async () => {

// 		const facultystr: number= +selectfaculty;

// 		if (facultystr==0) {
// 			return
// 		}

// 		const res = await GetMajorByFacultyID(facultystr);
// 		console.log(res)
// 		// debugger

// 		if (res) {
// 			setMajor(res.data.data);
// 		}

// 	};

// 	  useEffect(() => {
// 		getmajor();
// 	  }, [selectfaculty]);

// 	//   console.log(major)

// 	// const {
// 	//   token: { colorBgContainer, borderRadiusLG },
// 	// } = theme.useToken();


// 	return (
// 		<>
// 			<section
// 				style={{
// 					marginTop: '70px',
// 					padding: '40px 60px',
// 					backgroundColor: '#f7f8fc',
// 					minHeight: '100vh',
// 				}}
// 			>
// 				{/* Header */}
// 				<div
// 					style={{
// 						background: '#1a2e5a',
// 						padding: '15px 20px',
// 						color: 'white',
// 						display: 'flex',
// 						alignItems: 'center',
// 						borderRadius: '10px',
// 						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					<div style={{ display: "flex", alignItems: "center", color: "#fff", margin: 0 }}>
// 						{/* ไอคอนพิมพ์ */}
// 						<i
// 							className="fa-solid fa-print fa-2xl"
// 							style={{ color: "#fff", marginRight: "20px" }}
// 						></i>

// 						{/* ข้อความ */}
// 						<div style={{ flex: 1 }}>
// 							<h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา</h3>
// 							<h4 style={{ marginTop: "0px" }}>
// 								Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
// 							</h4>
// 						</div>

// 						{/* ไอคอนย้อนกลับ */}
// 						<i
// 							className="fa-solid fa-circle-left fa-2xl"
// 							style={{ color: "#fff", marginLeft: "580px" }}
// 						></i>

// 					</div>

// 				</div> {/* <-- Header end*/}


// 				{/* Content */}
// 				<div
// 					style={{
// 						marginTop: '10px',
// 						backgroundColor: '#ffffff',
// 						borderRadius: '10px',
// 						padding: '25px 35px',
// 						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					{/* ส่วนของการกรอกข้อมูล */}
// 					<div className='form-input'
// 						style=
// 						{{
// 							margin: 0,
// 							fontSize: "17px",
// 							fontWeight: "900"

// 						}}
// 					>
// 						<p style={{
// 							marginTop: "0px",
// 							display: "flex"
// 						}}>
// 							เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator
// 						</p>
// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex"
// 						}}>
// 							ข้าพเจ้า <input
// 								value={inputName} // ...force the input's value to match the state variable...
// 								onChange={e => setInputName(e.target.value)}
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px"
// 								}} type="text" name="text" className="input" placeholder="กรุณาหรอกชื่อและนามสกุล"></input>
// 							เลขประจำตัว 
// 							<input
// 								value={inputStudentID} // ...force the input's value to match the state variable...
// 								onChange={e => setInputStudentID(e.target.value)}
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px"
// 								}} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสนักศึกษา">

// 							</input>
// 							เป็นนักศึกษาระดับ a student at
// 							<div className="selectdegree">
// 								<select name="format" onChange={(e) => setSelectDegree(e.target.value)}>
// 									{...degree.map((item, index) => {
// 										console.log(item.Degree)
// 										return (
// 											<option key={index} value={item.Degree}>
// 												{item.Degree}
// 											</option>
// 										)
// 									})}
// 								</select>
// 							</div>
// 						</p>

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex"
// 						}}>
// 							สังกัดสำนักวิชา the Institute of
// 							<div className="selectfaculty">
// 								<select name="format" onChange={(e) => setSelectFaculty(e.target.value)}>
// 									{
// 										faculty.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option key={index} value={item.ID}>{item.FacultyName}</option>
// 											)
// 										})
// 									}
// 								</select>

// 							</div>
// 							สาขาวิชา / หลักสูตร School of
// 							<div className="select">
// 							<select name="format" onChange={(e) => setSelectmajor(e.target.value)}>
// 									{
// 										major.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option key={index} value={item.ID}>{item.major_name}</option>
// 											)
// 										})
// 									}
// 								</select>
// 							</div>
// 						</p>

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px"
// 						}}>
// 							มีความประสงค์จะลงทะเบียน wish to register :
// 						</p>

// 						{/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
// 						<div style={{ display: "flex", justifyContent: "center", marginTop: "30px", }}>
// 							<div
// 								style={{
// 									background: '#8096BC',
// 									padding: '10px 20px',
// 									// color: "black",
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '0px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>
// 								<p >1. รายการ Details </p>
// 							</div>
// 							{/* ส่วนของอาจารย์ */}
// 							{/* <div
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

// 						</div>


// 						{/* กล่องสี่เหลี่ยมใน cotent*/}
// 						<div style={{ display: "flex", justifyContent: "center" }}>
// 							{/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 */}
// 							<div
// 								style={{
// 									background: '#DFDFE2',
// 									padding: '10px 20px',
// 									// color: 'white',
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '0px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>


// 								{/* ส่วนของ Checkbox */}
// 								<div style={{ marginTop: "15px", marginBottom: "20px" }}>
// 									{/* Radio Buttons */}
// 									<div style={{ display: "flex", gap: "20px" }}>

// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													value={details} // ...force the input's value to match the state variable...
// 													onChange={e => setdetails(e.target.value)}
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio1"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio1">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เพิ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div>

// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio2"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio2">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">ลดรายวิชา</span>
// 												</label>
// 											</div>
// 										</div>


// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio3"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio3">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div>
// 									</div>


// 									{/* Course Code */}
// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
// 										<span>รหัสวิชา Course Code</span>
// 										<div >
// 											<input
// 												value={courseCode} // ...force the input's value to match the state variable...
// 												onChange={e => setcourseCode(e.target.value)}
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}} type="text" name="text" className="input" placeholder="กรุณากรอกรหัสวิชา">

// 											</input>
// 										</div>
// 									</div>

// 									{/* Course Title */}
// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
// 										<span>ชื่อวิชา(ภาษาอังกฤษ) Course Title</span>
// 										<div className="selectsubject">
// 											<input
// 												value={courseTitle} // ...force the input's value to match the state variable...
// 												onChange={e => setcourseTitle(e.target.value)}
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}} type="text" name="text" className="input" placeholder="กรุณากรอกชื่อวิชา">

// 											</input>
// 										</div>
// 									</div>


// 									{/* Course Title */}
// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
// 										<span>กลุ่ม Group No.</span>
// 										<input
// 											value={group} // ...force the input's value to match the state variable...
// 											onChange={e => setgroup(e.target.value)}
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "60px"
// 											}} type="text" name="text" className="input" placeholder="กลุ่ม">

// 										</input>
// 									</div>

// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", color: "red" }}>
// 										<span>กรณีเปลี่ยนกลุ่ม In the case of changing study group</span>
// 									</div>

// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
// 										<span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
// 										<input
// 											value={oldGroup} // ...force the input's value to match the state variable...
// 											onChange={e => setoldGroup(e.target.value)}
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "60px"
// 											}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
// 									</div>

// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px", justifyContent: "center" }}>
// 										<span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
// 										<input
// 											value={newGroup} // ...force the input's value to match the state variable...
// 											onChange={e => setcourseTitle(e.target.value)}
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "60px"
// 											}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
// 									</div>

// 									<div style={{ marginTop: "30px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
// 										<span>ระบุเหตุผล Specify reason</span>
// 										<input
// 											value={specifyReason} // ...force the input's value to match the state variable...
// 											onChange={e => setspecifyReason(e.target.value)}
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "480px"
// 											}} type="text" name="text" className="input" placeholder="เหตุผล"></input>
// 									</div>

// 								</div> {/* <<--ส่วนของ Checkbox  end*/}

// 							</div> {/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 end/}



//                     //ส่วนของอาจารย์
//                     {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 */}
// 							{/*<div
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

// 						</div> {/* <-- กล่องสี่เหลี่ยมใน cotent end*/}

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px",
// 							marginLeft: "50px"
// 						}}>
// 							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
// 						</p>

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px",
// 							marginLeft: "150px"
// 						}}>

// 							นักศึกษาลงชื่อ Signature
// 							<input
// 								value={inputName} // ...force the input's value to match the state variable...
// 								onChange={e => setInputName(e.target.value)}
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>

// 							โทรศัพท์ Tel. No.
// 							<input
// 								value={inputPhoneNumber} // ...force the input's value to match the state variable...
// 								onChange={e => setinputPhoneNumber(e.target.value)}
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}} type="text" name="text" className="input" placeholder="กลุ่ม"></input>
// 							วันที่ <Space direction="vertical" style={{ color: "#9999", marginTop: "-16px" }}>
// 								<DatePicker onChange={onChange}

// 									className="custom-datepicker" />
// 							</Space>



// 						</p>


// 					</div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

// 				</div> {/* <-- Content end*/}



// 				<button type="button" onClick={Summit} > summit</button>


// 			</section>


// 		</>
// 	);
// };

// export default Request1;
// //ส่งข้อมูลไปได้แล้ว เหลือดึงสำนักกับสาขามาให้เป็น ข้อความที่ไม่ใช่ ID   end















// // 2024-12-28   03.22 น.
// // เปลียนสำนักกับสาขาเป็นตัวหนังสือได้แล้ว

// import React, { useEffect, useState } from 'react';
// import { message } from 'antd';
// import "./Request1.css"
// import { FacultyInterface } from '../../../interfaces/Faculty';
// import { DegreeInterface } from '../../../interfaces/Degree';
// import { GetDegree, GetFaculty, GetMajorByFacultyID } from '../../../services/https';
// import { MajorInterface } from '../../../interfaces/Major';
// import { useNavigate } from 'react-router-dom';


// interface Data {
// 	inputName?: string
// 	inputStudentID?: string
// 	degree?: string
// 	faculty?: string
// 	major?: string
// 	details?: string
// 	courseCode?: string
// 	courseTitle?: string
// 	group?: string
// 	oldGroup?: string
// 	newGroup?: string
// 	specifyReason?: string
// 	inputPhoneNumber?: string
// }


// const Request1: React.FC = () => {


// 	const navigate = useNavigate();

// 	const [inputName, setInputName] = useState("");
// 	const [inputStudentID, setInputStudentID] = useState("")

// 	const [degree, setdegree] = useState<DegreeInterface[]>([]);
// 	const [selectDegree, setSelectDegree] = useState("");

// 	const [faculty, setFaculty] = useState<FacultyInterface[]>([]);
// 	const [selectfaculty, setSelectFaculty] = useState("")

// 	const [major, setMajor] = useState<MajorInterface[]>([]);
// 	const [selectmajor, setSelectmajor] = useState("")

// 	const [details, setdetails] = useState('')
// 	const isGroupChangeDisabled = details === "radio1" || details === "radio2";

// 	const [courseCode, setcourseCode] = useState("")
// 	const [courseTitle, setcourseTitle] = useState("")
// 	const [group, setgroup] = useState("")
// 	const [oldGroup, setoldGroup] = useState("")
// 	const [newGroup, setnewGroup] = useState("")
// 	const [specifyReason, setspecifyReason] = useState("")
// 	const [inputPhoneNumber, setinputPhoneNumber] = useState("")

// 	const [studentIDError, setStudentIDError] = useState("");
// 	const [phoneNumberError, setPhoneNumberError] = useState("");


// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
	
// 		if (name === "studentID") {
// 			setInputStudentID(value);
// 			const studentIDRegex = /^[CcBb]\d{7}$/;
// 			if (value && !studentIDRegex.test(value)) {
// 				setStudentIDError("รูปแบบไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง เช่น B6xxxxx");
// 			} else {
// 				setStudentIDError(""); // Clear the error message when valid
// 			}
// 		}
	
// 		if (name === "phoneNumber") {
// 			setinputPhoneNumber(value);
// 			const phoneNumberRegex = /^(06|08|09)\d{8}$/;
// 			if (value && !phoneNumberRegex.test(value)) {
// 				setPhoneNumberError("รูปแบบไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
// 			} else {
// 				setPhoneNumberError(""); // Clear the error message when valid
// 			}
// 		}
// 	};


// 	async function Summit() {


// 		if (!inputName) {
// 			message.error("กรุณากรอกชื่อและนามสกุล");
// 			return;
// 		}
// 		if (!inputStudentID) {
// 			message.error("กรุณากรอกรหัสนักศึกษา");
// 			return;
// 		}

// 		if (!selectDegree) {
// 			message.error("กรุณาเลือกระดับการศึกษา");
// 			return;
// 		}

// 		if (!selectfaculty) {
// 			message.error("กรุณาเลือกสำนักวิชา");
// 			return;
// 		}
// 		if (!selectmajor) {
// 			message.error("กรุณาเลือกสาขาวิชา");
// 			return;
// 		}

// 		const formattedDetails =
// 			details === "radio1" ? "เพิ่มวิชา Add more courses" :
// 				details === "radio2" ? "ลดรายวิชา Change study group" :
// 					details === "radio3" ? "เปลี่ยนกลุ่มวิชา Reduce courses" :
// 						details;

// 		if (!formattedDetails) {
// 			message.error("กรุณาเลือกประเภทคำร้องที่ต้องการยื่น เช่น เพิ่มวิชา ลดวิชา หรือเปลี่ยนกลุ่ม");
// 			return;
// 		}
// 		if (!courseCode) {
// 			message.error("กรุณากรอกรหัสวิชา");
// 			return;
// 		}
// 		if (!courseTitle) {
// 			message.error("กรุณากรอกชื่อวิชา");
// 			return;
// 		}
// 		if (!group) {
// 			message.error("กรุณากรอกกลุ่มเรียน");
// 			return;
// 		}

// 		if (!oldGroup && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกกลุ่มเรียนกลุ่มเดิม");
// 			return;
// 		}
// 		if (!newGroup && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกกลุ่มเรียนกลุ่มใหม่");
// 			return;
// 		}

// 		if (!specifyReason && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกเหตุผล");
// 			return;
// 		}

// 		if (!inputPhoneNumber) {
// 			message.error("กรุณากรอกเบอร์โทรศัพท์");
// 			return;
// 		}

// 		const data1: Data = {
// 			inputName: inputName,
// 			inputStudentID: inputStudentID,
// 			degree: selectDegree,
// 			faculty: selectfaculty,
// 			major: selectmajor,
// 			details: formattedDetails,
// 			courseCode: courseCode,
// 			courseTitle: courseTitle,
// 			group: group,
// 			oldGroup: oldGroup,
// 			newGroup: newGroup,
// 			specifyReason: specifyReason,
// 			inputPhoneNumber: inputPhoneNumber,

// 		}

// 		console.log("data all", data1)


// 		const url = "http://localhost:8000/CreatePrintStory"
// 		const response = await fetch(url, {
// 			method: 'POST',
// 			body: JSON.stringify(data1),   //json to string
// 			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
// 		});

// 		if (response.ok) {
// 			alert("ส่งสำเร็จ")
// 			navigate('/');
// 		}
// 		else {
// 			alert("ส่งข้อมูลไม่สำเร็จ");
// 		}


// 	}


// 	const getdegree = async () => {
// 		const res = await GetDegree();
// 		if (res) {
// 			setdegree(res);
// 		}
// 	};

// 	useEffect(() => {
// 		getdegree();
// 	}, []);

// 	console.log(degree)


// 	const getfaculty = async () => {
// 		const res = await GetFaculty();
// 		if (res) {
// 			setFaculty(res.data.data);
// 		}
// 	};

// 	useEffect(() => {
// 		getfaculty();
// 		console.log(faculty)
// 	}, []);



// 	const getmajor = async () => {

// 		const facultystr: number = +selectfaculty;

// 		if (facultystr == 0) {
// 			return
// 		}

// 		const res = await GetMajorByFacultyID(facultystr);
// 		console.log(res)
// 		// debugger

// 		if (res) {
// 			setMajor(res.data.data);
// 		}

// 	};

// 	useEffect(() => {
// 		getmajor();
// 	}, [selectfaculty]);



// 	const handleBackHome = () => {
// 		navigate('/homeRequest');
// 	};

// 	return (
// 		<>
// 			<section
// 				style={{
// 					marginTop: '70px',
// 					padding: '40px 60px',
// 					backgroundColor: '#f7f8fc',
// 					minHeight: '100vh',
// 				}}
// 			>
// 				{/* Header */}
// 				<div
// 					style={{
// 						background: '#1a2e5a',
// 						padding: '15px 20px',
// 						color: 'white',
// 						display: 'flex',
// 						alignItems: 'center',
// 						borderRadius: '10px',
// 						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					<div style={{ display: "flex", alignItems: "center", color: "#fff", margin: 0 }}>
// 						{/* ไอคอนพิมพ์ */}
// 						<i
// 							className="fa-solid fa-print fa-2xl"
// 							style={{ color: "#fff", marginRight: "20px" }}
// 						></i>

// 						{/* ข้อความ */}
// 						<div style={{ flex: 1 }}>
// 							<h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา</h3>
// 							<h4 style={{ marginTop: "0px" }}>
// 								Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
// 							</h4>
// 						</div>

// 						{/* ไอคอนย้อนกลับ */}
// 						<div onClick={handleBackHome} >
// 							<i
// 								className="fa-solid fa-circle-left fa-2xl icon-style"
// 								style={{ marginLeft: "665px" }}
// 							></i>
// 						</div>

// 					</div>

// 				</div> {/* <-- Header end*/}


// 				{/* Content */}
// 				<div
// 					style={{
// 						marginTop: '10px',
// 						backgroundColor: '#ffffff',
// 						borderRadius: '10px',
// 						padding: '25px 35px',
// 						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					{/* ส่วนของการกรอกข้อมูล */}
// 					<div className='form-input'
// 						style=
// 						{{
// 							margin: 0,
// 							fontSize: "17px",
// 							fontWeight: "900"

// 						}}
// 					>
// 						<p style={{
// 							marginTop: "0px",
// 							display: "flex"
// 						}}>
// 							เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator
// 						</p>

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "10px",
// 						}}>
// 							ข้าพเจ้า
// 							<input
// 								value={inputName}
// 								onChange={e => setInputName(e.target.value)}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px"
// 								}}
// 								type="text"
// 								name="text"
// 								className="input"
// 								placeholder="กรุณาหรอกชื่อและนามสกุล">

// 							</input>


// 							เลขประจำตัว
// 							<input
//             				    value={inputStudentID}
//             				    onChange={handleInputChange}
//             				    required
//             				    style={{
//             				        marginTop: "0px",
//             				        marginRight: "20px",

//             				    }}
// 								name='studentID'
//             				    type="text"
//             				    className="input"
//             				    placeholder="กรุณากรอกรหัสนักศึกษา"
//             				/>



// 							เป็นนักศึกษาระดับ a student at
// 							<div className="selectdegree">
// 								<select
// 									name="format"
// 									required
// 									onChange={(e) => setSelectDegree(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกระดับการศึกษา</option>
// 									{...degree.map((item, index) => {
// 										console.log(item.Degree)
// 										return (
// 											<option key={index} value={item.Degree}>
// 												{item.Degree}
// 											</option>
// 										)
// 									})}

// 								</select>
// 							</div>
// 						</p>
// 						{studentIDError && (
// 							<span style={{ color: "red", fontSize: "12px", marginTop: "5px",marginLeft:"475px", display: "block" }}>
// 								{studentIDError}
// 							</span>
// 						)}


// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex"
// 						}}
// 						>
// 							สังกัดสำนักวิชา the Institute of
// 							<div className="selectfaculty">
// 								<select name="format"
// 									required
// 									onChange={(e) => setSelectFaculty(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกสำนักวิชา</option>
// 									{
// 										faculty.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option
// 													key={index} value={item.ID}>{item.FacultyName}
// 												</option>

// 											)
// 										})
// 									}
// 								</select>

// 							</div>

// 							สาขาวิชา / หลักสูตร School of
// 							<div className="select">
// 								<select name="format"
// 									required
// 									onChange={(e) => setSelectmajor(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกสาขา</option>
// 									{
// 										major.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option key={index} value={item.ID}>{item.major_name}</option>
// 											)
// 										})
// 									}
// 								</select>
// 							</div>
// 						</p>


// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px"
// 						}}
// 						>
// 							มีความประสงค์จะลงทะเบียน wish to register :
// 						</p>



// 						{/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
// 						<div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
// 							<div
// 								style={{
// 									background: '#8096BC',
// 									padding: '10px 20px',
// 									// color: "black",
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '10px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>
// 								<p >1. รายการ Details </p>
// 							</div>
// 							{/* ส่วนของอาจารย์ */}
// 							{/* <div
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

// 						</div>


// 						{/* กล่องสี่เหลี่ยมใน cotent*/}
// 						<div style={{ display: "flex", justifyContent: "center" }}>
// 							{/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 */}
// 							<div
// 								style={{
// 									background: '#DFDFE2',
// 									padding: '10px 20px',
// 									marginTop: '5px',
// 									// color: 'white',
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '10px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>


// 								{/* ส่วนของ Checkbox */}
// 								<div style={{ marginTop: "15px", marginBottom: "20px" }}>
// 									{/* Radio Buttons */}
// 									<div style={{ display: "flex", gap: "20px" }}>

// 										{/* Checkbox 1 เพิ่มวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													value="radio1"
// 													onChange={e => {
// 														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
// 														setoldGroup(""); // รีเซ็ต oldGroup
// 														setnewGroup("");
// 														setspecifyReason("");
// 													}}
// 													required
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio1"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio1">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เพิ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox 1 เพิ่มวิชา */}

// 										{/* Checkbox  ลดรายวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													value="radio2"
// 													onChange={e => {
// 														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
// 														setoldGroup(""); // รีเซ็ต oldGroup
// 														setnewGroup("");
// 														setspecifyReason("");
// 													}}
// 													required
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio2"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio2">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">ลดรายวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox  ลดรายวิชา  start*/}


// 										{/* Checkbox  เปลี่ยนกลุ่มวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio3"
// 													name="radio-group"
// 													value="radio3"
// 													onChange={e => setdetails(e.target.value)}
// 													required
// 												/>
// 												<label className="radio-b__label" htmlFor="radio3">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox  เปลี่ยนกลุ่มวิชา  start*/}

// 									</div>


// 									{/* Course Code start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>รหัสวิชา Course Code</span>
// 										<div >
// 											<input
// 												value={courseCode}
// 												onChange={e => setcourseCode(e.target.value)}
// 												required
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}} type="text"
// 												name="text"
// 												className="input"
// 												placeholder="กรุณากรอกรหัสวิชา">

// 											</input>
// 										</div>
// 									</div> {/* Course Code end*/}



// 									{/* Course Title start */}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>ชื่อวิชา(ภาษาอังกฤษ) Course Title</span>
// 										<div className="selectsubject">
// 											<input
// 												value={courseTitle}

// 												onChange={e => setcourseTitle(e.target.value)}
// 												required
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}}

// 												type="text"
// 												name="text"
// 												className="input"
// 												placeholder="กรุณากรอกชื่อวิชา">

// 											</input>
// 										</div>
// 									</div> {/* <<-- Course Title end */}


// 									{/* Group start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>กลุ่ม Group No.</span>
// 										<input
// 											value={group}

// 											onChange={e => setgroup(e.target.value)}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "60px"
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="กลุ่ม">

// 										</input>
// 									</div> {/* <<---Group end*/}


// 									{/* ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											color: "red"
// 										}}
// 									>
// 										<span>กรณีเปลี่ยนกลุ่ม In the case of changing study group</span>
// 									</div> {/* <<-- ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}


// 									{/* input กลุ่มเดิมคือกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											justifyContent: "center"
// 										}}
// 									>
// 										<span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
// 										<input
// 											value={oldGroup}
// 											onChange={e => setoldGroup(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "80px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="กลุ่มเดิม">

// 										</input>
// 									</div> {/* <<-- input กลุ่มเดิมคือกลุ่ม end*/}


// 									{/* input กลุ่มใหม่คือกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											justifyContent: "center"
// 										}}
// 									>
// 										<span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
// 										<input
// 											value={newGroup}
// 											onChange={e => setnewGroup(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "80px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="กลุ่มใหม่">

// 										</input>
// 									</div> 	{/* <<-- input กลุ่มใหม่คือกลุ่ม end*/}


// 									{/* <<-- input ระบุเหตุผล start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>ระบุเหตุผล Specify reason</span>
// 										<input
// 											value={specifyReason}
// 											onChange={e => setspecifyReason(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "480px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="เหตุผล">

// 										</input>

// 									</div> {/* <<-- input ระบุเหตุผล end*/}

// 								</div> {/* <<--ส่วนของ Checkbox  end*/}

// 							</div> {/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 end/}

                    
                    
//                     //ส่วนของอาจารย์
//                     {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 */}
// 							{/*<div
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

// 						</div> {/* <-- กล่องสี่เหลี่ยมใน cotent end*/}


// 						{/* <<-- ข้อความเฉยๆ start*/}
// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px",
// 							marginLeft: "50px"
// 						}}>
// 							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
// 						</p>  {/* <<-- ข้อความเฉยๆ end*/}


// 						{/* ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง start*/}
// 						<p
// 							style={{
// 								marginTop: "30px",
// 								display: "flex",
// 								marginBottom: "10px",
// 								marginLeft: "150px"
// 							}}
// 						>

// 							นักศึกษาลงชื่อ Signature
// 							<input
// 								value={inputName}
// 								onChange={e => setInputName(e.target.value)}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}}
// 								type="text"
// 								name="text"
// 								className="input"
// 								placeholder="ลงชื่อ">
// 							</input>


// 							โทรศัพท์ Tel. No.
// 							<input
// 								value={inputPhoneNumber}
// 								onChange={handleInputChange}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}}
// 								type="text"
// 								name="phoneNumber"
// 								className="input"
// 								placeholder="กรุณากรอกเบอร์โทรศัพท์"
// 							>
// 							</input>


// 						</p> {/* <<-- ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง end*/}

// 						{phoneNumberError && (
// 							<span style={{ color: "red", fontSize: "12px", marginTop: "1px",marginLeft:"820px", display: "block" }}>
// 								{phoneNumberError}
// 							</span>
// 						)}

// 						{/* button print start*/}
// 						<button
// 							className="Documents-btn"
// 							type="submit"
// 							value="Submit"
// 							onClick={Summit}
// 						>
// 							<span className="folderContainer">
// 								<svg
// 									className="fileBack"
// 									width="146"
// 									height="113"
// 									viewBox="0 0 146 113"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
// 										fill="url(#paint0_linear_117_4)"
// 									>
// 									</path>

// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_4"
// 											x1="0"
// 											y1="0"
// 											x2="72.93"
// 											y2="95.4804"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="#8F88C2"></stop>
// 											<stop offset="1" stop-color="#5C52A2"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>
// 								<svg
// 									className="filePage"
// 									width="88"
// 									height="99"
// 									viewBox="0 0 88 99"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_6"
// 											x1="0"
// 											y1="0"
// 											x2="81"
// 											y2="160.5"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="white"></stop>
// 											<stop offset="1" stop-color="#686868"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>

// 								<svg
// 									className="fileFront"
// 									width="160"
// 									height="79"
// 									viewBox="0 0 160 79"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
// 										fill="url(#paint0_linear_117_5)"
// 									></path>

// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_5"
// 											x1="38.7619"
// 											y1="8.71323"
// 											x2="66.9106"
// 											y2="82.8317"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="#C3BBFF"></stop>
// 											<stop offset="1" stop-color="#51469A"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>
// 							</span>
// 							<p className="text">Print</p>
// 						</button> {/* <<-- button print start*/}


// 					</div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

// 				</div> {/* <-- Content end*/}

// 			</section>

// 		</>
// 	);
// };

// export default Request1;




























// //2024-12-28  15.03 น.
// // บังคับกรอก ถ้ากรอกผิดห้ามส่ง

// import React, { useEffect, useState } from 'react';
// import { message } from 'antd';
// import "./Request1.css"
// import { FacultyInterface } from '../../../interfaces/Faculty';
// import { DegreeInterface } from '../../../interfaces/Degree';
// import { GetDegree, GetFaculty, GetMajorByFacultyID } from '../../../services/https';
// import { MajorInterface } from '../../../interfaces/Major';
// import { useNavigate } from 'react-router-dom';


// interface Data {
// 	inputName?: string
// 	inputStudentID?: string
// 	degree?: string
// 	faculty?: string
// 	major?: string
// 	details?: string
// 	courseCode?: string
// 	courseTitle?: string
// 	group?: string
// 	oldGroup?: string
// 	newGroup?: string
// 	specifyReason?: string
// 	inputPhoneNumber?: string
// }


// const Request1: React.FC = () => {


// 	const navigate = useNavigate();

// 	const [inputName, setInputName] = useState("");
// 	const [inputStudentID, setInputStudentID] = useState("")

// 	const [degree, setdegree] = useState<DegreeInterface[]>([]);
// 	const [selectDegree, setSelectDegree] = useState("");

// 	const [faculty, setFaculty] = useState<FacultyInterface[]>([]);
// 	const [selectfaculty, setSelectFaculty] = useState("")

// 	const [major, setMajor] = useState<MajorInterface[]>([]);
// 	const [selectmajor, setSelectmajor] = useState("")

// 	const [details, setdetails] = useState('')
// 	const isGroupChangeDisabled = details === "radio1" || details === "radio2";

// 	const [courseCode, setcourseCode] = useState("")
// 	const [courseTitle, setcourseTitle] = useState("")
// 	const [group, setgroup] = useState("")
// 	const [oldGroup, setoldGroup] = useState("")
// 	const [newGroup, setnewGroup] = useState("")
// 	const [specifyReason, setspecifyReason] = useState("")
// 	const [inputPhoneNumber, setinputPhoneNumber] = useState("")

// 	const [studentIDError, setStudentIDError] = useState("");
// 	const [groupError, setGroupError] = useState("");
// 	const [phoneNumberError, setPhoneNumberError] = useState("");


// 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		const { name, value } = e.target;
	
// 		if (name === "studentID") {
// 			setInputStudentID(value);
// 			const studentIDRegex = /^[CcBb]\d{7}$/;
// 			if (value && !studentIDRegex.test(value)) {
// 				setStudentIDError("รูปแบบไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง เช่น B6xxxxx");
// 			} else {
// 				setStudentIDError(""); // Clear the error message when valid
// 			}
// 		}
	
// 		if (name === "phoneNumber") {
// 			setinputPhoneNumber(value);
// 			const phoneNumberRegex = /^(06|08|09)\d{8}$/;
// 			if (value && !phoneNumberRegex.test(value)) {
// 				setPhoneNumberError("รูปแบบไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
// 			} else {
// 				setPhoneNumberError(""); // Clear the error message when valid
// 			}
// 		}


// 		// if (name === "group") {
// 		// 	setgroup(value);
// 		// 	const groupRegex = /^[1-100]\d*$/;
// 		// 	if (value && !groupRegex.test(value)) {
//         //     	setGroupError("กรุณากรอกเฉพาะตัวเลข");
// 		// 	} else {
// 		// 		setGroupError(""); // Clear the error message when valid
// 		// 	}
// 		// }
		
// 		if (name === "group") {
// 			setgroup(value);
		
// 			const numericValue = parseInt(value, 10);
		
// 			if (!/^\d*$/.test(value)) {

// 				setGroupError("กรุณากรอกเฉพาะตัวเลข");

// 			} else if (numericValue < 1 || numericValue > 100) {
		
// 				setGroupError("กรุณากรอกตัวเลขระหว่าง 1 ถึง 100");

// 			} else {
			
// 				setGroupError("");
// 			}
// 		}
		

// 	};


// 	async function Summit() {


// 		if (!inputName) {
// 			message.error("กรุณากรอกชื่อและนามสกุล");
// 			return;
// 		}
// 		if (!inputStudentID) {
// 			message.error("กรุณากรอกรหัสนักศึกษา");
// 			return;
// 		}
// 		if (studentIDError) {
// 			message.error("กรุณากรอกรหัสนักศึกษาให้ถูกต้อง");
// 			return;
// 		}

// 		if (!selectDegree) {
// 			message.error("กรุณาเลือกระดับการศึกษา");
// 			return;
// 		}

// 		if (!selectfaculty) {
// 			message.error("กรุณาเลือกสำนักวิชา");
// 			return;
// 		}
// 		if (!selectmajor) {
// 			message.error("กรุณาเลือกสาขาวิชา");
// 			return;
// 		}

// 		const formattedDetails =
// 			details === "radio1" ? "เพิ่มวิชา Add more courses" :
// 				details === "radio2" ? "ลดรายวิชา Change study group" :
// 					details === "radio3" ? "เปลี่ยนกลุ่มวิชา Reduce courses" :
// 						details;

// 		if (!formattedDetails) {
// 			message.error("กรุณาเลือกประเภทคำร้องที่ต้องการยื่น เช่น เพิ่มวิชา ลดวิชา หรือเปลี่ยนกลุ่ม");
// 			return;
// 		}
// 		if (!courseCode) {
// 			message.error("กรุณากรอกรหัสวิชา");
// 			return;
// 		}
// 		if (!courseTitle) {
// 			message.error("กรุณากรอกชื่อวิชา");
// 			return;
// 		}
// 		if (!group) {
// 			message.error("กรุณากรอกกลุ่มเรียน");
// 			return;
// 		}
// 		if (groupError) {
// 			message.error("กรุณากรอกกลุ่มให้ถูกต้อง");
// 			return;
// 		}

// 		if (!oldGroup && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกกลุ่มเรียนกลุ่มเดิม");
// 			return;
// 		}
// 		if (!newGroup && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกกลุ่มเรียนกลุ่มใหม่");
// 			return;
// 		}

// 		if (!specifyReason && !isGroupChangeDisabled) {
// 			message.error("กรุณากรอกเหตุผล");
// 			return;
// 		}

// 		if (!inputPhoneNumber) {
// 			message.error("กรุณากรอกเบอร์โทรศัพท์");
// 			return;
// 		}
// 		if (phoneNumberError) {
// 			message.error("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
// 			return;
// 		}

// 		const data1: Data = {
// 			inputName: inputName,
// 			inputStudentID: inputStudentID,
// 			degree: selectDegree,
// 			faculty: selectfaculty,
// 			major: selectmajor,
// 			details: formattedDetails,
// 			courseCode: courseCode,
// 			courseTitle: courseTitle,
// 			group: group,
// 			oldGroup: oldGroup,
// 			newGroup: newGroup,
// 			specifyReason: specifyReason,
// 			inputPhoneNumber: inputPhoneNumber,

// 		}

// 		console.log("data all", data1)


// 		const url = "http://localhost:8000/CreatePrintStory"
// 		const response = await fetch(url, {
// 			method: 'POST',
// 			body: JSON.stringify(data1),   //json to string
// 			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
// 		});

// 		if (response.ok) {
// 			alert("ส่งสำเร็จ")
// 			navigate('/');
// 		}
// 		else {
// 			alert("ส่งข้อมูลไม่สำเร็จ");
// 		}


// 	}


// 	const getdegree = async () => {
// 		const res = await GetDegree();
// 		if (res) {
// 			setdegree(res);
// 		}
// 	};

// 	useEffect(() => {
// 		getdegree();
// 	}, []);

// 	console.log(degree)


// 	const getfaculty = async () => {
// 		const res = await GetFaculty();
// 		if (res) {
// 			setFaculty(res.data.data);
// 		}
// 	};

// 	useEffect(() => {
// 		getfaculty();
// 		console.log(faculty)
// 	}, []);



// 	const getmajor = async () => {

// 		const facultystr: number = +selectfaculty;

// 		if (facultystr == 0) {
// 			return
// 		}

// 		const res = await GetMajorByFacultyID(facultystr);
// 		console.log(res)
// 		// debugger

// 		if (res) {
// 			setMajor(res.data.data);
// 		}

// 	};

// 	useEffect(() => {
// 		getmajor();
// 	}, [selectfaculty]);



// 	const handleBackHome = () => {
// 		navigate('/homeRequest');
// 	};

// 	return (
// 		<>
// 			<section
// 				style={{
// 					marginTop: '70px',
// 					padding: '40px 60px',
// 					backgroundColor: '#f7f8fc',
// 					minHeight: '100vh',
// 				}}
// 			>
// 				{/* Header */}
// 				<div
// 					style={{
// 						background: '#1a2e5a',
// 						padding: '15px 20px',
// 						color: 'white',
// 						display: 'flex',
// 						alignItems: 'center',
// 						borderRadius: '10px',
// 						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					<div style={{ display: "flex", alignItems: "center", color: "#fff", margin: 0 }}>
// 						{/* ไอคอนพิมพ์ */}
// 						<i
// 							className="fa-solid fa-print fa-2xl"
// 							style={{ color: "#fff", marginRight: "20px" }}
// 						></i>

// 						{/* ข้อความ */}
// 						<div style={{ flex: 1 }}>
// 							<h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา</h3>
// 							<h4 style={{ marginTop: "0px" }}>
// 								Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
// 							</h4>
// 						</div>

// 						{/* ไอคอนย้อนกลับ */}
// 						<div onClick={handleBackHome} >
// 							<i
// 								className="fa-solid fa-circle-left fa-2xl icon-style"
// 								style={{ marginLeft: "665px" }}
// 							></i>
// 						</div>

// 					</div>

// 				</div> {/* <-- Header end*/}


// 				{/* Content */}
// 				<div
// 					style={{
// 						marginTop: '10px',
// 						backgroundColor: '#ffffff',
// 						borderRadius: '10px',
// 						padding: '25px 35px',
// 						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
// 					}}
// 				>


// 					{/* ส่วนของการกรอกข้อมูล */}
// 					<div className='form-input'
// 						style=
// 						{{
// 							margin: 0,
// 							fontSize: "17px",
// 							fontWeight: "900"

// 						}}
// 					>
// 						<p style={{
// 							marginTop: "0px",
// 							display: "flex"
// 						}}>
// 							เรียน อาจารย์ผู้รับผิดชอบวิชารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา Dear Instructor / Course coordinator
// 						</p>

// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "10px",
// 						}}>
// 							ข้าพเจ้า
// 							<input
// 								value={inputName}
// 								onChange={e => setInputName(e.target.value)}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px"
// 								}}
// 								type="text"
// 								name="text"
// 								className="input"
// 								placeholder="กรุณาหรอกชื่อและนามสกุล">

// 							</input>


// 							เลขประจำตัว
// 							<input
//             				    value={inputStudentID}
//             				    onChange={handleInputChange}
//             				    required
//             				    style={{
//             				        marginTop: "0px",
//             				        marginRight: "20px",

//             				    }}
// 								name='studentID'
//             				    type="text"
//             				    className="input"
//             				    placeholder="กรุณากรอกรหัสนักศึกษา"
//             				/>



// 							เป็นนักศึกษาระดับ a student at
// 							<div className="selectdegree">
// 								<select
// 									name="format"
// 									required
// 									onChange={(e) => setSelectDegree(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกระดับการศึกษา</option>
// 									{...degree.map((item, index) => {
// 										console.log(item.Degree)
// 										return (
// 											<option key={index} value={item.Degree}>
// 												{item.Degree}
// 											</option>
// 										)
// 									})}

// 								</select>
// 							</div>
// 						</p>
// 						{studentIDError && (
// 							<span style={{ color: "red", fontSize: "12px", marginTop: "5px",marginLeft:"475px", display: "block" }}>
// 								{studentIDError}
// 							</span>
// 						)}


// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex"
// 						}}
// 						>
// 							สังกัดสำนักวิชา the Institute of
// 							<div className="selectfaculty">
// 								<select name="format"
// 									required
// 									onChange={(e) => setSelectFaculty(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกสำนักวิชา</option>
// 									{
// 										faculty.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option
// 													key={index} value={item.ID}>{item.FacultyName}
// 												</option>

// 											)
// 										})
// 									}
// 								</select>

// 							</div>

// 							สาขาวิชา / หลักสูตร School of
// 							<div className="select">
// 								<select name="format"
// 									required
// 									onChange={(e) => setSelectmajor(e.target.value)}>
// 									<option value="" disabled selected>กรุณาเลือกสาขา</option>
// 									{
// 										major.map((item, index) => {
// 											console.log(item)
// 											return (
// 												<option key={index} value={item.ID}>{item.major_name}</option>
// 											)
// 										})
// 									}
// 								</select>
// 							</div>
// 						</p>


// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px"
// 						}}
// 						>
// 							มีความประสงค์จะลงทะเบียน wish to register :
// 						</p>



// 						{/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
// 						<div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
// 							<div
// 								style={{
// 									background: '#8096BC',
// 									padding: '10px 20px',
// 									// color: "black",
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '10px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>
// 								<p >1. รายการ Details </p>
// 							</div>
// 							{/* ส่วนของอาจารย์ */}
// 							{/* <div
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

// 						</div>


// 						{/* กล่องสี่เหลี่ยมใน cotent*/}
// 						<div style={{ display: "flex", justifyContent: "center" }}>
// 							{/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 */}
// 							<div
// 								style={{
// 									background: '#DFDFE2',
// 									padding: '10px 20px',
// 									marginTop: '5px',
// 									// color: 'white',
// 									display: 'flex',
// 									alignItems: 'center',
// 									borderRadius: '10px',
// 									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// 									width: "790px"
// 								}}
// 							>


// 								{/* ส่วนของ Checkbox */}
// 								<div style={{ marginTop: "15px", marginBottom: "20px" }}>
// 									{/* Radio Buttons */}
// 									<div style={{ display: "flex", gap: "20px" }}>

// 										{/* Checkbox 1 เพิ่มวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													value="radio1"
// 													onChange={e => {
// 														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
// 														setoldGroup(""); // รีเซ็ต oldGroup
// 														setnewGroup("");
// 														setspecifyReason("");
// 													}}
// 													required
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio1"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio1">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เพิ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox 1 เพิ่มวิชา */}

// 										{/* Checkbox  ลดรายวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													value="radio2"
// 													onChange={e => {
// 														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
// 														setoldGroup(""); // รีเซ็ต oldGroup
// 														setnewGroup("");
// 														setspecifyReason("");
// 													}}
// 													required
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio2"
// 													name="radio-group"
// 												/>
// 												<label className="radio-b__label" htmlFor="radio2">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">ลดรายวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox  ลดรายวิชา  start*/}


// 										{/* Checkbox  เปลี่ยนกลุ่มวิชา  start*/}
// 										<div className="radio-input">
// 											<div className="radio-b">
// 												<input
// 													type="radio"
// 													className="radio-b__input"
// 													id="radio3"
// 													name="radio-group"
// 													value="radio3"
// 													onChange={e => setdetails(e.target.value)}
// 													required
// 												/>
// 												<label className="radio-b__label" htmlFor="radio3">
// 													<div className="radio-b__custom">
// 														<span className="radio-b__custom-fill"></span>
// 													</div>
// 													<span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
// 												</label>
// 											</div>
// 										</div> {/* <<-- Checkbox  เปลี่ยนกลุ่มวิชา  start*/}

// 									</div>


// 									{/* Course Code start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>รหัสวิชา Course Code</span>
// 										<div >
// 											<input
// 												value={courseCode}
// 												onChange={e => setcourseCode(e.target.value)}
// 												required
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}} type="text"
// 												name="text"
// 												className="input"
// 												placeholder="กรุณากรอกรหัสวิชา">

// 											</input>
// 										</div>
// 									</div> {/* Course Code end*/}



// 									{/* Course Title start */}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>ชื่อวิชา(ภาษาอังกฤษ) Course Title</span>
// 										<div className="selectsubject">
// 											<input
// 												value={courseTitle}

// 												onChange={e => setcourseTitle(e.target.value)}
// 												required
// 												style={{
// 													marginTop: "0px",
// 													marginRight: "20px"
// 												}}

// 												type="text"
// 												name="text"
// 												className="input"
// 												placeholder="กรุณากรอกชื่อวิชา">

// 											</input>
// 										</div>
// 									</div> {/* <<-- Course Title end */}


// 									{/* Group start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "5px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>กลุ่ม Group No.</span>
// 										<input
// 											value={group}

// 											onChange={handleInputChange}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
									
// 												width: "60px"
// 											}}
// 											type="text"
// 											name="group"
// 											className="input"
// 											placeholder="กลุ่ม">

// 										</input>
// 									</div> {/* <<---Group end*/}
// 									{groupError && (
//             						    <span style={{ color: "red", fontSize: "12px",marginLeft:"160px",display: "block" }}>
//             						        {groupError}
//             						    </span>
//             						)}


// 									{/* ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											// color: "rebeccapurple"
// 										}}
// 									>
// 										<span>***กรณีเปลี่ยนกลุ่ม In the case of changing study group***</span>
// 									</div> {/* <<-- ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}


// 									{/* input กลุ่มเดิมคือกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											justifyContent: "center"
// 										}}
// 									>
// 										<span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
// 										<input
// 											value={oldGroup}
// 											onChange={e => setoldGroup(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "80px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="กลุ่มเดิม">

// 										</input>
// 									</div> {/* <<-- input กลุ่มเดิมคือกลุ่ม end*/}


// 									{/* input กลุ่มใหม่คือกลุ่ม start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px",
// 											justifyContent: "center"
// 										}}
// 									>
// 										<span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
// 										<input
// 											value={newGroup}
// 											onChange={e => setnewGroup(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "80px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="กลุ่มใหม่">

// 										</input>
// 									</div> 	{/* <<-- input กลุ่มใหม่คือกลุ่ม end*/}


// 									{/* <<-- input ระบุเหตุผล start*/}
// 									<div
// 										style={{
// 											marginTop: "30px",
// 											marginBottom: "20px",
// 											display: "flex",
// 											alignItems: "center",
// 											gap: "10px"
// 										}}
// 									>
// 										<span>ระบุเหตุผล Specify reason</span>
// 										<input
// 											value={specifyReason}
// 											onChange={e => setspecifyReason(e.target.value)}
// 											disabled={isGroupChangeDisabled}
// 											required
// 											style={{
// 												marginTop: "0px",
// 												marginRight: "20px",
// 												width: "480px",
// 												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
// 											}}
// 											type="text"
// 											name="text"
// 											className="input"
// 											placeholder="เหตุผล">

// 										</input>

// 									</div> {/* <<-- input ระบุเหตุผล end*/}

// 								</div> {/* <<--ส่วนของ Checkbox  end*/}

// 							</div> {/* <--กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 1 end/}

                    
                    
//                     //ส่วนของอาจารย์
//                     {/* กล่องสี่เหลี่ยมใน cotent ส่วน ส่วนข้อมูล ช่องที่ 2 */}
// 							{/*<div
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

// 						</div> {/* <-- กล่องสี่เหลี่ยมใน cotent end*/}


// 						{/* <<-- ข้อความเฉยๆ start*/}
// 						<p style={{
// 							marginTop: "30px",
// 							display: "flex",
// 							marginBottom: "20px",
// 							marginLeft: "50px"
// 						}}>
// 							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
// 						</p>  {/* <<-- ข้อความเฉยๆ end*/}


// 						{/* ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง start*/}
// 						<p
// 							style={{
// 								marginTop: "30px",
// 								display: "flex",
// 								marginBottom: "10px",
// 								marginLeft: "150px"
// 							}}
// 						>

// 							นักศึกษาลงชื่อ Signature
// 							<input
// 								value={inputName}
// 								onChange={e => setInputName(e.target.value)}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}}
// 								type="text"
// 								name="text"
// 								className="input"
// 								placeholder="ลงชื่อ">
// 							</input>


// 							โทรศัพท์ Tel. No.
// 							<input
// 								value={inputPhoneNumber}
// 								onChange={handleInputChange}
// 								required
// 								style={{
// 									marginTop: "0px",
// 									marginRight: "20px",

// 								}}
// 								type="text"
// 								name="phoneNumber"
// 								className="input"
// 								placeholder="กรุณากรอกเบอร์โทรศัพท์"
// 							>
// 							</input>


// 						</p> {/* <<-- ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง end*/}

// 						{phoneNumberError && (
// 							<span style={{ color: "red", fontSize: "12px", marginTop: "1px",marginLeft:"820px", display: "block" }}>
// 								{phoneNumberError}
// 							</span>
// 						)}

// 						{/* button print start*/}
// 						<button
// 							className="Documents-btn"
// 							type="submit"
// 							value="Submit"
// 							onClick={Summit}
// 						>
// 							<span className="folderContainer">
// 								<svg
// 									className="fileBack"
// 									width="146"
// 									height="113"
// 									viewBox="0 0 146 113"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
// 										fill="url(#paint0_linear_117_4)"
// 									>
// 									</path>

// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_4"
// 											x1="0"
// 											y1="0"
// 											x2="72.93"
// 											y2="95.4804"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="#8F88C2"></stop>
// 											<stop offset="1" stop-color="#5C52A2"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>
// 								<svg
// 									className="filePage"
// 									width="88"
// 									height="99"
// 									viewBox="0 0 88 99"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_6"
// 											x1="0"
// 											y1="0"
// 											x2="81"
// 											y2="160.5"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="white"></stop>
// 											<stop offset="1" stop-color="#686868"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>

// 								<svg
// 									className="fileFront"
// 									width="160"
// 									height="79"
// 									viewBox="0 0 160 79"
// 									fill="none"
// 									xmlns="http://www.w3.org/2000/svg"
// 								>
// 									<path
// 										d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
// 										fill="url(#paint0_linear_117_5)"
// 									></path>

// 									<defs>
// 										<linearGradient
// 											id="paint0_linear_117_5"
// 											x1="38.7619"
// 											y1="8.71323"
// 											x2="66.9106"
// 											y2="82.8317"
// 											gradientUnits="userSpaceOnUse"
// 										>
// 											<stop stop-color="#C3BBFF"></stop>
// 											<stop offset="1" stop-color="#51469A"></stop>
// 										</linearGradient>
// 									</defs>
// 								</svg>
// 							</span>
// 							<p className="text">Print</p>
// 						</button> {/* <<-- button print start*/}


// 					</div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

// 				</div> {/* <-- Content end*/}

// 			</section>

// 		</>
// 	);
// };

// export default Request1;























//2024-12-28  15.03 น.
// Test ดึงไอดี Request

import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import "./Request1.css"
import { FacultyInterface } from '../../../interfaces/Faculty';
import { DegreeInterface } from '../../../interfaces/Degree';
import { GetDegree, GetFaculty, GetMajorByFacultyID } from '../../../services/https';
import { MajorInterface } from '../../../interfaces/Major';
import { useLocation, useNavigate } from 'react-router-dom';


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
	requestID?: number
}


const Request1: React.FC = () => {


	const navigate = useNavigate();

	const [inputName, setInputName] = useState("");
	const [inputStudentID, setInputStudentID] = useState("")

	const [degree, setdegree] = useState<DegreeInterface[]>([]);
	const [selectDegree, setSelectDegree] = useState("");

	const [faculty, setFaculty] = useState<FacultyInterface[]>([]);
	const [selectfaculty, setSelectFaculty] = useState("")

	const [major, setMajor] = useState<MajorInterface[]>([]);
	const [selectmajor, setSelectmajor] = useState("")

	const [details, setdetails] = useState('')
	const isGroupChangeDisabled = details === "radio1" || details === "radio2";

	const [courseCode, setcourseCode] = useState("")
	const [courseTitle, setcourseTitle] = useState("")
	const [group, setgroup] = useState("")
	const [oldGroup, setoldGroup] = useState("")
	const [newGroup, setnewGroup] = useState("")
	const [specifyReason, setspecifyReason] = useState("")
	const [inputPhoneNumber, setinputPhoneNumber] = useState("")

	const [studentIDError, setStudentIDError] = useState("");
	const [groupError, setGroupError] = useState("");
	const [phoneNumberError, setPhoneNumberError] = useState("");


	const location = useLocation();
  	const { RequestID } = location.state || {}; // Retrieve RequestID from state
	
  	console.log("Received RequestID:", RequestID);

	


	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
	
		if (name === "studentID") {
			setInputStudentID(value);
			const studentIDRegex = /^[CcBb]\d{7}$/;
			if (value && !studentIDRegex.test(value)) {
				setStudentIDError("รูปแบบไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง เช่น B6xxxxx");
			} else {
				setStudentIDError(""); // Clear the error message when valid
			}
		}
	
		if (name === "phoneNumber") {
			setinputPhoneNumber(value);
			const phoneNumberRegex = /^(06|08|09)\d{8}$/;
			if (value && !phoneNumberRegex.test(value)) {
				setPhoneNumberError("รูปแบบไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง");
			} else {
				setPhoneNumberError(""); // Clear the error message when valid
			}
		}

		
		if (name === "group") {
			setgroup(value);
		
			const numericValue = parseInt(value, 10);
		
			if (!/^\d*$/.test(value)) {

				setGroupError("กรุณากรอกเฉพาะตัวเลข");

			} else if (numericValue < 1 || numericValue > 100) {
		
				setGroupError("กรุณากรอกตัวเลขระหว่าง 1 ถึง 100");

			} else {
			
				setGroupError("");
			}
		}
		

	};


	async function Summit() {


		if (!inputName) {
			message.error("กรุณากรอกชื่อและนามสกุล");
			return;
		}
		if (!inputStudentID) {
			message.error("กรุณากรอกรหัสนักศึกษา");
			return;
		}
		if (studentIDError) {
			message.error("กรุณากรอกรหัสนักศึกษาให้ถูกต้อง");
			return;
		}

		if (!selectDegree) {
			message.error("กรุณาเลือกระดับการศึกษา");
			return;
		}

		if (!selectfaculty) {
			message.error("กรุณาเลือกสำนักวิชา");
			return;
		}
		if (!selectmajor) {
			message.error("กรุณาเลือกสาขาวิชา");
			return;
		}

		const formattedDetails =
			details === "radio1" ? "เพิ่มวิชา Add more courses" :
				details === "radio2" ? "ลดรายวิชา Change study group" :
					details === "radio3" ? "เปลี่ยนกลุ่มวิชา Reduce courses" :
						details;

		if (!formattedDetails) {
			message.error("กรุณาเลือกประเภทคำร้องที่ต้องการยื่น เช่น เพิ่มวิชา ลดวิชา หรือเปลี่ยนกลุ่ม");
			return;
		}
		if (!courseCode) {
			message.error("กรุณากรอกรหัสวิชา");
			return;
		}
		if (!courseTitle) {
			message.error("กรุณากรอกชื่อวิชา");
			return;
		}
		if (!group) {
			message.error("กรุณากรอกกลุ่มเรียน");
			return;
		}
		if (groupError) {
			message.error("กรุณากรอกกลุ่มให้ถูกต้อง");
			return;
		}

		if (!oldGroup && !isGroupChangeDisabled) {
			message.error("กรุณากรอกกลุ่มเรียนกลุ่มเดิม");
			return;
		}
		if (!newGroup && !isGroupChangeDisabled) {
			message.error("กรุณากรอกกลุ่มเรียนกลุ่มใหม่");
			return;
		}

		if (!specifyReason && !isGroupChangeDisabled) {
			message.error("กรุณากรอกเหตุผล");
			return;
		}

		if (!inputPhoneNumber) {
			message.error("กรุณากรอกเบอร์โทรศัพท์");
			return;
		}
		if (phoneNumberError) {
			message.error("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง");
			return;
		}



		const data1: Data = {
			inputName: inputName,
			inputStudentID: inputStudentID,
			degree: selectDegree,
			faculty: selectfaculty,
			major: selectmajor,
			details: formattedDetails,
			courseCode: courseCode,
			courseTitle: courseTitle,
			group: group,
			oldGroup: oldGroup,
			newGroup: newGroup,
			specifyReason: specifyReason,
			inputPhoneNumber: inputPhoneNumber,
			requestID: RequestID,
		}
		// // eslint-disable-next-line no-debugger
		// debugger
		console.log("data all", data1)


		const url = "http://localhost:8000/CreatePrintStory"
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data1),   //json to string
			headers: { 'Content-Type': 'application/json; charset=UTF-8' }
		});

		if (response.ok) {
			message.success("ส่งสำเร็จ")
			navigate('/');
		}
		else {
			message.error("ส่งข้อมูลไม่สำเร็จ");
		}


	}


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

		const facultystr: number = +selectfaculty;

		if (facultystr == 0) {
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



	const handleBackHome = () => {
		navigate('/homeRequest');
	};

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
						<div onClick={handleBackHome} >
							<i
								className="fa-solid fa-circle-left fa-2xl icon-style"
								style={{ marginLeft: "665px" }}
							></i>
						</div>

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
							display: "flex",
							marginBottom: "10px",
						}}>
							ข้าพเจ้า
							<input
								value={inputName}
								onChange={e => setInputName(e.target.value)}
								required
								style={{
									marginTop: "0px",
									marginRight: "20px"
								}}
								type="text"
								name="text"
								className="input"
								placeholder="กรุณาหรอกชื่อและนามสกุล">

							</input>


							เลขประจำตัว
							<input
            				    value={inputStudentID}
            				    onChange={handleInputChange}
            				    required
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",

            				    }}
								name='studentID'
            				    type="text"
            				    className="input"
            				    placeholder="กรุณากรอกรหัสนักศึกษา"
            				/>



							เป็นนักศึกษาระดับ a student at
							<div className="selectdegree">
								<select
									name="format"
									required
									onChange={(e) => setSelectDegree(e.target.value)}>
									<option value="" disabled selected>กรุณาเลือกระดับการศึกษา</option>
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
						{studentIDError && (
							<span style={{ color: "red", fontSize: "12px", marginTop: "5px",marginLeft:"475px", display: "block" }}>
								{studentIDError}
							</span>
						)}


						<p style={{
							marginTop: "30px",
							display: "flex"
						}}
						>
							สังกัดสำนักวิชา the Institute of
							<div className="selectfaculty">
								<select name="format"
									required
									onChange={(e) => setSelectFaculty(e.target.value)}>
									<option value="" disabled selected>กรุณาเลือกสำนักวิชา</option>
									{
										faculty.map((item, index) => {
											console.log(item)
											return (
												<option
													key={index} value={item.ID}>{item.FacultyName}
												</option>

											)
										})
									}
								</select>

							</div>

							สาขาวิชา / หลักสูตร School of
							<div className="select">
								<select name="format"
									required
									onChange={(e) => setSelectmajor(e.target.value)}>
									<option value="" disabled selected>กรุณาเลือกสาขา</option>
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
						}}
						>
							มีความประสงค์จะลงทะเบียน wish to register :
						</p>



						{/* กล่องสี่เหลี่ยมใน cotent ส่วน header */}
						<div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
							<div
								style={{
									background: '#8096BC',
									padding: '10px 20px',
									// color: "black",
									display: 'flex',
									alignItems: 'center',
									borderRadius: '10px',
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
									marginTop: '5px',
									// color: 'white',
									display: 'flex',
									alignItems: 'center',
									borderRadius: '10px',
									boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
									width: "790px"
								}}
							>


								{/* ส่วนของ Checkbox */}
								<div style={{ marginTop: "15px", marginBottom: "20px" }}>
									{/* Radio Buttons */}
									<div style={{ display: "flex", gap: "20px" }}>

										{/* Checkbox 1 เพิ่มวิชา  start*/}
										<div className="radio-input">
											<div className="radio-b">
												<input
													value="radio1"
													onChange={e => {
														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
														setoldGroup(""); // รีเซ็ต oldGroup
														setnewGroup("");
														setspecifyReason("");
													}}
													required
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
										</div> {/* <<-- Checkbox 1 เพิ่มวิชา */}

										{/* Checkbox  ลดรายวิชา  start*/}
										<div className="radio-input">
											<div className="radio-b">
												<input
													value="radio2"
													onChange={e => {
														setdetails(e.target.value); // ตั้งค่าข้อมูลใหม่ให้ details
														setoldGroup(""); // รีเซ็ต oldGroup
														setnewGroup("");
														setspecifyReason("");
													}}
													required
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
										</div> {/* <<-- Checkbox  ลดรายวิชา  start*/}


										{/* Checkbox  เปลี่ยนกลุ่มวิชา  start*/}
										<div className="radio-input">
											<div className="radio-b">
												<input
													type="radio"
													className="radio-b__input"
													id="radio3"
													name="radio-group"
													value="radio3"
													onChange={e => setdetails(e.target.value)}
													required
												/>
												<label className="radio-b__label" htmlFor="radio3">
													<div className="radio-b__custom">
														<span className="radio-b__custom-fill"></span>
													</div>
													<span className="radio-b__text">เปลี่ยนกลุ่มวิชา</span>
												</label>
											</div>
										</div> {/* <<-- Checkbox  เปลี่ยนกลุ่มวิชา  start*/}

									</div>


									{/* Course Code start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}
									>
										<span>รหัสวิชา Course Code</span>
										<div >
											<input
												value={courseCode}
												onChange={e => setcourseCode(e.target.value)}
												required
												style={{
													marginTop: "0px",
													marginRight: "20px"
												}} type="text"
												name="text"
												className="input"
												placeholder="กรุณากรอกรหัสวิชา">

											</input>
										</div>
									</div> {/* Course Code end*/}



									{/* Course Title start */}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}
									>
										<span>ชื่อวิชา(ภาษาอังกฤษ) Course Title</span>
										<div className="selectsubject">
											<input
												value={courseTitle}

												onChange={e => setcourseTitle(e.target.value)}
												required
												style={{
													marginTop: "0px",
													marginRight: "20px"
												}}

												type="text"
												name="text"
												className="input"
												placeholder="กรุณากรอกชื่อวิชา">

											</input>
										</div>
									</div> {/* <<-- Course Title end */}


									{/* Group start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "5px",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}
									>
										<span>กลุ่ม Group No.</span>
										<input
											value={group}

											onChange={handleInputChange}
											required
											style={{
												marginTop: "0px",
												marginRight: "20px",
									
												width: "60px"
											}}
											type="text"
											name="group"
											className="input"
											placeholder="กลุ่ม">

										</input>
									</div> {/* <<---Group end*/}
									{groupError && (
            						    <span style={{ color: "red", fontSize: "12px",marginLeft:"160px",display: "block" }}>
            						        {groupError}
            						    </span>
            						)}


									{/* ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px",
											// color: "rebeccapurple"
										}}
									>
										<span>***กรณีเปลี่ยนกลุ่ม In the case of changing study group***</span>
									</div> {/* <<-- ข้อความธรรมดาเฉยๆ กรณีเปลี่ยนกลุ่ม start*/}


									{/* input กลุ่มเดิมคือกลุ่ม start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px",
											justifyContent: "center"
										}}
									>
										<span>กลุ่มเดิมคือกลุ่ม the old group no. is</span>
										<input
											value={oldGroup}
											onChange={e => setoldGroup(e.target.value)}
											disabled={isGroupChangeDisabled}
											required
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "80px",
												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
											}}
											type="text"
											name="text"
											className="input"
											placeholder="กลุ่มเดิม">

										</input>
									</div> {/* <<-- input กลุ่มเดิมคือกลุ่ม end*/}


									{/* input กลุ่มใหม่คือกลุ่ม start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px",
											justifyContent: "center"
										}}
									>
										<span>กลุ่มใหม่คือกลุ่ม the new group no. is </span>
										<input
											value={newGroup}
											onChange={e => setnewGroup(e.target.value)}
											disabled={isGroupChangeDisabled}
											required
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "80px",
												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
											}}
											type="text"
											name="text"
											className="input"
											placeholder="กลุ่มใหม่">

										</input>
									</div> 	{/* <<-- input กลุ่มใหม่คือกลุ่ม end*/}


									{/* <<-- input ระบุเหตุผล start*/}
									<div
										style={{
											marginTop: "30px",
											marginBottom: "20px",
											display: "flex",
											alignItems: "center",
											gap: "10px"
										}}
									>
										<span>ระบุเหตุผล Specify reason</span>
										<input
											value={specifyReason}
											onChange={e => setspecifyReason(e.target.value)}
											disabled={isGroupChangeDisabled}
											required
											style={{
												marginTop: "0px",
												marginRight: "20px",
												width: "480px",
												cursor: isGroupChangeDisabled ? "not-allowed" : "auto",
											}}
											type="text"
											name="text"
											className="input"
											placeholder="เหตุผล">

										</input>

									</div> {/* <<-- input ระบุเหตุผล end*/}

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


						{/* <<-- ข้อความเฉยๆ start*/}
						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "20px",
							marginLeft: "50px"
						}}>
							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
						</p>  {/* <<-- ข้อความเฉยๆ end*/}


						{/* ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง start*/}
						<p
							style={{
								marginTop: "30px",
								display: "flex",
								marginBottom: "10px",
								marginLeft: "150px"
							}}
						>

							นักศึกษาลงชื่อ Signature
							<input
								value={inputName}
								onChange={e => setInputName(e.target.value)}
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",

								}}
								type="text"
								name="text"
								className="input"
								placeholder="ลงชื่อ">
							</input>


							โทรศัพท์ Tel. No.
							<input
								value={inputPhoneNumber}
								onChange={handleInputChange}
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",

								}}
								type="text"
								name="phoneNumber"
								className="input"
								placeholder="กรุณากรอกเบอร์โทรศัพท์"
							>
							</input>


						</p> {/* <<-- ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง end*/}

						{phoneNumberError && (
							<span style={{ color: "red", fontSize: "12px", marginTop: "1px",marginLeft:"820px", display: "block" }}>
								{phoneNumberError}
							</span>
						)}

						{/* button print start*/}
						<button
							className="Documents-btn"
							type="submit"
							value="Submit"
							onClick={Summit}
						>
							<span className="folderContainer">
								<svg
									className="fileBack"
									width="146"
									height="113"
									viewBox="0 0 146 113"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
										fill="url(#paint0_linear_117_4)"
									>
									</path>

									<defs>
										<linearGradient
											id="paint0_linear_117_4"
											x1="0"
											y1="0"
											x2="72.93"
											y2="95.4804"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#8F88C2"></stop>
											<stop offset="1" stop-color="#5C52A2"></stop>
										</linearGradient>
									</defs>
								</svg>
								<svg
									className="filePage"
									width="88"
									height="99"
									viewBox="0 0 88 99"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
									<defs>
										<linearGradient
											id="paint0_linear_117_6"
											x1="0"
											y1="0"
											x2="81"
											y2="160.5"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="white"></stop>
											<stop offset="1" stop-color="#686868"></stop>
										</linearGradient>
									</defs>
								</svg>

								<svg
									className="fileFront"
									width="160"
									height="79"
									viewBox="0 0 160 79"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
										fill="url(#paint0_linear_117_5)"
									></path>

									<defs>
										<linearGradient
											id="paint0_linear_117_5"
											x1="38.7619"
											y1="8.71323"
											x2="66.9106"
											y2="82.8317"
											gradientUnits="userSpaceOnUse"
										>
											<stop stop-color="#C3BBFF"></stop>
											<stop offset="1" stop-color="#51469A"></stop>
										</linearGradient>
									</defs>
								</svg>
							</span>
							<p className="text">Print</p>
						</button> {/* <<-- button print start*/}


					</div> {/* <-- ส่วนของการกรอกข้อมูล end*/}

				</div> {/* <-- Content end*/}

			</section>

		</>
	);
};

export default Request1;
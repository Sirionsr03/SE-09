// // Test ดึงข้อมูล วิชา วันที่ และเกสาร pdf
// import React, { useEffect, useState } from 'react';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest } from '../../services/https/index'; 
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';




// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]); 
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));




//   useEffect(() => {

    
//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         if (res.status === 200) {
//           setRequests(res.data);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };


//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes(); 
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest(); 
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };


//     // const fetchCourses = async () => {
//     //   try {
//     //     // ใช้ Promise.all เพื่อดึงข้อมูล courses จากแต่ละ request
//     //     const coursesData = await Promise.all(
//     //       requests.map(async (request) => {
//     //         // ตรวจสอบว่า request.ID มีค่าและเรียกใช้ GetCoursesByRequestID ด้วย request.ID
//     //         if (request.ID) {
//     //           const res = await GetCoursesByRequestID(request.ID);
//     //           return res ? res : null;
//     //         }
//     //         return null;
//     //       })
//     //     );
    
//     //     // กรองค่า null และเก็บข้อมูลที่ได้ใน state
//     //     setcourse(coursesData.filter((course) => course !== null).flat());
//     //   } catch (error) {
//     //     console.error('Error fetching courses:', error);
//     //   }
//     // };
    
    
    



//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//     // fetchCourses();
//     // fetchRequestsAndPDFAandCourse();
//   }, [studentID]);



//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };
  

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };





//   return (
//     <>
//       <section
//         style={{
//           marginTop: '70px',
//           padding: '40px 60px',
//           backgroundColor: '#f7f8fc',
//           minHeight: '100vh',
//         }}
//       >
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
//           <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//         </div>

//         <div
//           style={{
//             marginTop: '10px',
//             backgroundColor: '#ffffff',
//             borderRadius: '10px',
//             padding: '25px 35px',
//             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>
//             รายการทั้งหมด
//           </p>

//           <table
//             style={{
//               width: '100%',
//               borderCollapse: 'collapse',
//               textAlign: 'center',
//               overflow: 'hidden',
//               borderRadius:"10px"
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: '#8096bc', color: 'white' }}>
//                 <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//                 <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//                 <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//                 <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//                 <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//                 <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//                 <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((request, index) => (
                
//                 <tr
//                   key={request.ID }
//                   style={{
//                     backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff',
//                     lineHeight: '20px',
//                   }}
//                 >
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.course?.CourseCode || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
//                   <td
//                     style={{
//                       padding: '10px',
//                       borderBottom: '1px solid #dee2e6',
//                       color: request.Note ? '#dc3545' : 'inherit',
//                       fontWeight: request.Note ? 'bold' : 'normal',
//                     }}
//                   >
//                     {request.Note || '-'}
//                   </td>
//                 </tr>

//               ))}
//             </tbody>


//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RequestDetail;










// // Test ดึงข้อมูล วิชา วันที่ และเกสาร pdf
// import React, { useEffect, useState } from 'react';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID } from '../../services/https/index'; 
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';

// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [group, setGroup] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]); 
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         if (res.status === 200) {
//           const requestsWithCourses = await Promise.all(
//             res.data.map(async (request: RequestInterface) => {
//               if (request.ID) {
//                 const courseRes = await GetCoursesByRequestID(request.ID);
//                 console.log("datacourse" ,courseRes)
//                 request.CourseID = courseRes.courses.data || null; 
                
//               }
//               console.log("return",request)
//               return request;
              
//             })
//           );
//           console.log("beforcheck",requestsWithCourses)
//           setRequests(requestsWithCourses);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes(); 
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest(); 
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };

//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//   }, [studentID]);

//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };

//   return (
//     <>
//       <section
//         style={{
//           marginTop: '70px',
//           padding: '40px 60px',
//           backgroundColor: '#f7f8fc',
//           minHeight: '100vh',
//         }}
//       >
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
//           <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//         </div>

//         <div
//           style={{
//             marginTop: '10px',
//             backgroundColor: '#ffffff',
//             borderRadius: '10px',
//             padding: '25px 35px',
//             boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
//           }}
//         >
//           <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>
//             รายการทั้งหมด
//           </p>

//           <table
//             style={{
//               width: '100%',
//               borderCollapse: 'collapse',
//               textAlign: 'center',
//               overflow: 'hidden',
//               borderRadius:"10px"
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
//                 <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//                 <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//                 <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//                 <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//                 <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//                 <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//                 <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//                 <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((request, index) => (
//                 <tr
//                   key={request.ID }
//                   style={{
//                     backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff',
//                     lineHeight: '20px',
//                   }}
//                 >
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course.Group || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.PrintStory?.DocumentPath || "-"}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                   <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{ request.PrintStory?.CreateAt ||"-"}</td>
//                   <td
//                     style={{
//                       padding: '10px',
//                       borderBottom: '1px solid #dee2e6',
//                       color: request.Note ? '#dc3545' : 'inherit',
//                       fontWeight: request.Note ? 'bold' : 'normal',
//                     }}
//                   >
//                     {request.Note || '-'}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </>
//   );
// };

// export default RequestDetail;





// import React, { useEffect, useState } from 'react';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID, GetPrintStoryByRequestID } from '../../services/https/index';
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]);
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   useEffect(() => {

//     // const fetchRequests = async () => {
//     //   try {
//     //     const res = await GetRequestsByStudentID(studentID);
//     //     if (res.status === 200) {
//     //       const requestsWithCourses = await Promise.all(
//     //         res.data.map(async (request: RequestInterface) => {
//     //           if (request.ID) {
//     //             const courseRes = await GetCoursesByRequestID(request.ID);
//     //             request.CourseID = courseRes.courses.data || null;
//     //             request.Course.Group = courseRes.courses.data?.group || "-";

//     //             const pdf = await GetPrintStoryByRequestID(request.ID);
//     //             request.ID = pdf.data || null;
//     //             request.PrintStory.CreateAt = pdf.data?.CreateAt || "-";
//     //             request.PrintStory.DocumentPath = pdf.data?.DocumentPath || "-";
//     //             console.log("pdf" , pdf)
//     //           }
//     //           return request;
//     //         })
//     //       );
//     //       setRequests(requestsWithCourses);
//     //     } else {
//     //       console.error('Failed to fetch requests:', res);
//     //     }
//     //   } catch (error) {
//     //     console.error('Error fetching requests:', error);
//     //   }
//     // };

//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         if (res.status === 200) {
//           const requestsWithCourses = await Promise.all(
//             res.data.map(async (request: RequestInterface) => {
//               if (request.ID) {
//                 try {
//                   const courseRes = await GetCoursesByRequestID(request.ID);
//                   request.CourseID = courseRes.courses.data || null;
//                   request.Course.Group = courseRes.courses.data?.group || "-";
//                 } catch (courseError) {
//                   console.error('Error fetching courses:', courseError);
//                   request.CourseID = null;
//                   request.Course.Group = "-";
//                 }
    
//                 try {
//                   const pdf = await GetPrintStoryByRequestID(request.ID);
//                   request.PrintStory = {
//                     ID: pdf.data || null,
//                     CreateAt: pdf.data?.CreateAt || "-",
//                     DocumentPath: pdf.data?.DocumentPath || "-"
//                   };
//                 } catch (pdfError) {
//                   console.error('Error fetching PDF:', pdfError);
//                   request.PrintStory = {
//                     CreateAt: "-",
//                     DocumentPath: "-"
//                   };
//                 }
//               }
//               return request;
//             })
//           );
//           setRequests(requestsWithCourses);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };
    



    

//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes();
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest();
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };

//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//   }, [studentID]);

//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };

//   return (
//     <section style={{ marginTop: '70px', padding: '40px 60px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
//       <div style={{ background: '#1a2e5a', padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//       </div>

//       <div style={{ marginTop: '10px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '25px 35px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
//         <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>รายการทั้งหมด</p>

//         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', overflow: 'hidden', borderRadius: "10px" }}>
//           <thead>
//             <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
//               <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//               <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//               <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//               <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//               <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//               <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr key={request.ID} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff', lineHeight: '20px' }}>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course.Group || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.DocumentPath ? (
//                     <div>
//                       <Viewer
//                         fileUrl={request.PrintStory.DocumentPath}
//                         plugins={[defaultLayoutPluginInstance]}
//                       />
//                       <a
//                         href={request.PrintStory.DocumentPath}
//                         download={`document_${index + 1}.pdf`}
//                         style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
//                       >
//                         ดาวน์โหลด
//                       </a>
//                     </div>
//                   ) : "-"}
//                 </td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.PrintStory?.CreateAt || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', color: request.Note ? '#dc3545' : 'inherit', fontWeight: request.Note ? 'bold' : 'normal' }}>{request.Note || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default RequestDetail;
















// import React, { useEffect, useState } from 'react';
// import { pdfjs } from 'react-pdf';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID, GetPrintStoryByRequestID } from '../../services/https/index';
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Set PDF.js worker source
// pdfjs.GlobalWorkerOptions.workerSrc = '/path-to-your-public-folder/pdf.worker.min.js';

// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]);
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   useEffect(() => {
//     // Fetch requests
//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         console.log('Fetched requests:', res);
//         if (res.status === 200) {
//           const requestsWithCourses = await Promise.all(
//             res.data.map(async (request: RequestInterface) => {
//               console.log('Processing request:', request);
//               if (request.ID) {
//                 // Fetch course data
//                 try {
//                   const courseRes = await GetCoursesByRequestID(request.ID);
//                   console.log("course", courseRes);
//                   request.CourseID = courseRes.courses.data || null;
//                   request.Course.Group = courseRes.courses.data?.group || "-";
//                 } catch (courseError) {
//                   console.error('Error fetching courses:', courseError);
//                   request.CourseID = null;
//                   request.Course.Group = "-";
//                 }
    
//                 // Fetch print story data
//                 try {
//                   const pdf = await GetPrintStoryByRequestID(request.ID);
//                   console.log("pdf", pdf);
                
//                   // Check if printStories is available
//                   if (pdf.printStories && pdf.printStories.length > 0) {
//                     request.PrintStory = pdf.printStories[0];  // Assuming we are using the first print story item
                
//                     // Now assign values to PrintStory properties
//                     request.PrintStory.PrintStoryCode = pdf.printStories[0]?.PrintStoryCode || "-";
//                     request.PrintStory.DocumentPath = pdf.printStories[0]?.DocumentPath || null; // You can also include DocumentPath if needed
//                   } else {
//                     // If no print story data is found, initialize an empty object
//                     request.PrintStory = {};
//                   }
//                 } catch (pdfError) {
//                   console.error('Error fetching print story:', pdfError);
//                   request.PrintStory = {};  // Initialize PrintStory as an empty object
//                 }
//               }
//               console.log("all", request);
//               return request;
//             })
//           );
//           setRequests(requestsWithCourses);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };
    
    


//     // Fetch request types
//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes();
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     // Fetch status requests
//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest();
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };

//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//   }, [studentID]);

//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };

//   return (
//     <section style={{ marginTop: '70px', padding: '40px 60px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
//       <div style={{ background: '#1a2e5a', padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//       </div>

//       <div style={{ marginTop: '10px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '25px 35px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
//         <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>รายการทั้งหมด</p>

//         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', overflow: 'hidden', borderRadius: "10px" }}>
//           <thead>
//             <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
//               <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//               <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//               <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//               <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//               <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//               <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr key={request.ID} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff', lineHeight: '20px' }}>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Group || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.DocumentPath ? (
//                     <div>
//                       {/* Render the PDF viewer */}
//                       <Viewer
//                         fileUrl={request.PrintStory?.DocumentPath}
//                         plugins={[defaultLayoutPluginInstance]} // This enables the default layout controls like zoom, navigation, etc.
//                       />
//                       {/* Provide a download link */}
//                       <a
//                         href={request.PrintStory?.DocumentPath}
//                         download={`document_${index + 1}.pdf`}
//                         style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
//                       >
//                         ดาวน์โหลด
//                       </a>
//                     </div>
//                   ) : (
//                     // If no document path, show a placeholder message
//                     <span>ไม่มีเอกสาร</span>
//                   )}
//                 </td>

//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.PrintStory?.PrintStoryCode || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', color: request.Note ? '#dc3545' : 'inherit', fontWeight: request.Note ? 'bold' : 'normal' }}>{request.Note || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default RequestDetail;







//ยังดึง pdf มาแสดงไม่ได้

// import React, { useEffect, useState } from 'react';
// import { pdfjs } from 'react-pdf';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID, GetPrintStoryByRequestID } from '../../services/https/index';
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';
// import { Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Set PDF.js worker source dynamically inside useEffect
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]);
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));


//   useEffect(() => {
//     // Fetch requests
//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         console.log('Fetched requests:', res);
//         if (res.status === 200) {
//           const requestsWithCourses = await Promise.all(
//             res.data.map(async (request: RequestInterface) => {
//               console.log('Processing request:', request);
//               if (request.ID) {
//                 // Fetch course data
//                 try {
//                   const courseRes = await GetCoursesByRequestID(request.ID);
//                   console.log("course", courseRes);
//                   request.CourseID = courseRes.courses.data || null;
//                   request.Course.Group = courseRes.courses.data?.group || "-";
//                 } catch (courseError) {
//                   console.error('Error fetching courses:', courseError);
//                   request.CourseID = null;
//                   request.Course.Group = "-";
//                 }
    
//                 // Fetch print story data
//                 try {
//                   const pdf = await GetPrintStoryByRequestID(request.ID);
//                   console.log("pdf", pdf);
                
//                   // Check if printStories is available
//                   if (pdf.printStories && pdf.printStories.length > 0) {
//                     request.PrintStory = pdf.printStories[0];  // Assuming we are using the first print story item
//                     request.PrintStory.PrintStoryCode = pdf.printStories[0]?.PrintStoryCode || "-";
//                     request.PrintStory.DocumentPath = pdf.printStories[0]?.DocumentPath || null; // You can also include DocumentPath if needed
//                   } else {
//                     request.PrintStory = {};
//                   }
//                 } catch (pdfError) {
//                   console.error('Error fetching print story:', pdfError);
//                   request.PrintStory = {};  // Initialize PrintStory as an empty object
//                 }
//               }
//               console.log("all", request);
//               return request;
//             })
//           );
//           setRequests(requestsWithCourses);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     // Fetch request types
//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes();
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     // Fetch status requests
//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest();
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };

//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//   }, [studentID]);

//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };

//   return (
//     <section style={{ marginTop: '70px', padding: '40px 60px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
//       <div style={{ background: '#1a2e5a', padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//       </div>

//       <div style={{ marginTop: '10px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '25px 35px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
//         <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>รายการทั้งหมด</p>

//         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', overflow: 'hidden', borderRadius: "10px" }}>
//           <thead>
//             <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
//               <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//               <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//               <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//               <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//               <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//               <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr key={request.ID} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff', lineHeight: '20px' }}>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Group || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.DocumentPath ? (
//                     <div>
//                       <a
//                         href={request.PrintStory?.DocumentPath}
//                         download={request.PrintStory?.DocumentPath} // Corrected this line
//                         style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
//                       >
//                         ดาวน์โหลด
//                       </a>
//                     </div>
//                   ) : (
//                     "-"
//                   )}
//                 </td>

//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.CreateAt 
//                     ? new Date(request.PrintStory.CreateAt).toISOString().split('T')[0] 
//                     : "-"}
//                 </td>

//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', color: request.Note ? '#dc3545' : 'inherit', fontWeight: request.Note ? 'bold' : 'normal' }}>{request.Note || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default RequestDetail;








// //ดึง pdf มาแสดงได้แล้ว
// import React, { useEffect, useState } from 'react';
// import { pdfjs } from 'react-pdf';
// import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID, GetPrintStoryByRequestID } from '../../services/https/index';
// import { RequestInterface } from '../../interfaces/Request';
// import { RequestTypeInterface } from '../../interfaces/RequestType';
// import { StatusRequestInterface } from '../../interfaces/StatusRequest';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Set PDF.js worker source dynamically inside useEffect
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const RequestDetail: React.FC = () => {
//   const [requests, setRequests] = useState<RequestInterface[]>([]);
//   const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]);
//   const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
//   const studentID = Number(localStorage.getItem("id"));



//   useEffect(() => {
//     // Fetch requests
//     const fetchRequests = async () => {
//       try {
//         const res = await GetRequestsByStudentID(studentID);
//         console.log('Fetched requests:', res);
//         if (res.status === 200) {
//           const requestsWithCourses = await Promise.all(
//             res.data.map(async (request: RequestInterface) => {
//               console.log('Processing request:', request);
//               if (request.ID) {
//                 // Fetch course data
//                 try {
//                   const courseRes = await GetCoursesByRequestID(request.ID);
//                   console.log("course", courseRes);
//                   request.CourseID = courseRes.courses.data || null;
//                   request.Course.Group = courseRes.courses.data?.group || "-";
//                 } catch (courseError) {
//                   console.error('Error fetching courses:', courseError);
//                   request.CourseID = null;
//                   request.Course.Group = "-";
//                 }
    
//                 // Fetch print story data
//                 try {
//                   const pdf = await GetPrintStoryByRequestID(request.ID);
//                   console.log("pdf", pdf);
                
//                   // Check if printStories is available
//                   if (pdf.printStories && pdf.printStories.length > 0) {
//                     request.PrintStory = pdf.printStories[0];  // Assuming we are using the first print story item
//                     request.PrintStory.PrintStoryCode = pdf.printStories[0]?.PrintStoryCode || "-";
//                     request.PrintStory.DocumentPath = pdf.printStories[0]?.DocumentPath || null; // You can also include DocumentPath if needed
//                   } else {
//                     request.PrintStory = {};
//                   }
//                 } catch (pdfError) {
//                   console.error('Error fetching print story:', pdfError);
//                   request.PrintStory = {};  // Initialize PrintStory as an empty object
//                 }
//               }
//               console.log("all", request);
//               return request;
//             })
//           );
//           setRequests(requestsWithCourses);
//         } else {
//           console.error('Failed to fetch requests:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching requests:', error);
//       }
//     };

//     // Fetch request types
//     const fetchRequestTypes = async () => {
//       try {
//         const res = await GetRequestTypes();
//         if (res.status === 200) {
//           setRequestTypes(res.data);
//         } else {
//           console.error('Failed to fetch request types:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching request types:', error);
//       }
//     };

//     // Fetch status requests
//     const fetchStatusRequest = async () => {
//       try {
//         const res = await GetStatusRequest();
//         if (res.status === 200) {
//           setstatusRequest(res.data);
//         } else {
//           console.error('Failed to fetch Status Request:', res);
//         }
//       } catch (error) {
//         console.error('Error fetching Status Request:', error);
//       }
//     };

//     fetchRequests();
//     fetchRequestTypes();
//     fetchStatusRequest();
//   }, [studentID]);

//   const getRequestTypeName = (id?: number) => {
//     if (id === undefined) return 'ไม่ทราบ';
//     const type = requestTypes.find((type) => type.ID === id);
//     return type ? type.RequestTypeName : 'ไม่ทราบ';
//   };

//   const getStatusRequestName = (id: number) => {
//     const type = statusRequest.find((type) => type.ID === id);
//     return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
//   };

//   return (
//     <section style={{ marginTop: '70px', padding: '40px 60px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
//       <div style={{ background: '#1a2e5a', padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
//       </div>

//       <div style={{ marginTop: '10px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '25px 35px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
//         <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>รายการทั้งหมด</p>

//         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', overflow: 'hidden', borderRadius: "10px" }}>
//           <thead>
//             <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
//               <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
//               <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
//               <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
//               <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
//               <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
//               <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
//               <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
//               <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request, index) => (
//               <tr key={request.ID} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff', lineHeight: '20px' }}>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Group || "-"}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
//                 {/* <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.DocumentPath ? (
//                     <div>
//                       <a
//                         href={filePath} // ใช้ path ที่ได้จาก backend
//                         target="_blank" // เปิดไฟล์ในแท็บใหม่
//                         rel="noopener noreferrer" // ป้องกันการโจมตีแบบ phishing
//                         download // อนุญาตให้ดาวน์โหลดไฟล์
//                         style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
//                       >
//                         ดูเอกสารที่เกี่ยวข้อง
//                       </a>
//                     </div>
//                   ) : (
//                     "-"
//                   )}
//                 </td> */}

// <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//   {request.PrintStory?.DocumentPath ? (
//     <div>
//       <a
//         href={`http://localhost:8000/pdf/${request.PrintStory.DocumentPath.replace("uploads_pdf\\", "").replace(/\\/g, "/")}`} // ตัด 'uploads_pdf\\' และแทน \ ด้วย /
//         target="_blank" // เปิดในแท็บใหม่
//         rel="noopener noreferrer" // ป้องกัน phishing
//         download // อนุญาตให้ดาวน์โหลด
//         style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
//       >
//         {request.PrintStory.DocumentPath.split("\\").pop()} {/* แสดงเฉพาะชื่อไฟล์ */}
//       </a>
//     </div>
//   ) : (
//     "-"
//   )}
// </td>





//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
//                   {request.PrintStory?.CreateAt 
//                     ? new Date(request.PrintStory.CreateAt).toISOString().split('T')[0] 
//                     : "-"}
//                 </td>

//                 <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', color: request.Note ? '#dc3545' : 'inherit', fontWeight: request.Note ? 'bold' : 'normal' }}>{request.Note || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default RequestDetail






//ดึง pdf มาแสดงได้แล้ว
import React, { useEffect, useState } from 'react';
import { GetRequestsByStudentID, GetRequestTypes, GetStatusRequest, GetCoursesByRequestID, GetPrintStoryByRequestID } from '../../services/https/index';
import { RequestInterface } from '../../interfaces/Request';
import { RequestTypeInterface } from '../../interfaces/RequestType';
import { StatusRequestInterface } from '../../interfaces/StatusRequest';



const RequestDetail: React.FC = () => {
  const [requests, setRequests] = useState<RequestInterface[]>([]);
  const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]);
  const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
  const studentID = Number(localStorage.getItem("id"));



  useEffect(() => {
    // Fetch requests
    const fetchRequests = async () => {
      try {
        const res = await GetRequestsByStudentID(studentID);
        console.log('Fetched requests:', res);
        if (res.status === 200) {
          const requestsWithCourses = await Promise.all(
            res.data.map(async (request: RequestInterface) => {
              console.log('Processing request:', request);
              if (request.ID) {
                // Fetch course data
                try {
                  const courseRes = await GetCoursesByRequestID(request.ID);
                  console.log("course", courseRes);
                  request.CourseID = courseRes.courses.data || null;
                  request.Course.Group = courseRes.courses.data?.group || "-";
                } catch (courseError) {
                  console.error('Error fetching courses:', courseError);
                  request.CourseID = null;
                  request.Course.Group = "-";
                }
    
                // Fetch print story data
                try {
                  const pdf = await GetPrintStoryByRequestID(request.ID);
                  console.log("pdf", pdf);
                
                  // Check if printStories is available
                  if (pdf.printStories && pdf.printStories.length > 0) {
                    request.PrintStory = pdf.printStories[0];  // Assuming we are using the first print story item
                    request.PrintStory.PrintStoryCode = pdf.printStories[0]?.PrintStoryCode || "-";
                    request.PrintStory.DocumentPath = pdf.printStories[0]?.DocumentPath || null; // You can also include DocumentPath if needed
                  } else {
                    request.PrintStory = {};
                  }
                } catch (pdfError) {
                  console.error('Error fetching print story:', pdfError);
                  request.PrintStory = {};  // Initialize PrintStory as an empty object
                }
              }
              console.log("all", request);
              return request;
            })
          );
          setRequests(requestsWithCourses);
        } else {
          console.error('Failed to fetch requests:', res);
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    // Fetch request types
    const fetchRequestTypes = async () => {
      try {
        const res = await GetRequestTypes();
        if (res.status === 200) {
          setRequestTypes(res.data);
        } else {
          console.error('Failed to fetch request types:', res);
        }
      } catch (error) {
        console.error('Error fetching request types:', error);
      }
    };

    // Fetch status requests
    const fetchStatusRequest = async () => {
      try {
        const res = await GetStatusRequest();
        if (res.status === 200) {
          setstatusRequest(res.data);
        } else {
          console.error('Failed to fetch Status Request:', res);
        }
      } catch (error) {
        console.error('Error fetching Status Request:', error);
      }
    };

    fetchRequests();
    fetchRequestTypes();
    fetchStatusRequest();
  }, [studentID]);

  const getRequestTypeName = (id?: number) => {
    if (id === undefined) return 'ไม่ทราบ';
    const type = requestTypes.find((type) => type.ID === id);
    return type ? type.RequestTypeName : 'ไม่ทราบ';
  };

  const getStatusRequestName = (id: number) => {
    const type = statusRequest.find((type) => type.ID === id);
    return type ? type.StatusRequestName : 'ไม่พบสถานะคำร้อง';
  };

  return (
    <section style={{ marginTop: '70px', padding: '40px 60px', backgroundColor: '#f7f8fc', minHeight: '100vh' }}>
      <div style={{ background: '#1a2e5a', padding: '15px 20px', color: 'white', display: 'flex', alignItems: 'center', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
      </div>

      <div style={{ marginTop: '10px', backgroundColor: '#ffffff', borderRadius: '10px', padding: '25px 35px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)' }}>
        <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>รายการทั้งหมด</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', overflow: 'hidden', borderRadius: "10px" }}>
          <thead>
            <tr style={{ backgroundColor: '#9B80BC', color: 'white' }}>
              <th style={{ padding: '10px', border: 'none' }}>ลำดับ</th>
              <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
              <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
              <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
              <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
              <th style={{ padding: '10px', border: 'none' }}>รายการ</th>
              <th style={{ padding: '10px', border: 'none' }}>เอกสารที่เกี่ยวข้อง</th>
              <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
              <th style={{ padding: '10px', border: 'none' }}>วันที่ยื่นคำร้อง</th>
              <th style={{ padding: '10px', border: 'none' }}>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={request.ID} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff', lineHeight: '20px' }}>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseCode || "-"}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.CourseName || "-"}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Credit || "-"}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{request.Course?.Group || "-"}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  {request.PrintStory?.DocumentPath ? (
                    <div>
                      <a
                        href={`http://localhost:8000/pdf/${request.PrintStory.DocumentPath.replace("uploads_pdf\\", "").replace(/\\/g, "/")}`} // ตัด 'uploads_pdf\\' และแทน \ ด้วย /
                        target="_blank" // เปิดในแท็บใหม่
                        rel="noopener noreferrer" // ป้องกัน phishing
                        download // อนุญาตให้ดาวน์โหลด
                        style={{ color: '#007bff', textDecoration: 'none', marginTop: '10px', display: 'block' }}
                      >
                        {request.PrintStory.DocumentPath.split("\\").pop()} {/* แสดงเฉพาะชื่อไฟล์ */}
                      </a>
                    </div>
                  ) : (
                    "-"
                  )}
                </td>

                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                  {request.PrintStory?.CreateAt 
                    ? new Date(request.PrintStory.CreateAt).toISOString().split('T')[0] 
                    : "-"}
                </td>

                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', color: request.Note ? '#dc3545' : 'inherit', fontWeight: request.Note ? 'bold' : 'normal' }}>{request.Note || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RequestDetail

//Tsst
import React, { useEffect, useState } from 'react';
import { GetPrintStory, GetRequestsByStudentID, GetRequestTypes, GetStatusRequest } from '../../services/https/index'; 
import { RequestInterface } from '../../interfaces/Request';
import { useLocation } from 'react-router-dom';
import { RequestTypeInterface } from '../../interfaces/RequestType';
import { StatusRequestInterface } from '../../interfaces/StatusRequest';


const RequestDetail: React.FC = () => {
  const [requests, setRequests] = useState<RequestInterface[]>([]);
  const [requestTypes, setRequestTypes] = useState<RequestTypeInterface[]>([]); 
  const [statusRequest, setstatusRequest] = useState<StatusRequestInterface[]>([]);
  const studentID = Number(localStorage.getItem("id"));

  const location = useLocation();
  const { datapdf } = location.state || {};




  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await GetRequestsByStudentID(studentID);
        if (res.status === 200) {
          setRequests(res.data);
        } else {
          console.error('Failed to fetch requests:', res);
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

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
    <>
      <section
        style={{
          marginTop: '0px',
          padding: '40px 60px',
          backgroundColor: '#f7f8fc',
          minHeight: '100vh',
        }}
      >
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
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>ผลการอนุมัติคำร้อง</h2>
        </div>

        <div
          style={{
            marginTop: '10px',
            backgroundColor: '#ffffff',
            borderRadius: '10px',
            padding: '25px 35px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "900", marginBottom: "15px" }}>
            รายการทั้งหมด
          </p>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'center',
              overflow: 'hidden',
              borderRadius:"10px"
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#8096bc', color: 'white' }}>
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
                <tr
                  key={request.ID}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff',
                    lineHeight: '20px',
                  }}
                >
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{index + 1}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{datapdf?.courseCode}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{datapdf?.courseTitle}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{datapdf?.credit}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{datapdf?.group}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getRequestTypeName(request.RequestTypeID)}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{getStatusRequestName(request.StatusRequestID)}</td>
                  <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{}</td>
                  <td
                    style={{
                      padding: '10px',
                      borderBottom: '1px solid #dee2e6',
                      color: request.Note ? '#dc3545' : 'inherit',
                      fontWeight: request.Note ? 'bold' : 'normal',
                    }}
                  >
                    {request.Note || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RequestDetail;

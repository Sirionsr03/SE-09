import React from 'react';

import NavbarHome from '../../../components/Navbar';





const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Request: React.FC = () => {


  return (
    <>
    <NavbarHome/>
    <section
      style={{
        marginTop: '70px',
        padding: '40px 60px',
        backgroundColor: '#f7f8fc',
        minHeight: '100vh',
      }}
    >
      {/* Header Section */}
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

        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>จัดการวิชา</h2>
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
        {/* <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'center',
            overflow: 'hidden',
            // borderRadius: '10px',
          }}
        > */}
          {/* <thead>
            <tr style={{ backgroundColor: '#8096bc', color: 'white' }}>
              <th style={{ padding: '10px', border: 'none' }}>รหัสวิชา</th>
              <th style={{ padding: '10px', border: 'none' }}>ชื่อวิชา</th>
              <th style={{ padding: '10px', border: 'none' }}>หน่วยกิต</th>
              <th style={{ padding: '10px', border: 'none' }}>กลุ่ม</th>
              <th style={{ padding: '10px', border: 'none' }}>จำนวนที่นั่งสูงสุด</th>
              <th style={{ padding: '10px', border: 'none' }}>สถานะ</th>
            </tr>
          </thead> */}
          {/* <tbody>
            {course.map((course) => (
              <tr
                key={course.id}
                style={{
                  backgroundColor: course.id % 2 === 0 ? '#ccd0d8' : '#f1f3f5',
                  lineHeight: '20px',
                }}
              >
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{course.courseCode}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{course.courseName}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{course.credit}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{course.group}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>{course.maxSeat}</td>
                <td
                  style={{
                    padding: '10px',
                    borderBottom: '1px solid #dee2e6',
                    color: course.status ? '#28a745' : '#dc3545',
                    fontWeight: 'bold',
                  }}
                >
                  {course.status ? 'เปิด' : 'ปิด'}
                </td>
              </tr>
            ))}
          </tbody> */}
        {/* </table> */}

        {/* Add Subject Button
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Button
            type="primary"
            style={{
              backgroundColor: '#2b579a',
              borderColor: '#2b579a',
              color: 'white',
              fontSize: '16px',
              padding: '10px 30px',
              borderRadius: '8px',
            }}
          
          >
            เพิ่มรายวิชา
          </Button>
        </div> */}
      </div>
    </section>
    </>
  );
};

export default Request;

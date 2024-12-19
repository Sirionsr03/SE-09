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





import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table, theme } from 'antd';

import { Header, Content } from 'antd/es/layout/layout';
import "./Request1.css"
import NavbarHome from '../../../components/Navbar';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{ required: true, message: `${title} is required.` }]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        onClick={toggleEdit}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const App = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      courseCode: '',
      courseName: '',
      credits: '',
      group: '',
      time: '',
      reason: '',
    },
  ]);

  const handleAdd = () => {
    const newData = {
      key: Date.now().toString(),
      courseCode: '',
      courseName: '',
      credits: '',
      group: '',
      time: '',
      reason: '',
    };
    setDataSource([...dataSource, newData]);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };

  const columns = [
    {
      title: 'รหัสวิชา (Course Code)',
      dataIndex: 'courseCode',
      editable: true,
    },
    {
      title: 'รายการ (Course Name)',
      dataIndex: 'courseName',
      editable: true,
    },
    {
      title: 'หน่วยกิต (Credits)',
      dataIndex: 'credits',
      editable: true,
    },
    {
      title: 'กลุ่ม (Group)',
      dataIndex: 'group',
      editable: true,
    },
    {
      title: 'เวลา (Time)',
      dataIndex: 'time',
      editable: true,
    },
    {
      title: 'หมายเหตุ (Reason)',
      dataIndex: 'reason',
      editable: true,
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Are you sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const tableColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <NavbarHome />
      <Header
        style={{
          backgroundColor: '#03194A',
          opacity: '0.91',
          width: '1440px',
          marginLeft: '48px',
        }}
      >
        <Content style={{ padding: '0 40px' }}>
          <div
            style={{
              minHeight: 80,
              padding: 20,
              borderRadius: theme.useToken().token.borderRadiusLG,
              marginTop: '95px',
            }}
          >
            <div style={{ marginTop: '-30px', color: '#fff', marginLeft: '-40px' }}>
              <h3>คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา </h3>
              <h4 style={{ marginTop: '-40px' }}>
                Request to Register for Additional Credits / to Change Study Group / to Reduce Courses
              </h4>
            </div>
            <div 
              style={{
                marginTop: '-45px',
                display: 'flex',
              }}
            >
              <i
                className="fa-solid fa-print fa-2xl"
                style={{ color: '#fff', marginLeft: '-90px' }}
              ></i>
                <i
                  className="fa-solid fa-circle-left fa-2xl"
                  style={{ color: '#ffff', marginLeft: '1320px'}}
                ></i>
       
            </div>
          </div>
        </Content>
      </Header>


      <Content style={{ padding: '0 40px', marginLeft: '8px' }}>
        <div
          style={{
            background: theme.useToken().token.colorBgContainer,
            backgroundColor: '#DFDFE2',
            marginTop: '0px',
            marginBottom: '40px',
            padding: 24,
            minHeight: '580px',
            width:'1440px'
          }}
        >
          <h4 style={{ marginLeft: '20px' }}>ปีการศึกษา 2567/2</h4>
          <div className="radio-input">
            {['เพิ่มวิชา', 'ลดรายวิชา', 'เปลี่ยนกลุ่มวิชา'].map((label, index) => (
              <div className="radio-b" key={index}>
                <input
                  type="radio"
                  className="radio-b__input"
                  id={`radio${index + 1}`}
                  name="radio-group"
                />
                <label className="radio-b__label" htmlFor={`radio${index + 1}`}>
                  <div className="radio-b__custom">
                    <span className="radio-b__custom-fill"></span>
                  </div>
                  <span className="radio-b__text">{label}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop:"-520px",marginLeft:"35px",marginRight:"35px"}}>
        <Table
            className="custom-table"
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={tableColumns}
            pagination={false}
        />
        <div className="input-container" onClick={handleAdd} type='primary'>
          <input placeholder="Add Item" type="text"/>
          <button className="button" style={{marginTop:"0px"}}> <p style={{marginTop:"-10px"}}>Add</p></button>
        </div>

      </div>

      <div style={{marginTop:"50px",marginLeft:"35px",marginRight:"35px"}}>
        <h3 style={{marginBottom:"20px"}}>รายวิชาที่ลงทะเบียนไว้แล้ว</h3>
        <Table
            className="custom-table2"
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={dataSource}
            columns={tableColumns}
            pagination={false}
        />
      </div>

      </Content>

    </>
  );
};

export default App;

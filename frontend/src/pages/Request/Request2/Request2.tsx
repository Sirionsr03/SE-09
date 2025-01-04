import "./Request2.css"
import { useNavigate } from 'react-router-dom';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const Request2: React.FC = () => {

	const navigate = useNavigate();

	const handleBackHome = () => {
		navigate('/homeRequest');
	};

	return (
		<>

			<section
				style={{
					// marginTop: '70px',
					// padding: '40px 260px',
					// backgroundColor: '#f7f8fc',
					// minHeight: '100vh',
					marginTop: '70px',
					padding: '40px 60px',
					backgroundColor: '#f7f8fc',
					minHeight: '100vh',
				}}
			>
				{/* Header */}
				<div
					style={{
						// background: '#1a2e5a',
						// padding: '15px 10px',
                        // width:'1470px',
						// color: 'white',
						// display: 'flex',
						// alignItems: 'center',
						// borderRadius: '10px',
						// boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
							style={{ color: "#fff", marginRight: "20px", marginLeft:"20px" }}
						></i>

						{/* ข้อความ */}
						<div >
							<h3>คำร้องขอลาระหว่างเรียน</h3>
							<h4 style={{ marginTop: "0px" }}>
                            Request an absence from a class
							</h4>
						</div>

						{/* ไอคอนย้อนกลับ */}
						<div onClick={handleBackHome} >
							<i
								className="fa-solid fa-circle-left fa-2xl icon-style"
								style={{ marginLeft: "1100px" }}
							></i>
						</div>

					</div>

				</div> {/* <-- Header end*/}


				{/* Content */}
				<div
					style={{
						// marginTop: '10px',
						// backgroundColor: '#ffffff',
						// borderRadius: '10px',
						// padding: '25px 35px',
						// boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
						marginTop: '10px',
						backgroundColor: '#ffffff',
						borderRadius: '10px',
						padding: '25px 35px',
						boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
					}}
				>

                    {/* Content ส่วนกรอกข้อมูล start*/}
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
							เรียน อาจารย์ผู้สอนรายวิชา To Lecterrer of the course
                            <input
								style={{
									marginTop: "0px",
									marginRight: "20px",
                                    width:"80vh"
								}}
								type="text"
								name="text"
								className="input"
								placeholder="กรุณาหรอกชื่ออาจารย์ผู้สอน">

							</input>

						</p>


                        <p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
							ข้าพเจ้า ( นาย / นาง / นางสาว ) I’m ( Mr. / Mrs. / Miss)
							<input
								style={{
									marginTop: "0px",
									marginRight: "20px",
                                    width:"350px"
								}}
								type="text"
								name="text"
								className="input"
								placeholder="กรุณาหรอกชื่อและนามสกุล">

							</input>


							เลขประจำตัว Student ID
							<input
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",

            				    }}
								name='studentID'
            				    type="text"
            				    className="input"
            				    placeholder="กรุณากรอกรหัสนักศึกษา"
            				/>

						</p>


                        <p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>

                            สังกัดสำนักวิชา the Institute of
							<div className="selectfaculty">
								<select name="format"
									onChange={(e) => setSelectFaculty(e.target.value)}>
									<option value="" disabled selected>กรุณาเลือกสำนักวิชา</option>
								</select>

							</div>

                            สาขาวิชา / หลักสูตร School of
							<div className="select">
								<select name="format"
									required
									onChange={(e) => setSelectmajor(e.target.value)}>
									<option value="" disabled selected>กรุณาเลือกสาขา</option>

								</select>
							</div>


                        </p>

                        <p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
                            อยู่ในความดูแลของ อาจารย์ที่ปรึกษา under the supervision of (advisor’s name)
							<input
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",
                                    width:"400px"
            				    }}
								name='advisor'
            				    type="text"
            				    className="input"
            				    placeholder="กรุณากรอกชื่อ อาจารยืที่ปรึกษา"
            				/>

                        </p>


                        <p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
                            คะแนนเฉลี่ยสะสม GPAX
							<input
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",
                                    width:"70px"
            				    }}
								name='advisor'
            				    type="text"
            				    className="input"
            			
            				/>

                        </p>


						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
							justifyContent:"center"
						}}>
							มีความประสงค์ขอลาระหว่างเรียนในภาคการศึกษาที่ 
							<input
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",
                                    width:"40px"
            				    }}
								name='advisor'
            				    type="text"
            				    className="input"
            				/>
							<div style={{fontSize:'25px', marginLeft:'-10px', marginTop:'-2px'}}>
								/
							</div>

							<input
            				    style={{
            				        marginTop: "0px",
            				        marginRight: "20px",
                                    width:"70px"
            				    }}
								name='advisor'
            				    type="text"
            				    className="input"
            				/>
							ในรายวิชาดังต่อไปนี้
						</p>

						<p style={{
							marginTop: "20px",
							display: "flex",
							marginBottom: "30px",
							justifyContent:"center"
						}}>
						Wish to request an absence from the class for the trimester year in the following course
						</p>

						<div style={{
							background: '#DFDFE2',
							padding: '15px 10px',
							width:'1400px',
							color: 'white',
							display: 'flex',
							alignItems: 'center',
							borderRadius: '10px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							opacity:"80%"
						}}>
							<p style={{color:'black'}}>

								รหัสวิชา Course code
							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									
								}} 
								type="text"
								name="text"
								className="input"
								placeholder="กรุณากรอกรหัสวิชา"
							>								
							</input>




							ชื่อวิชา( ภาษาอังกฤษ ) Course name
							<input

								required
								style={{
									marginTop: "0px",
									marginRight: "20px"
								}}
								type="text"
								name="text"
								className="input"
								placeholder="กรุณากรอกชื่อวิชา"
							>
							</input>

							กลุ่ม Section 
							<input
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

							</p>
						</div>

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						เนื่องจาก ( ระบุเหตุผลของการลา ) Specify the reason
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "920px"
								}}
								type="text"
								name="group"
								className="input"
								placeholder="ระบุเหตุผล">
							</input>
						</p>


						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						ตั้งแต่วันที่ 
						<Space direction="vertical" size={12} style={{ color: "#9999", marginTop: "-19px" }}>
							<RangePicker 
							className="custom-datepicker"
							/>
						</Space>


						พร้อมนี้ได้แนบหลักฐานประกอบการลาระหว่างเรียนมาด้วยแล้ว คือ
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "465px"
								}}
								type="text"
								name="group"
								className="input"
							>
							</input>
						</p>


						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						ในระหว่างที่ลาระหว่างเรียนสามารถติดต่อข้าพเจ้าได้ที่ During the absence, I can be contacted at. บ้านเลขที่ House number
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "100px"
								}}
								type="text"
								name="group"
								className="input"
							>
							</input>
						</p>

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						หมู่ที่ Village No.
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "60px"
								}}
								type="text"
								name="group"
								className="input"
							>
							</input>

							ซอย Alley
							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "360px"
								}}
								type="text"
								name="group"
								className="input"
							>
							</input>

							ถนน Road
							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "360px"
								}}
								type="text"
								name="group"
								className="input"
							>
							</input>	
						</p>


						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						ตำบล Subdistrict
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "260px"
								}}
								type="text"
								name="group"
								className="input"
								placeholder="กรุณากรอตำบล"
							>
							</input>

							อำเภอ District
							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "260px"
								}}
								type="text"
								name="group"
								className="input"
								placeholder="กรุณากรอกอำเภอ"
							>
							</input>

							จังหวัด Province

							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "260px"
								}}
								type="text"
								name="group"
								className="input"
								placeholder="กรุณาเลือกจังหวัด"
							>
							</input>
						</p>

						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "10px",
						}}>
						รหัสไปรษณีย์ Post code
						<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
									width: "160px"
								}}
								type="text"
								name="group"
								className="input"
								placeholder="กรุณากรอกรหัสไปรษณีย์"
							>
							</input>

							โทรศัพท์Tel. 
							<input
								required
								style={{
									marginTop: "0px",
									marginRight: "20px",
						
								}}
								type="text"
								name="group"
								className="input"
								placeholder="กรุณากรอกเบอร์โทรศัพท์"
							>
							</input>
						</p>


						{/* <<-- ข้อความเฉยๆ start*/}
						<p style={{
							marginTop: "30px",
							display: "flex",
							marginBottom: "20px",
							marginLeft: "450px"
						}}>
							จึงเรียนมาเพื่อโปรดพิจารณา For your consideration.
						</p>  {/* <<-- ข้อความเฉยๆ end*/}


						{/* ส่วนบรรทัดสุดท้าย เช่น ลงชื่อ เบอร์ วันนี้สร้าง start*/}
						<p
							style={{
								marginTop: "30px",
								display: "flex",
								marginBottom: "10px",
								marginLeft: "750px"
							}}
						>

							นักศึกษาลงชื่อ Signature
							<input
	
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
						</p>

                    </div> {/* <-- Content ส่วนกรอกข้อมูล end*/}



				</div> {/* <-- Content end*/}

			</section>

		</>
	);
};

export default Request2;
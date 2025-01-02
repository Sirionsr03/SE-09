import "./Request2.css"
import { useNavigate } from 'react-router-dom';


const Request2: React.FC = () => {

	const navigate = useNavigate();

	const handleBackHome = () => {
		navigate('/homeRequest');
	};

	return (
		<>

			<section
				style={{
					marginTop: '70px',
					padding: '40px 258px',
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
                                    width:"60vh"
								}}
								type="text"
								name="text"
								className="input"
								placeholder="กรุณาหรอกชื่ออาจารย์ผู้สอน">

							</input>

						</p>

                    </div> {/* <-- Content ส่วนกรอกข้อมูล end*/}



				</div> {/* <-- Content end*/}

			</section>

		</>
	);
};

export default Request2;
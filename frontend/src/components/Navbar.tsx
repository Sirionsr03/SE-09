import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavbarHome = () => {
    const navigate = useNavigate(); 

    const handleToHomeRequest = () => {
        navigate('/homeRequest'); 
        };

    return (
        <html>
        <head>
            <meta charSet="utf-8"></meta>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"></link>
        </head>
        <body>
            <div className="navbar">
                <div className="header">
                    <div className="header-menu">
                        <div className="title">Next <span>SUT</span> </div>
                        <nav className="header-submenu">
                            <ul>
                                <li><a href="#">หน้าหลัก</a></li>
                                <li>
                                    <a href="#">นักศึกษา</a>
                                    <ul>
                                        <li><a href="#">ข้อมูลนักศึกษา</a></li>
                                        <li onClick={handleToHomeRequest}> <a href="#">ยื่นคำร้อง2</a></li>
                                        <li><a href="#">ยื่นคำร้อง3</a></li>
                                        <li><a href="#">ยื่นคำร้อง4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">อาจารย์/บุคลากร</a>
                                    <ul>
                                        <li><a href="#">ยื่นคำร้อง1</a></li>
                                        <li><a href="#">ยื่นคำร้อง2</a></li>
                                        <li><a href="#">ยื่นคำร้อง3</a></li>
                                        <li><a href="#">ยื่นคำร้อง4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">กิจกรรม</a>
                                    <ul>
                                        <li><a href="#">ยื่นคำร้อง1</a></li>
                                        <li><a href="#">ยื่นคำร้อง2</a></li>
                                        <li><a href="#">ยื่นคำร้อง3</a></li>
                                        <li><a href="#">ยื่นคำร้อง4</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">เกี่ยวกับ</a>
                                    <ul>
                                        <li><a href="#">ยื่นคำร้อง1</a></li>
                                        <li><a href="#">ยื่นคำร้อง2</a></li>
                                        <li><a href="#">ยื่นคำร้อง3</a></li>
                                        <li><a href="#">ยื่นคำร้อง4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <nav className="nav-icon">
                            <ul>
                                <li><a href="#"><i className="fa-solid fa-power-off"> </i> </a></li>
                                <li><a href="#"><i className="fa-solid fa-bars"> </i> </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </body>
        </html>
    );
};

export default NavbarHome;
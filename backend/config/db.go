package config

import (
	"fmt"
	"time"

	"github.com/sut67/team09/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("SE_University_Team09.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {
	db.AutoMigrate(
		//ระบบจัดการข้อมูลอาจารย์
		&entity.Lecturer{},
		&entity.Faculty{},
		&entity.Major{},
		&entity.Gender{},
		&entity.Position{},
		&entity.Degree{},
		&entity.Thesis{},
		&entity.RoleOfThesis{},
		&entity.StatusStaff{},
		&entity.Education{},
		&entity.LecturerEducation{},
		&entity.LecturerThesis{},
		&entity.Student{},
		&entity.StudentEducation{},
		&entity.Condition{},
		&entity.Building{},
		&entity.Classroom{},
		&entity.AssessmentType{},
		&entity.GradeScale{},
		&entity.StudentEvaluatio{},

		//ระบบยื่นคำร้อง
		&entity.Request{},
		&entity.PrintStory{},
		&entity.RequestType{},
		&entity.StatusRequest{},

		// &entity.Student{},
		// &entity.Activity{},
		// &entity.Admin{},
		// &entity.Books{},
		// &entity.Classroom{},
		// &entity.Course{},
		// &entity.Day{},
		// &entity.Dormitory{},
		// &entity.Enrollment{},
		// &entity.ExamSchedule{},
		// &entity.Floor{},
		// &entity.Lecturer{},
		// &entity.LecturerThesis{},
		// &entity.Major{},
		// &entity.Position{},
		// &entity.PrintStory{},
		// &entity.Report{},
		// &entity.Request{},
		// &entity.RequestType{},
		// &entity.RoleOfThesis{},
		// &entity.Room{},
		// &entity.Schedule{},
		// &entity.Status{},
		&entity.StatusActivity{},
		// &entity.StatusRequest{},
		// &entity.Thesis{},
	)

	GenderMale := entity.Gender{Gender: "ชาย"}
	GenderFemale := entity.Gender{Gender: "หญิง"}
	GenderOther := entity.Gender{Gender: "อื่นๆ"}


	Degree0 := entity.Degree{Degree: "มัธยมปลาย"}
	Degree1 := entity.Degree{Degree: "ปริญญาตรี"}
	Degree2 := entity.Degree{Degree: "ปริญญาโท"}
	Degree3 := entity.Degree{Degree: "ปริญญาเอก"}

	faculties := []entity.Faculty{
		{FacultyName: "สำนักวิทยาศาสตร์"},
		{FacultyName: "สำนักวิศวกรรมศาสตร์"},
		{FacultyName: "สำนักแพทยศาสตร์"},
		{FacultyName: "สำนักพยาบาลศาสตร์"},
		{FacultyName: "สำนักทันตแพทยศาสตร์"},
		{FacultyName: "สำนักสาธารณสุขศาสตร์"},
	}

	facultyID1 := uint(1)
	facultyID2 := uint(2)
	facultyID3 := uint(3)
	facultyID4 := uint(4)
	facultyID5 := uint(5)
	facultyID6 := uint(6)

	majors := []entity.Major{
		{MajorName: "คณิตศาสตร์", FacultyID: &facultyID1},
		{MajorName: "เคมี", FacultyID: &facultyID1},
		{MajorName: "ชีววิทยา", FacultyID: &facultyID1},
		{MajorName: "ฟิสิกส์", FacultyID: &facultyID1},
		{MajorName: "ภูมิสารสนเทศ", FacultyID: &facultyID1},
		{MajorName: "จุลชีววิทยา", FacultyID: &facultyID1},
		{MajorName: "วิทยาศาสตร์การแพทย์", FacultyID: &facultyID1},
		{MajorName: "วิทยาศาสตร์การกีฬา", FacultyID: &facultyID1},
		{MajorName: "วิทยาการคอมพิวเตอร์", FacultyID: &facultyID1},
		{MajorName: "วิศวกรรมการผลิตอัตโนมัติและหุ่นยนต์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมเกษตรและอาหาร", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมขนส่งและโลจิสติกส์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมคอมพิวเตอร์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมเคมี", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมเครื่องกล", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมเซรามิก", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมโทรคมนาคม", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมธรณี", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมปิโตรเลียมและเทคโนโลยีธรณี", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมพอลิเมอร์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมอุตสาหการ", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมโยธา", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมโลหการ", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมสิ่งแวดล้อม", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมอิเล็กทรอนิกส์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมไฟฟ้า", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมยานยนต์", FacultyID: &facultyID2},
		{MajorName: "วิศวกรรมอากาศยาน", FacultyID: &facultyID2},
		{MajorName: "แพทยศาสตรบัณฑิต", FacultyID: &facultyID3},
		{MajorName: "พยาบาลศาสตรบัณฑิต", FacultyID: &facultyID4},
		{MajorName: "ทันตแพทยศาสตรบัณฑิต", FacultyID: &facultyID5},
		{MajorName: "อนามัยสิ่งแวดล้อม", FacultyID: &facultyID6},
		{MajorName: "อาชีวอนามัยและความปลอดภัย", FacultyID: &facultyID6},
		{MajorName: "โภชนวิทยาและการกำหนดอาหาร", FacultyID: &facultyID6},
	}

	Positions := []entity.Position{
		{Position: "อธิการบดี"},
		{Position: "รองอธิการบดี"},
		{Position: "คณบดี"},
		{Position: "ผู้ช่วยอธิการบดี"},
		{Position: "หัวหน้าแผนก"},
		{Position: "อาจารย์ผู้สอน"},
	}


	Statusstaffs := []entity.StatusStaff{
		{StatusStaff: "ทำงานอยู่"},
		{StatusStaff: "ศึกษาอยู่"},
		{StatusStaff: "ลาออก"},
	}


	db.FirstOrCreate(&Degree0, &entity.Degree{Degree: "มัธยมปลาย"})
	db.FirstOrCreate(&Degree1, &entity.Degree{Degree: "ปริญญาตรี"})
	db.FirstOrCreate(&Degree2, &entity.Degree{Degree: "ปริญญาโท"})
	db.FirstOrCreate(&Degree3, &entity.Degree{Degree: "ปริญญาเอก"})

	for _, faculty := range faculties {
		db.FirstOrCreate(&faculty, &entity.Faculty{FacultyName: faculty.FacultyName})
	}

	for _, position := range Positions {
		db.FirstOrCreate(&position, &entity.Position{Position: position.Position})
	}

	for _, statusstaff := range Statusstaffs {
		db.FirstOrCreate(&statusstaff, &entity.StatusStaff{StatusStaff: statusstaff.StatusStaff})
	}

	for _, major := range majors {
		db.FirstOrCreate(&major, entity.Major{MajorName: major.MajorName, FacultyID: major.FacultyID})
	}


   db.FirstOrCreate(&GenderMale, &entity.Gender{Gender: "ชาย"})
   db.FirstOrCreate(&GenderFemale, &entity.Gender{Gender: "หญิง"})
   db.FirstOrCreate(&GenderOther, &entity.Gender{Gender: "อื่นๆ"})

	db.FirstOrCreate(&Degree1, &entity.Degree{Degree: "ปริญญาตรี"})
	db.FirstOrCreate(&Degree2, &entity.Degree{Degree: "ปริญญาโท"})
	db.FirstOrCreate(&Degree3, &entity.Degree{Degree: "ปริญญาเอก"})


	//Select RequestType
	RequestTypeName1 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา"}
	RequestTypeName2 := entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างเรียน"}
	RequestTypeName3 := entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างสอบ"}
	RequestTypeName4 := entity.RequestType{RequestTypeName: "คำร้องขอถอนรายวิชา ( ติด W )"}
	RequestTypeName5 := entity.RequestType{RequestTypeName: "คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า"}
	RequestTypeName6 := entity.RequestType{RequestTypeName: "คำร้องขอลคำร้องขอลาออกจากการเป็นนักศึกษาาระหว่างเรียน"}
	RequestTypeName7 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี"}
	RequestTypeName8 := entity.RequestType{RequestTypeName: "คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ"}
	RequestTypeName9 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน"}


	db.FirstOrCreate(&RequestTypeName1, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา"})
	db.FirstOrCreate(&RequestTypeName2, &entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างเรียน"})
	db.FirstOrCreate(&RequestTypeName3, &entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างสอบ"})
	db.FirstOrCreate(&RequestTypeName4, &entity.RequestType{RequestTypeName: "คำร้องขอถอนรายวิชา ( ติด W )"})
	db.FirstOrCreate(&RequestTypeName5, &entity.RequestType{RequestTypeName: "คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า"})
	db.FirstOrCreate(&RequestTypeName6, &entity.RequestType{RequestTypeName: "คำร้องขอลคำร้องขอลาออกจากการเป็นนักศึกษาาระหว่างเรียน"})
	db.FirstOrCreate(&RequestTypeName7, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี"})
	db.FirstOrCreate(&RequestTypeName8, &entity.RequestType{RequestTypeName: "คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ"})
	db.FirstOrCreate(&RequestTypeName9, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน"})

	//Select RequestType
	StatusRequest1 := entity.StatusRequest{StatusRequestName: "อนุมัติ"}
	StatusRequest2 := entity.StatusRequest{StatusRequestName: "รอดำเนินการ"}
	StatusRequest3 := entity.StatusRequest{StatusRequestName: "ปฏิเสธ"}
	// StatusRequest4 := entity.StatusRequest{StatusRequestName: "4"}

	db.FirstOrCreate(&StatusRequest1, &entity.StatusRequest{StatusRequestName: "อนุมัติ"})
	db.FirstOrCreate(&StatusRequest2, &entity.StatusRequest{StatusRequestName: "รอดำเนินการ"})
	db.FirstOrCreate(&StatusRequest3, &entity.StatusRequest{StatusRequestName: "ปฏิเสธ"})
	// db.FirstOrCreate(&StatusRequest4, &entity.StatusRequest{StatusRequestName: "4"})


	//Select StatusActivity
	StatusActivity1 := entity.StatusActivity{StatusActivityName: "ว่าง"}
	StatusActivity2 := entity.StatusActivity{StatusActivityName: "เต็ม"}


	db.FirstOrCreate(&StatusActivity1, &entity.StatusActivity{StatusActivityName: "ว่าง"})
	db.FirstOrCreate(&StatusActivity2, &entity.StatusActivity{StatusActivityName: "เต็ม"})


	hashedPassword, _ := HashPassword("123456")

   User := &entity.Student{

	   StudentCode: "B6505066",
	   FirstName: "Sirion",
	   LastName: "Srimueang",
	   Email: "sirionsr@gmail.com",
	   Password: hashedPassword,
	   Phone: "0651018312",
	   Age: 21,
	   Profile :"",
	   YearOfStudy: 1,

   }


   Teacher := &entity.Lecturer{

	LecturerCode:"B655066",
	FirstName:"SSR",
	LastName:"DDDRT",
	Email :"srimueang@gmail.com",
	Password:"1234567",
	Phone:"0612365478",
	Profile:"",
	DateEmployed: time.Now(),

	}

   db.FirstOrCreate(User, &entity.Student{

       Email: "sirionsr@gmail.com",

   })

   db.FirstOrCreate(Teacher, &entity.Lecturer{

	Email: "srimueang@gmail.com",

  })

}








// //code จาก git 
// package config

// import (
// 	"time"
// 	"fmt"
// 	"log"
// 	"math/rand"
// 	"strconv"
// 	"strings"

// 	"github.com/sut67/team09/entity"
// 	"github.com/xuri/excelize/v2"
// 	"gorm.io/driver/sqlite"
// 	"gorm.io/gorm"
// )

// var db *gorm.DB

// func DB() *gorm.DB {
// 	return db
// }

// func ConnectionDB() {
// 	database, err := gorm.Open(sqlite.Open("SE_University_Team09.db?cache=shared"), &gorm.Config{})
// 	if err != nil {
// 		panic("failed to connect database")
// 	}
// 	fmt.Println("connected database")
// 	db = database
// }

// func SetupDatabase() {
// 	db.AutoMigrate(
// 		//ระบบจัดการข้อมูลอาจารย์
// 		&entity.Lecturer{},
// 		&entity.Faculty{},
// 		&entity.Major{},
// 		&entity.Gender{},
// 		&entity.Position{},
// 		&entity.Degree{},
// 		&entity.Thesis{},
// 		&entity.RoleOfThesis{},
// 		&entity.StatusStaff{},
// 		&entity.Education{},
// 		&entity.LecturerEducation{},
// 		&entity.LecturerThesis{},
// 		&entity.Student{},
// 		&entity.StudentEducation{},
// 		&entity.Condition{},
// 		&entity.Building{},
// 		&entity.Classroom{},
// 		&entity.AssessmentType{},
// 		&entity.GradeScale{},
// 		&entity.StudentEvaluatio{},

// 		&entity.Course{},
// 		&entity.Schedule{},
// 		&entity.ExamSchedule{},
// 		&entity.Day{},
// 		&entity.Enrollment{},

// 		&entity.Books{},
// 		&entity.Dormitory{},
// 		&entity.Floor{},
// 		&entity.Room{},
// 		&entity.Status{},
// 		&entity.Floor{},


// 		//ระบบยื่นคำร้อง
// 		&entity.Request{},
// 		&entity.PrintStory{},
// 		&entity.RequestType{},
// 		&entity.StatusRequest{},

// 		&entity.Report{},

// 	)

// 	hashedPassword, _ := HashPassword("123456")

// 	Admin := &entity.Admin{
// 		FirstName: "NUN",    
// 		LastName: "MOM",            
// 		Password: hashedPassword,       
// 	 }

// 	 db.FirstOrCreate(Admin, &entity.Admin{
// 		Email: "sa@g.sut.ac.th",
// 	 })

// 	 Student := &entity.Student{
// 		FirstName: "Akaradate",    
// 		LastName: "Phatomam",            
// 		Password: hashedPassword,       
// 	 }

// 	 db.FirstOrCreate(Student, &entity.Student{
// 		Email: "sa@smail.com",
// 	 })

// 	 Dormitory := &entity.Dormitory{
// 		DormName: "หอป้ากับม้า",    
// 		 DormDescription: "ที่พักสะดวกสบาย",            
// 		 DormType: "หอชาย",       
// 	 }

// 	 db.FirstOrCreate(Dormitory, &entity.Dormitory{

// 		Price: 5000,  
  
// 	 })

// 	Books := &entity.Books{

// 		StudentID: 1,
		  
// 	 }
	 
// 	 db.FirstOrCreate(Books, &entity.Books{
	 
// 		RoomID: 1,  
	 
// 	 })

// 	 Room := &entity.Room{
// 		RoomNumber: "B321",
// 		 DormitoryID: 1,
// 	 }

// 	 db.FirstOrCreate(Room, &entity.Room{
// 		Score: 5,
// 	 })
// 	 DateReport, _ := time.Parse("2006-01-02", "1988-11-12")


// 		Report := &entity.Report{

// 			UsersID:  1,
	  
// 			AdminID:  1,
	  
// 			DormitoryID:  1,
	  
// 			RoomID:  1,
	  
// 			BooksID:  1,
	  
// 			Status:  "not approve",
	  
// 			DateReport: DateReport,
	  
// 		}

// 		db.FirstOrCreate(Report, &entity.Report{

// 			Note: "Hello",
		 
// 			})
	 
// 	Status1 := entity.Status{Status: "ว่าง"}
// 	Status2 := entity.Status{Status: "เต็ม"}
// 	Status3 := entity.Status{Status: "ปิดปรับปรุง"}

// 	Floor1 := entity.Floor{FloorNumber: 1}
// 	Floor2 := entity.Floor{FloorNumber: 2}
// 	Floor3 := entity.Floor{FloorNumber: 3}

// 	//Select RequestType
// 	RequestTypeName1 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา"}
// 	RequestTypeName2 := entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างเรียน"}
// 	RequestTypeName3 := entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างสอบ"}
// 	RequestTypeName4 := entity.RequestType{RequestTypeName: "คำร้องขอถอนรายวิชา ( ติด W )"}
// 	RequestTypeName5 := entity.RequestType{RequestTypeName: "คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า"}
// 	RequestTypeName6 := entity.RequestType{RequestTypeName: "คำร้องขอลคำร้องขอลาออกจากการเป็นนักศึกษาาระหว่างเรียน"}
// 	RequestTypeName7 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี"}
// 	RequestTypeName8 := entity.RequestType{RequestTypeName: "คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ"}
// 	RequestTypeName9 := entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน"}


// 	db.FirstOrCreate(&RequestTypeName1, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม กรณีกลุ่มเต็ม / ลดรายวิชา"})
// 	db.FirstOrCreate(&RequestTypeName2, &entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างเรียน"})
// 	db.FirstOrCreate(&RequestTypeName3, &entity.RequestType{RequestTypeName: "คำร้องขอลาระหว่างสอบ"})
// 	db.FirstOrCreate(&RequestTypeName4, &entity.RequestType{RequestTypeName: "คำร้องขอถอนรายวิชา ( ติด W )"})
// 	db.FirstOrCreate(&RequestTypeName5, &entity.RequestType{RequestTypeName: "คำร้องขอชำระเงินค่าลงทะเบียนเรียนล่าช้า"})
// 	db.FirstOrCreate(&RequestTypeName6, &entity.RequestType{RequestTypeName: "คำร้องขอลคำร้องขอลาออกจากการเป็นนักศึกษาาระหว่างเรียน"})
// 	db.FirstOrCreate(&RequestTypeName7, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียน เกิน / ต่ำ กว่าหน่วยกิตที่กำหนดระดับปริญญาตรี"})
// 	db.FirstOrCreate(&RequestTypeName8, &entity.RequestType{RequestTypeName: "คําร้องขอเปลี่ยนชื่อ/แก้ไขข้อมูลระเบียนประวัติ"})
// 	db.FirstOrCreate(&RequestTypeName9, &entity.RequestType{RequestTypeName: "คำร้องขอลงทะเบียนเรียนโดยมีเวลาสอบซ้ำซ้อน"})

// 	//Select RequestType
// 	StatusRequest1 := entity.StatusRequest{StatusRequestName: "อนุมัติ"}
// 	StatusRequest2 := entity.StatusRequest{StatusRequestName: "รอดำเนินการ"}
// 	StatusRequest3 := entity.StatusRequest{StatusRequestName: "ปฏิเสธ"}


// 	db.FirstOrCreate(&StatusRequest1, &entity.StatusRequest{StatusRequestName: "อนุมัติ"})
// 	db.FirstOrCreate(&StatusRequest2, &entity.StatusRequest{StatusRequestName: "รอดำเนินการ"})
// 	db.FirstOrCreate(&StatusRequest3, &entity.StatusRequest{StatusRequestName: "ปฏิเสธ"})


// 	GenderMale := entity.Gender{Gender: "ชาย"}
// 	GenderFemale := entity.Gender{Gender: "หญิง"}
// 	GenderOther := entity.Gender{Gender: "อื่นๆ"}

// 	Degree0 := entity.Degree{Degree: "มัธยมปลาย"}
// 	Degree1 := entity.Degree{Degree: "ปริญญาตรี"}
// 	Degree2 := entity.Degree{Degree: "ปริญญาโท"}
// 	Degree3 := entity.Degree{Degree: "ปริญญาเอก"}

// 	faculties := []entity.Faculty{
// 		{FacultyName: "สำนักวิทยาศาสตร์"},
// 		{FacultyName: "สำนักวิศวกรรมศาสตร์"},
// 		{FacultyName: "สำนักแพทยศาสตร์"},
// 		{FacultyName: "สำนักพยาบาลศาสตร์"},
// 		{FacultyName: "สำนักทันตแพทยศาสตร์"},
// 		{FacultyName: "สำนักสาธารณสุขศาสตร์"},
// 	}

// 	facultyID1 := uint(1)
// 	facultyID2 := uint(2)
// 	facultyID3 := uint(3)
// 	facultyID4 := uint(4)
// 	facultyID5 := uint(5)
// 	facultyID6 := uint(6)

// 	majors := []entity.Major{
// 		{MajorName: "คณิตศาสตร์", FacultyID: &facultyID1},
// 		{MajorName: "เคมี", FacultyID: &facultyID1},
// 		{MajorName: "ชีววิทยา", FacultyID: &facultyID1},
// 		{MajorName: "ฟิสิกส์", FacultyID: &facultyID1},
// 		{MajorName: "ภูมิสารสนเทศ", FacultyID: &facultyID1},
// 		{MajorName: "จุลชีววิทยา", FacultyID: &facultyID1},
// 		{MajorName: "วิทยาศาสตร์การแพทย์", FacultyID: &facultyID1},
// 		{MajorName: "วิทยาศาสตร์การกีฬา", FacultyID: &facultyID1},
// 		{MajorName: "วิทยาการคอมพิวเตอร์", FacultyID: &facultyID1},
// 		{MajorName: "วิศวกรรมการผลิตอัตโนมัติและหุ่นยนต์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมเกษตรและอาหาร", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมขนส่งและโลจิสติกส์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมคอมพิวเตอร์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมเคมี", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมเครื่องกล", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมเซรามิก", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมโทรคมนาคม", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมธรณี", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมปิโตรเลียมและเทคโนโลยีธรณี", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมพอลิเมอร์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมอุตสาหการ", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมโยธา", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมโลหการ", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมสิ่งแวดล้อม", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมอิเล็กทรอนิกส์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมไฟฟ้า", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมยานยนต์", FacultyID: &facultyID2},
// 		{MajorName: "วิศวกรรมอากาศยาน", FacultyID: &facultyID2},
// 		{MajorName: "แพทยศาสตรบัณฑิต", FacultyID: &facultyID3},
// 		{MajorName: "พยาบาลศาสตรบัณฑิต", FacultyID: &facultyID4},
// 		{MajorName: "ทันตแพทยศาสตรบัณฑิต", FacultyID: &facultyID5},
// 		{MajorName: "อนามัยสิ่งแวดล้อม", FacultyID: &facultyID6},
// 		{MajorName: "อาชีวอนามัยและความปลอดภัย", FacultyID: &facultyID6},
// 		{MajorName: "โภชนวิทยาและการกำหนดอาหาร", FacultyID: &facultyID6},
// 	}

// 	Positions := []entity.Position{
// 		{Position: "อธิการบดี"},
// 		{Position: "รองอธิการบดี"},
// 		{Position: "คณบดี"},
// 		{Position: "ผู้ช่วยอธิการบดี"},
// 		{Position: "หัวหน้าแผนก"},
// 		{Position: "อาจารย์ผู้สอน"},
// 	}

// 	Statusstaffs := []entity.StatusStaff{
// 		{StatusStaff: "ทำงานอยู่"},
// 		{StatusStaff: "ศึกษาอยู่"},
// 		{StatusStaff: "ลาออก"},
// 	}

// 	roleofthesis := []entity.RoleOfThesis{
// 		{RoleOfThesisName: "Advisor (ที่ปรึกษาหลัก)"},
// 		{RoleOfThesisName: "Co-Advisor (ที่ปรึกษาร่วม)"},
// 		{RoleOfThesisName: "Researcher (นักวิจัย)"},
// 		{RoleOfThesisName: "Collaborator (ผู้ร่วมงาน)"},
// 	}

// 	positionID1 := uint(6)
// 	genderID1 := uint(1)
// 	majorID := uint(1)
// 	statusstaffs := uint(1)

// 	Lecturers := []entity.Lecturer{
// 		{LecturerCode: "L1001", FirstName: "Somchai", LastName: "Jan", Email: "somchai.jan@gmail.com", Password: "pass1001", Phone: "0810001001", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1002", FirstName: "Somsri", LastName: "Pree", Email: "somsri.pree@gmail.com", Password: "pass1002", Phone: "0810001002", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1003", FirstName: "Anan", LastName: "Pol", Email: "anan.pol@gmail.com", Password: "pass1003", Phone: "0810001003", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1004", FirstName: "Nid", LastName: "Non", Email: "nid.non@gmail.com", Password: "pass1004", Phone: "0810001004", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1005", FirstName: "Tan", LastName: "Korn", Email: "tan.korn@gmail.com", Password: "pass1005", Phone: "0810001005", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1006", FirstName: "Pond", LastName: "Yai", Email: "pond.yai@gmail.com", Password: "pass1006", Phone: "0810001006", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1007", FirstName: "Pan", LastName: "Rak", Email: "pan.rak@gmail.com", Password: "pass1007", Phone: "0810001007", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1008", FirstName: "Aom", LastName: "Lek", Email: "aom.lek@gmail.com", Password: "pass1008", Phone: "0810001008", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1009", FirstName: "Ann", LastName: "Pee", Email: "ann.pee@gmail.com", Password: "pass1009", Phone: "0810001009", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1010", FirstName: "Yui", LastName: "Nok", Email: "yui.nok@gmail.com", Password: "pass1010", Phone: "0810001010", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 		{LecturerCode: "L1011", FirstName: "Nong", LastName: "Macc", Email: "nongmacc @gmail.com", Password: "pass1011", Phone: "0810001011", PositionID: &positionID1, GenderID: &genderID1, MajorID: &majorID, StatusStaffID: &statusstaffs},
// 	}

// 	db.FirstOrCreate(&GenderMale, &entity.Gender{Gender: "ชาย"})
// 	db.FirstOrCreate(&GenderFemale, &entity.Gender{Gender: "หญิง"})
// 	db.FirstOrCreate(&GenderOther, &entity.Gender{Gender: "อื่นๆ"})

// 	db.FirstOrCreate(&Degree0, &entity.Degree{Degree: "มัธยมปลาย"})
// 	db.FirstOrCreate(&Degree1, &entity.Degree{Degree: "ปริญญาตรี"})
// 	db.FirstOrCreate(&Degree2, &entity.Degree{Degree: "ปริญญาโท"})
// 	db.FirstOrCreate(&Degree3, &entity.Degree{Degree: "ปริญญาเอก"})

// 	db.FirstOrCreate(&Status1, &entity.Status{Status: "ว่าง"})
// 	db.FirstOrCreate(&Status2, &entity.Status{Status: "เต็ม"})
// 	db.FirstOrCreate(&Status3, &entity.Status{Status: "ปิดปรับปรุง"})

// 	db.FirstOrCreate(&Floor1, &entity.Floor{FloorNumber: 1})
// 	db.FirstOrCreate(&Floor2, &entity.Floor{FloorNumber: 2})
// 	db.FirstOrCreate(&Floor3, &entity.Floor{FloorNumber: 3})
	

// 	for _, faculty := range faculties {
// 		db.FirstOrCreate(&faculty, &entity.Faculty{FacultyName: faculty.FacultyName})
// 	}

// 	for _, position := range Positions {
// 		db.FirstOrCreate(&position, &entity.Position{Position: position.Position})
// 	}

// 	for _, statusstaff := range Statusstaffs {
// 		db.FirstOrCreate(&statusstaff, &entity.StatusStaff{StatusStaff: statusstaff.StatusStaff})
// 	}

// 	for _, lecturer := range Lecturers {
// 		db.FirstOrCreate(&lecturer, entity.Lecturer{
// 			LecturerCode: lecturer.LecturerCode,
// 		})

// 	}

// 	for _, major := range majors {
// 		db.FirstOrCreate(&major, entity.Major{MajorName: major.MajorName, FacultyID: major.FacultyID})
// 	}

// 	for _, rolethsis := range roleofthesis {
// 		db.FirstOrCreate(&rolethsis, entity.RoleOfThesis{RoleOfThesisName: rolethsis.RoleOfThesisName})
// 	}

// 	Day1 := entity.Day{DayName: "จันทร์"}
// 	Day2 := entity.Day{DayName: "อังคาร"}
// 	Day3 := entity.Day{DayName: "พุธ"}
// 	Day4 := entity.Day{DayName: "พฤหัสบดี"}
// 	Day5 := entity.Day{DayName: "ศุกร์"}
// 	Day6 := entity.Day{DayName: "เสาร์"}
// 	Day7 := entity.Day{DayName: "อาทิตย์"}

// 	db.FirstOrCreate(&Day1, &entity.Day{DayName: "วันจันทร์"})
// 	db.FirstOrCreate(&Day2, &entity.Day{DayName: "อังคาร"})
// 	db.FirstOrCreate(&Day3, &entity.Day{DayName: "พุธ"})
// 	db.FirstOrCreate(&Day4, &entity.Day{DayName: "พฤหัสบดี"})
// 	db.FirstOrCreate(&Day5, &entity.Day{DayName: "ศุกร์"})
// 	db.FirstOrCreate(&Day6, &entity.Day{DayName: "เสาร์"})
// 	db.FirstOrCreate(&Day7, &entity.Day{DayName: "อาทิตย์"})

	
// }

// func ImportCoursesFromExcel(filePath string) {
// 	f, err := excelize.OpenFile(filePath)
// 	if err != nil {
// 		log.Fatalf("Failed to open Excel file: %v", err)
// 	}

// 	rows, err := f.GetRows("Sheet1")
// 	if err != nil {
// 		log.Fatalf("Failed to read rows: %v", err)
// 	}

// 	for i, row := range rows {
// 		if i == 0 {
// 			continue
// 		}

// 		if len(row) < 5 {
// 			log.Printf("Skipping row %d: insufficient columns", i+1)
// 			continue
// 		}

// 		courseCode := strings.TrimSpace(row[0])
// 		courseName := strings.TrimSpace(row[1])
// 		creditString := strings.TrimSpace(row[2])
// 		group := strings.TrimSpace(row[3])
// 		maxSeatString := strings.TrimSpace(row[4])

// 		creditString = strings.ReplaceAll(creditString, "\u00a0", "")
// 		maxSeatString = strings.ReplaceAll(maxSeatString, "\u00a0", "")

// 		credit, err := strconv.ParseUint(creditString, 10, 32)
// 		if err != nil {
// 			log.Printf("Error converting credit for row %d: %v", i+1, err)
// 			continue
// 		}

// 		maxSeat, err := strconv.ParseUint(maxSeatString, 10, 32)
// 		if err != nil {
// 			log.Printf("Error converting maxSeat for row %d: %v", i+1, err)
// 			continue
// 		}

// 		lecturerID := uint(rand.Intn(10) + 1)
// 		lecturerIDPointer := &lecturerID

// 		course := entity.Course{
// 			CourseCode: courseCode,
// 			CourseName: courseName,
// 			Credit:     uint(credit),
// 			Group:      group,
// 			MaxSeat:    uint(maxSeat),
// 			Status:     false,
// 			LecturerID: lecturerIDPointer,
// 		}

// 		if err := db.Where("course_code = ? AND `group` = ?", courseCode, group).FirstOrCreate(&course).Error; err != nil {
// 			log.Printf("Failed to insert or find course %s: %v", courseCode, err)
// 		} else {
// 			fmt.Printf("Processed course: %s\n", courseCode)
// 		}
// 	}


	


// 	ConditionTest01 := entity.Condition{
// 		ConditionTypeName: "อาคารสำหรับห้องเรียน",
// 		Description:       "อาคารสำหรับการเรียนการสอนเชิงวิชาการ",
// 	}

// 	ConditionTest02 := entity.Condition{
// 		ConditionTypeName: "อาคารสำหรับห้องปฏิบัติการทดลอง",
// 		Description:       "อาคารสำหรับการเรียนการสอนเชิงปฏิบัติการ",
// 	}
// 	ConditionTest03 := entity.Condition{
// 		ConditionTypeName: "ห้องเรียนlecture",
// 		Description:       "ห้องเรียนสำหรับการเรียนการสอนเชิงวิชาการ",
// 	}
// 	ConditionTest04 := entity.Condition{
// 		ConditionTypeName: "ห้องเรียนlab",
// 		Description:       "ห้องสำหรับการเรียนการสอนเชิงปฏิบัติการ",
// 	}

// 	db.FirstOrCreate(&ConditionTest01, &entity.Condition{ConditionTypeName: "อาคารสำหรับห้องเรียน"})
// 	db.FirstOrCreate(&ConditionTest02, &entity.Condition{ConditionTypeName: "อาคารสำหรับห้องปฏิบัติการทดลอง"})
// 	db.FirstOrCreate(&ConditionTest03, &entity.Condition{ConditionTypeName: "ห้องเรียนlecture"})
// 	db.FirstOrCreate(&ConditionTest04, &entity.Condition{ConditionTypeName: "ห้องเรียนlab"})

// 	Building00 := entity.Building{
// 		TotalFloors: 0,
// 		Location:       "SUT",
// 		BuildingName:"อาคารทดสอบ",
// 		ConditionID:1,
// 		BuildingCode:"ZZ00",
// 		BuildingPicture:"/uploads/IMG00.jpg",
// 	}
// 	Building01 := entity.Building{
// 		TotalFloors: 50,
// 		Location:       "SUT",
// 		BuildingName:"Test01",
// 		ConditionID:1,
// 		BuildingCode:"B1",
// 		BuildingPicture:"/uploads/เรียนรวม1.jpg",
// 	}
// 	Building02 := entity.Building{
// 		TotalFloors: 40,
// 		Location:       "SUT",
// 		BuildingName:"Test02",
// 		ConditionID:1,
// 		BuildingCode:"B2",
// 		BuildingPicture:"/uploads/เรียนรวม2.jpg",
// 	}
	
// 	Building03 := entity.Building{
// 		TotalFloors: 100,
// 		Location:       "SUT",
// 		BuildingName:"ตึกดิจิเทค",
// 		ConditionID:1,
// 		BuildingCode:"B3",
// 		BuildingPicture:"/uploads/ตึกดิจิ.jpg",
// 	}
// 	db.FirstOrCreate(&Building00, &entity.Building{BuildingName: "อาคารทดสอบ"})
// 	db.FirstOrCreate(&Building01, &entity.Building{BuildingName: "Test01"})
// 	db.FirstOrCreate(&Building02, &entity.Building{BuildingName: "Test02"})
// 	db.FirstOrCreate(&Building03, &entity.Building{BuildingName: "ตึกดิจิเทค"})



// 	Classroom01 := entity.Classroom{
// 		RoomNumber: 1001,
// 		Capacity:100,
// 		Status:       "Ready to work",
// 		Floor:3,
// 		BuildingID:1,
// 		ConditionID:2,
// 	}
// 	db.FirstOrCreate(&Classroom01, &entity.Classroom{RoomNumber: 1001})

// }

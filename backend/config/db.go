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
	RequestTypeName1 := entity.RequestType{RequestTypeName: "1"}
	RequestTypeName2 := entity.RequestType{RequestTypeName: "2"}
	RequestTypeName3 := entity.RequestType{RequestTypeName: "3"}
	RequestTypeName4 := entity.RequestType{RequestTypeName: "4"}

	db.FirstOrCreate(&RequestTypeName1, &entity.RequestType{RequestTypeName: "1"})
	db.FirstOrCreate(&RequestTypeName2, &entity.RequestType{RequestTypeName: "2"})
	db.FirstOrCreate(&RequestTypeName3, &entity.RequestType{RequestTypeName: "3"})
	db.FirstOrCreate(&RequestTypeName4, &entity.RequestType{RequestTypeName: "4"})

	//Select RequestType
	StatusRequest1 := entity.StatusRequest{StatusRequestName: "1"}
	StatusRequest2 := entity.StatusRequest{StatusRequestName: "2"}
	StatusRequest3 := entity.StatusRequest{StatusRequestName: "3"}
	StatusRequest4 := entity.StatusRequest{StatusRequestName: "4"}

	db.FirstOrCreate(&StatusRequest1, &entity.StatusRequest{StatusRequestName: "1"})
	db.FirstOrCreate(&StatusRequest2, &entity.StatusRequest{StatusRequestName: "2"})
	db.FirstOrCreate(&StatusRequest3, &entity.StatusRequest{StatusRequestName: "3"})
	db.FirstOrCreate(&StatusRequest4, &entity.StatusRequest{StatusRequestName: "4"})


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

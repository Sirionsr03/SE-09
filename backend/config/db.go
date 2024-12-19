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
		// &entity.StatusActivity{},
		// &entity.StatusRequest{},
		// &entity.Thesis{},
	)

	GenderMale := entity.Gender{Gender: "ชาย"}
	GenderFemale := entity.Gender{Gender: "หญิง"}
	GenderOther := entity.Gender{Gender: "อื่นๆ"}

	Degree1 := entity.Degree{Degree: "ปริญญาตรี"}
	Degree2 := entity.Degree{Degree: "ปริญญาโท"}
	Degree3 := entity.Degree{Degree: "ปริญญาเอก"}

	Major1:= entity.Major{MajorName: "1"}
	Major2 := entity.Major{MajorName: "2"}
	Major3 := entity.Major{MajorName: "3"}

	StatusStaff1:= entity.StatusStaff{StatusStaff: "1"}
	StatusStaff2 := entity.StatusStaff{StatusStaff: "2"}
	StatusStaff3 := entity.StatusStaff{StatusStaff: "3"}

   db.FirstOrCreate(&GenderMale, &entity.Gender{Gender: "ชาย"})
   db.FirstOrCreate(&GenderFemale, &entity.Gender{Gender: "หญิง"})
   db.FirstOrCreate(&GenderOther, &entity.Gender{Gender: "อื่นๆ"})

	db.FirstOrCreate(&Degree1, &entity.Degree{Degree: "ปริญญาตรี"})
	db.FirstOrCreate(&Degree2, &entity.Degree{Degree: "ปริญญาโท"})
	db.FirstOrCreate(&Degree3, &entity.Degree{Degree: "ปริญญาเอก"})

	db.FirstOrCreate(&Major1, &entity.Major{MajorName: "computer"})
	db.FirstOrCreate(&Major2, &entity.Major{MajorName: "CE"})
	db.FirstOrCreate(&Major3, &entity.Major{MajorName: "ME"})

	db.FirstOrCreate(&StatusStaff1, &entity.StatusStaff{StatusStaff: "11"})
	db.FirstOrCreate(&StatusStaff2, &entity.StatusStaff{StatusStaff: "22"})
	db.FirstOrCreate(&StatusStaff3, &entity.StatusStaff{StatusStaff: "33"})

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

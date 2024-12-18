package config

import (
	"fmt"
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
	)

	GenderMale := entity.Gender{Gender: "ชาย"}
	GenderFemale := entity.Gender{Gender: "หญิง"}
	GenderOther := entity.Gender{Gender: "อื่นๆ"}

	Degree1 := entity.Degree{Degree: "ปริญญาตรี"}
	Degree2 := entity.Degree{Degree: "ปริญญาโท"}
	Degree3 := entity.Degree{Degree: "ปริญญาเอก"}

	db.FirstOrCreate(&GenderMale, &entity.Gender{Gender: "ชาย"})
   db.FirstOrCreate(&GenderFemale, &entity.Gender{Gender: "หญิง"})
   db.FirstOrCreate(&GenderOther, &entity.Gender{Gender: "อื่นๆ"})

	db.FirstOrCreate(&Degree1, &entity.Degree{Degree: "ปริญญาตรี"})
	db.FirstOrCreate(&Degree2, &entity.Degree{Degree: "ปริญญาโท"})
	db.FirstOrCreate(&Degree3, &entity.Degree{Degree: "ปริญญาเอก"})

}

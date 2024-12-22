package entity

import (
	"gorm.io/gorm"
)

type Student struct {
	gorm.Model
	StudentCode string
	FirstName   string
	LastName    string
	Email       string
	Password    string
	Phone       string
	Age         int
	Profile     string `gorm:"type:longtext"`
	YearOfStudy int

	GenderID *uint
	Gender   Gender `gorm:"foreignKey:GenderID"`

	MajorID *uint
	Major   Major `gorm:"foreignKey:MajorID"`

	StatusStaffID *uint
	StatusStaff   StatusStaff `gorm:"foreignKey:StatusStaffID"`

	StudentEducation []StudentEducation `gorm:"foreignKey:student_id"`
	Request []Request `gorm:"foreignKey:StudentID"`

	Activity   []Activity `gorm:"many2many:enrolment;" json:"activity"`
}

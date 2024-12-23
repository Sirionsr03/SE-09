package entity

import (
	"gorm.io/gorm"
	"time"
)

type Lecturer struct {
	gorm.Model
	LecturerCode string
	FirstName    string
	LastName     string
	BirthDay     time.Time
	Email        string
	Password     string
	Phone        string
	Profile      string `gorm:"type:longtext"`
	DateEmployed time.Time

	PositionID *uint
	Position   Position `gorm:"foreignKey:PositionID"`

	GenderID *uint
	Gender   Gender `gorm:"foreignKey:GenderID"`

	MajorID *uint
	Major   Major `gorm:"foreignKey:MajorID"`

	StatusStaffID *uint
	StatusStaff   StatusStaff `gorm:"foreignKey:StatusStaffID"`

	LecturerEducation []LecturerEducation `gorm:"foreignKey:lecturer_id"`

	LecturerThesis []LecturerThesis `gorm:"foreignKey:lecturer_id"`
}

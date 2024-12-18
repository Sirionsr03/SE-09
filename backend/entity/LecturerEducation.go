package entity

import (
	"gorm.io/gorm"
)

type LecturerEducation struct {
	gorm.Model

	LecturerID *uint
	Lecturer   Lecturer `gorm:"foreignKey:LecturerID"`

	EducationID *uint
	Education   Education `gorm:"foreignKey:EducationID"`

	DegreeID *uint
	Degree   Degree `gorm:"foreignKey:DegreeID"`

	Gpax float32
}

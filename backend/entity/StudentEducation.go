package entity

import (
	"gorm.io/gorm"
)

type StudentEducation struct {
	gorm.Model

	StudentID *uint
	Student   Student `gorm:"foreignKey:StudentID"`

	EducationID *uint
	Education   Education `gorm:"foreignKey:EducationID"`

	DegreeID *uint
	Degree   Degree `gorm:"foreignKey:DegreeID"`

	Gpax float32
}

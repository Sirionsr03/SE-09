package entity

import (
	"gorm.io/gorm"
)

type LecturerThesis struct {
	gorm.Model

	LecturerID *uint
	Lecturer   Lecturer `gorm:"foreignKey:LecturerID"`

	ThesisID *uint
	Thesis   Thesis `gorm:"foreignKey:ThesisID"`

	RoleOfThesisID *uint
	RoleOfThesis   RoleOfThesis `gorm:"foreignKey:RoleOfThesisID"`
}

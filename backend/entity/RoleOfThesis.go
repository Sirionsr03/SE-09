package entity

import (
	"gorm.io/gorm"
)

type RoleOfThesis struct {
	gorm.Model
	RoleOfThesis_name string
	
	LecturerThesis []LecturerThesis `gorm:"foreignKey:role_of_thesis_id"`
}
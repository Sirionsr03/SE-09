package entity

import (
	"gorm.io/gorm"
)

type Degree struct {
	gorm.Model
	
	Degree string

	LecturerEducation []LecturerEducation `gorm:"foreignKey:degree_id"`

	StudentEducation []StudentEducation `gorm:"foreignKey:degree_id"`
}
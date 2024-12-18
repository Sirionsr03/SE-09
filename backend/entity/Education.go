package entity

import (
	"gorm.io/gorm"
)

type Education struct {
	gorm.Model
	Instution string

	LecturerEducation []LecturerEducation `gorm:"foreignKey:education_id"`

	StudentEducation []StudentEducation `gorm:"foreignKey:education_id"`
}
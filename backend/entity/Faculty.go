package entity

import (
	"gorm.io/gorm"
)

type Faculty struct {
	gorm.Model
	FacultyName  string
	FacultyPhone string
	FacultyEmail string

	Major []Major `gorm:"foreignKey:faculty_id "`
}

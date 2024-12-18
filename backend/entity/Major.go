package entity

import "gorm.io/gorm"

type Major struct {
	gorm.Model
	MajorName  string `json:"major_name"`
	MajorPhone string
	MajorEmail string

	FacultyID *uint
	Faculty   Faculty `gorm:"foreignKey:FacultyID "`
}

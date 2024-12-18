package entity

import (
	"time"
	"gorm.io/gorm"
)

type Schedule struct {
	gorm.Model
	StartTime time.Time
	EndTime time.Time
	
	CourseID *uint
	Course   Course `gorm:"foreignKey:CourseID"`

	DayID *uint
	Day   Day `gorm:"foreignKey:DayID"`

	ClassroomID *uint
	Classroom   Classroom `gorm:"foreignKey:ClassroomID"`

}
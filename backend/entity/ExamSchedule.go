package entity

import (
	"time"

	"gorm.io/gorm"
)

type ExamSchedule struct {
	gorm.Model
	ExamDate time.Time
	StartTime time.Time
	EndTime time.Time
	
	CourseID *uint
	Course   Course `gorm:"foreignKey:CourseID"`

	ClassroomID *uint
	Classroom   Classroom `gorm:"foreignKey:ClassroomID"`
}
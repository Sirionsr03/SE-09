package entity

import (
	"time"

	"gorm.io/gorm"
)

type Request struct {
	gorm.Model
	RetryCount  int
	RequestDate time.Time
	Status      string
	Note        string

	StudentID uint
	Student   Student `gorm:"foreignKey:StudentID"`

	RequestTypeID uint
	RequestType RequestType `gorm:"foreignKey:RequestTypeID"`

	StatusRequestID uint
	StatusRequest StatusRequest `gorm:"foreignKey:StatusRequestID"`

	CourseID uint
	Course Course `gorm:"foreignKey:CourseID"`
}
 
package entity

import (
	"gorm.io/gorm"
)

type StatusStaff struct {
	gorm.Model
	StatusStaff string `json:"status_staff"`

	Lecturer []Lecturer `gorm:"foreignKey:status_staff_id"`

	Student []Student `gorm:"foreignKey:status_staff_id"`
}

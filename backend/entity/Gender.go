package entity

import (
	"gorm.io/gorm"
)

type Gender struct {
	gorm.Model
	Gender string `json:"gender"`

	Lecturer []Lecturer `gorm:"foreignKey:gender_id "`
	Student []Student `gorm:"foreignKey:gender_id "`
}
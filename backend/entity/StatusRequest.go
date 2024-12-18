package entity

import "gorm.io/gorm"

type StatusRequest struct {
	gorm.Model
	StatusRequestName string

	Request []Request `gorm:"foreignKey:StatusRequestID"`

} 
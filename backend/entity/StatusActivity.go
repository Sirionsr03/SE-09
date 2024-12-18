package entity

import "gorm.io/gorm"

type StatusActivity struct {
	gorm.Model
	StatusActivityName string

	Activity []Activity `gorm:"foreignKey:StatusActivityID"`

} 
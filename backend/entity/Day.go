package entity

import "gorm.io/gorm"

type Day struct {
	gorm.Model
	DayName string
	
}
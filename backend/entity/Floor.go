package entity

import (
	"gorm.io/gorm"
)

type Floor struct {
	gorm.Model
	FloorNumber int
	Rooms       []Room  `gorm:"foreignKey:FloorID"` // One-to-many relationship with Room
}



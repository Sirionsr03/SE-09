package entity

import "gorm.io/gorm"

type RequestType struct {
	gorm.Model
	RequestTypeName string

	Request []Request `gorm:"foreignKey:RequestTypeID"`

} 
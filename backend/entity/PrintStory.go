package entity

import (
	"time"

	"gorm.io/gorm"
)

type PrintStory struct {
	gorm.Model
	PrintStoryCode string
	DocumentPath string  
	CreateAt time.Time   
 
	RequestID  uint
	Request   Request `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`

}
 
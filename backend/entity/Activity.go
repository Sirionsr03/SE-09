package entity

import (
	"time"

	"gorm.io/gorm"
)

type Activity struct {
	gorm.Model
	ActivityName  string
	Description string
	ActivityDate  time.Time
	StartTime  time.Time
	EndTime time.Time
	Location string
	Organizer string
	MaxParticipants int
	 

	StudentID uint
	Student   Student `gorm:"foreignKey:StudentID"`
    
	DormitoryID uint
	Dormitory Dormitory `gorm:"foreignKey:DormitoryID "`

	StatusActivityID uint
	StatusActivity StatusActivity `gorm:"foreignKey:StatusActivityID"`
}
 
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
	 

	Student   []Student `gorm:"many2many:enrolment;" json:"student"`

	AdminID uint
	Admin   Admin `gorm:"foreignKey:AdminID"`
    
	DormitoryID uint
	Dormitory Dormitory `gorm:"foreignKey:DormitoryID "`

	StatusActivityID uint
	StatusActivity StatusActivity `gorm:"foreignKey:StatusActivityID"`


}
 
package entity

import (
	"gorm.io/gorm"
)

type Building struct {
	gorm.Model
	TotalFloors    int     
	Location      string            
	BuildingName       string    
	Description       string                  
	Classroom []Classroom `gorm:"foreignKey:BuildingID"`
	ConditionID uint    `json:"conditionID_id"`
	Condition   Condition `gorm:"foreignKey:ConditionID" json: "condition"`
}
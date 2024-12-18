package entity

import (
	"gorm.io/gorm"
)

type Classroom struct {
	gorm.Model
	RoomNumber   int     
	capacity     int            
	status       string           
	Floor       int       
	BuildingID uint    //`json:"building_id"`
	Building   Building `gorm:"foreignKey:BuildingID" `
	ConditionID uint    `json:"conditionID_id"`
	Condition   Condition `gorm:"foreignKey:ConditionID" json: "condition"`
}
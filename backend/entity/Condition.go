package entity

import (
	"gorm.io/gorm"
)

type Condition struct {
	gorm.Model
	ConditionTypeName    string     
	location      string            
	Description  string                  
	Classroom []Classroom `gorm:"foreignKey:ConditionID"`
	Building []Building `gorm:"foreignKey:ConditionID"`


}
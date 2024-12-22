package entity

import (
	"gorm.io/gorm"
	"time"
)

type StudentEvaluatio struct {
	gorm.Model
	GradingDate     time.Time            
	Description       string           
	GradeScaleID uint    //`json:"building_id"`
	GradeScale   GradeScale `gorm:"foreignKey:GradeScaleID" `
	AssessmentTypeID uint    //`json:"conditionID_id"`
	AssessmentType   AssessmentType `gorm:"foreignKey:AssessmentTypeID" `
}
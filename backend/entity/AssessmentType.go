package entity

import (
	"gorm.io/gorm"
)

type AssessmentType struct {
	gorm.Model
	AssessmentTypeName    string     
	Score  float32                  
	StudentEvaluatio []StudentEvaluatio `gorm:"foreignKey:AssessmentTypeID"`
}
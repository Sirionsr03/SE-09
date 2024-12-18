package entity

import (
	"gorm.io/gorm"
)

type GradeScale struct {
	gorm.Model
	GradeScaleName    string     
	MinScore  float32
	MaxScore   float32               
	StudentEvaluatio []StudentEvaluatio `gorm:"foreignKey:GradeScaleID"`
}
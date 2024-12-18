package entity

import (
	"time"

	"gorm.io/gorm"
)

type Thesis struct {
	gorm.Model
	Title           string
	PublicationDate time.Time
	URL             string

	LecturerThesis []LecturerThesis `gorm:"foreignKey:thesis_id"`
}

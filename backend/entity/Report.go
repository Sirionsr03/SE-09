package entity


import (

	"time"

   "gorm.io/gorm"

)

type Report struct {

   gorm.Model

   Note string    `json:"note"`

   Rate		int  `json:"rate"`

   Photo string    `json:"photo"`

   StudentID  uint      `json:"student_id"`

   Student    *Student  `gorm:"foreignKey: student_id" json:"student"`

   Status  string      `json:"status"`

   DateApprove  time.Time `json:"dapprove"`

   DateReport  time.Time `json:"dreport"`

   AdminID  uint      `json:"admin_id"`

   Admin    *Admin  `gorm:"foreignKey: admin_id" json:"admin"`

   BooksID  uint      `json:"book_id"`

   Books    *Books  `gorm:"foreignKey: book_id" json:"book"`

   DormID  uint      `json:"dorm_id"`

   Dorm    *Dormitory  `gorm:"foreignKey: dorm_id" json:"dorm"`

}
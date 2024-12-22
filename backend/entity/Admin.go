package entity


import (

   "time"

   "gorm.io/gorm"

)

type Admin struct {

   gorm.Model

   FirstName string    `json:"first_name"`
   LastName  string    `json:"last_name"`
   Email     string    `json:"email"`
   Profile   string `gorm:"type:longtext"`
   Age       uint8     `json:"age"`
   Password  string    `json:"-"`
   BirthDay  time.Time `json:"birthday"`

   Activity []Activity `gorm:"foreignKey:AdminID"`

}
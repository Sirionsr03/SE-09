package controller


import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
)

type (
	LecturerInput struct {
		LecturerCode string    `json:"lecturer_code"`
		FirstName    string    `json:"first_name"`
		LastName     string    `json:"last_name"`
		Gender       string    `json:"gender"`
		Age          int       `json:"age"`
		Email        string    `json:"email"`
		Password     string    `json:"password"`
		Phone        string    `json:"phone"`
		DateEmployed time.Time `json:"date_employed"`
		Position     string    `json:"position"`
		Major        string    `json:"major"`
		StatusStaff  string    `json:"status_staff"`
	}
)

func CreateLecturer(c *gin.Context) {
	var lecturerData LecturerInput

	if err := c.ShouldBindJSON(&lecturerData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ข้อมูลไม่ถูกต้อง",
		})
		return
	}

	db := config.DB()

	var gender entity.Gender
	if err := db.Where("gender = ?", lecturerData.Gender).First(&gender).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลเพศ",
		})
		return
	}

	var position entity.Position
	if err := db.Where("position = ?", lecturerData.Position).First(&position).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลตำแหน่ง",
		})
		return
	}

	var major entity.Major
	if err := db.Where("major_name = ?", lecturerData.Major).First(&major).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลสาขา",
		})
		return
	}

	var statusstaff entity.StatusStaff
	if err := db.Where("status_staff = ?", lecturerData.StatusStaff).First(&statusstaff).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลสถานะการทำงาน",
		})
		return
	}

	tx := db.Begin()

	lecturer := entity.Lecturer{
		LecturerCode:  lecturerData.LecturerCode,
		FirstName:     lecturerData.FirstName,
		LastName:      lecturerData.LastName,
		Age:           lecturerData.Age,
		Email:         lecturerData.Email,
		Password:      lecturerData.Password,
		Phone:         lecturerData.Phone,
		PositionID:    &position.ID,
		GenderID:      &gender.ID,
		MajorID:       &major.ID,
		StatusStaffID: &statusstaff.ID,
	}

	if err := tx.Create(&lecturer).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่สามารถเพิ่มข้อมูลอาจารย์ได้",
		})
		return
	}


	tx.Commit()

	c.JSON(http.StatusOK, gin.H{
		"message": "ข้อมูลอาจารย์ถูกเพิ่มเรียบร้อยแล้ว",
	})
}


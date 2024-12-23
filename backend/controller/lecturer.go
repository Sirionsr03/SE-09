package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
	"net/http"
)

func CreateLecturer(c *gin.Context) {
	var lecturerData entity.Lecturer

	if err := c.ShouldBindJSON(&lecturerData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ข้อมูลไม่ถูกต้อง",
		})
		return
	}

	db := config.DB()

	var genderID, positionID, majorID, statusStaffID uint
	statusStaffID = 1

	if lecturerData.GenderID != nil {
		genderID = uint(*lecturerData.GenderID)
	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลเพศ",
		})
		return
	}

	if lecturerData.PositionID != nil {
		positionID = uint(*lecturerData.PositionID)
	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลตำแหน่ง",
		})
		return
	}

	if lecturerData.MajorID != nil {
		majorID = uint(*lecturerData.MajorID)
	} else {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "ไม่พบข้อมูลสาขา",
		})
		return
	}

	tx := db.Begin()

	hashedPassword, err := config.HashPassword(lecturerData.Password)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "ไม่สามารถเข้ารหัสรหัสผ่านได้",
		})
		return
	}

	lecturer := entity.Lecturer{
		LecturerCode:  lecturerData.LecturerCode,
		FirstName:     lecturerData.FirstName,
		LastName:      lecturerData.LastName,
		BirthDay:      lecturerData.BirthDay,
		Email:         lecturerData.Email,
		Password:      hashedPassword,
		Phone:         lecturerData.Phone,
		Profile:       lecturerData.Profile,
		DateEmployed:  lecturerData.DateEmployed,
		GenderID:      &genderID,
		PositionID:    &positionID,
		MajorID:       &majorID,
		StatusStaffID: &statusStaffID,
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

func GetLecturerByMajorID(c *gin.Context) {
	majorID := c.Param("id")
	var lecturer []entity.Lecturer

	db := config.DB()
	results := db.Model(&entity.Lecturer{}).Select("*").Where("major_id = ?", majorID).Find(&lecturer)

	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	if len(lecturer) == 0 {
		c.JSON(http.StatusNoContent, gin.H{"message": "ไม่มีข้อมูล Lecturer สำหรับ MajorID ที่ระบุ"})
		return
	}

	var count int64
	countResults := db.Model(&entity.Lecturer{}).Where("major_id = ?", majorID).Count(&count)

	if countResults.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ไม่สามารถนับจำนวนอาจารย์ได้"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"data":       lecturer,
		"totalCount": count,
	})
}

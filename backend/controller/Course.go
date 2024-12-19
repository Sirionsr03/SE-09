package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
)

// GET /printStory
func GetCourse(c *gin.Context) {
	var course []entity.Course

	db := config.DB()
	result := db.Preload("Course").Find(&course)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, course)
}


// POST /Course
func CreateCourse(c *gin.Context) {
	var Course entity.Course

	// Bind the request data to the Request struct
	if err := c.ShouldBindJSON(&Course); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := config.DB()

	// Create the new Course
	newCourse := entity.Course{

		CourseCode: Course.CourseCode,
		CourseName: Course.CourseName,
		Credit: Course.Credit,
		Group: Course.Group,
		MaxSeat: Course.MaxSeat,
		Status:Course.Status,
		LecturerID:Course.LecturerID,
	}

	// Save the new Request to the database
	if err := db.Create(&newCourse).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Created successfully", "data": newCourse})
}

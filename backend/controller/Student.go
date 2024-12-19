package controller

import (
	"net/http"

	"github.com/sut67/team09/config"
	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/entity"
)

// GET /student
func GetStudent(c *gin.Context) { 
	var student []entity.Student

	db := config.DB()
	result := db.Preload("Student").Find(&student)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, student)
}
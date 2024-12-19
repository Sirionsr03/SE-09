package controller

// import (
// 	"net/http"

// 	"github.com/sut67/team09/config"

// 	"github.com/gin-gonic/gin"
// 	"github.com/sut67/team09/entity"
// )

// // GET /requestType
// func GetGender(c *gin.Context) {
// 	var gender []entity.Gender

// 	db := config.DB()

// 	db.Find(&gender)

// 	c.JSON(http.StatusOK, &gender)
// }
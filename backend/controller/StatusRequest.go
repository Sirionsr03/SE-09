package controller

import (
	"net/http"

	"github.com/sut67/team09/config"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/entity"
)

// GET /statusRequest
func GetStatusRequest(c *gin.Context) {
	var statusRequest []entity.StatusRequest

	db := config.DB()

	db.Find(&statusRequest)

	c.JSON(http.StatusOK, &statusRequest)
}
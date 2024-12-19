package controller

import (
	"net/http"

	"github.com/sut67/team09/config"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/entity"
)

// GET /requestType
func GetRequestType(c *gin.Context) {
	var requestType []entity.RequestType

	db := config.DB()

	db.Find(&requestType)

	c.JSON(http.StatusOK, &requestType)
}
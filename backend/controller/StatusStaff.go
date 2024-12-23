package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
)

func GetStatusStaffs(c *gin.Context) {
	var statusstaff []entity.StatusStaff

	db := config.DB()
	db.Find(&statusstaff)
	c.JSON(http.StatusOK, &statusstaff)
}

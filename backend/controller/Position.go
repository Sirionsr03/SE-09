package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
)

func GetPositions(c *gin.Context) {
	var position []entity.Position

	db := config.DB()
	db.Find(&position)
	c.JSON(http.StatusOK, &position)
}

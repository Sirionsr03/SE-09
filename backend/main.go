package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/controller"
	"github.com/sut67/team09/controller/pdf"

)

const PORT = "8000"

func main() {


	// open connection database
	config.ConnectionDB()

	// Generate databases
	config.SetupDatabase()

	r := gin.Default()
    r.Use(CORSMiddleware())

	
	// engine := gin.Default()

	// engine.GET("/order/bill", func(ctx *gin.Context) {
	// 	bilePDF, err := controller.GeneratePDF()
	// 	if err != nil {
	// 		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err})
	// 		return
	// 	}
	// 	ctx.Data(http.StatusOK, "application/pdf", bilePDF.Bytes())
	// })
	// engine.Run(":8000")

	router := r.Group("/")
	{	
		// router.Use(middlewares.Authorizes())

		router.POST("/lecturer", controller.CreateLecturer)

		//Student
		router.GET("/student", controller.GetStudent)

		//Course
		router.GET("/course", controller.GetCourse)
		router.POST("/createcourse", controller.CreateCourse)

		//Request
		router.GET("/request", controller.GetRequest)
		router.PATCH("/add", controller.UpdateRequest)
		router.POST("/createrequest", controller.CreateRequest)

		//Activity
		router.GET("/activity", controller.GetActivity)
		router.POST("/createActivity", controller.CreateActivity)
		router.PATCH("/updateactivity", controller.UpdateActivity)
		router.DELETE("/deleteactivity",controller.DeleteActivity)

		//PrintStory
		router.GET("/print", func(c *gin.Context) {
			pdfData, err := pdf.GeneratePDF()
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.Data(http.StatusOK, "application/pdf", pdfData.Bytes())
		})
		router.PATCH("/pdf", pdf.PatchPDF)
		router.POST("/CreatePrintStory",pdf.CreatePrintStory)

		//RequestType
		router.GET("/requestType", controller.GetRequestType)

		//StatusRequest
		router.GET("/statusRequest", controller.GetStatusRequest)

	}

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})

	// Run the server
	r.Run("localhost:" + PORT)


}

func CORSMiddleware() gin.HandlerFunc {
    return func(c *gin.Context) {
        c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

        if c.Request.Method == "OPTIONS" {
            c.AbortWithStatus(204)
            return
        }
        c.Next()
    }
}
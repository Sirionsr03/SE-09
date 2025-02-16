package main

import (
	"net/http"
	"time"

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

	router := r.Group("/")
	{	
		// router.Use(middlewares.Authorizes())

		router.POST("/lecturer", controller.CreateLecturer)

		//Student
		router.GET("/student", controller.GetStudent)
		router.GET("/degree", controller.GetDegrees)
		router.GET("/faculty", controller.GetFaculty)
		router.GET("/majorbyfacultyid/:id", controller.GetMajorByFacultyID)

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




		//เดิม ที่ดึง pdf และข้อมูลมาได้  start
		router.GET("/print", func(c *gin.Context) {
			inputName := ""
			inputStudentID := ""
			Degree :=""
			Faculty := ""
			Major := ""
			Details := ""
			CourseCode := ""
			CourseTitle := ""
			Group := ""
			OldGroup := ""
			NewGroup := ""
			SpecifyReason := ""
			inputPhoneNumber := ""
			Date := time.Now()

			pdfData, err := pdf.GeneratePDF(inputName, inputStudentID, Degree, Faculty, Major, Details, CourseCode, CourseTitle, Group, OldGroup, NewGroup, SpecifyReason, inputPhoneNumber, Date)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.Data(http.StatusOK, "application/pdf", pdfData.Bytes())
		})
		//เดิม ที่ดึง pdf และข้อมูลมาได้  end



		//เดิม ที่ดึง pdf และข้อมูลมาได้  start
		router.GET("/print2", func(c *gin.Context) {
			inputName := ""
			inputStudentID := ""
			Degree :=""
			Faculty := ""
			Major := ""
			Details := ""
			CourseCode := ""
			CourseTitle := ""
			Group := ""
			OldGroup := ""
			NewGroup := ""
			SpecifyReason := ""
			inputPhoneNumber := ""
			Date := time.Now()
	
			pdfData, err := pdf.GeneratePDF2(inputName, inputStudentID, Degree, Faculty, Major, Details, CourseCode, CourseTitle, Group, OldGroup, NewGroup, SpecifyReason, inputPhoneNumber, Date)
			if err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			c.Data(http.StatusOK, "application/pdf", pdfData.Bytes())
		})
		//เดิม ที่ดึง pdf และข้อมูลมาได้  end

		router.PATCH("/pdf", pdf.PatchPDF)
		router.POST("/CreatePrintStory",pdf.CreatePrintStory)
		router.GET("/printstory", pdf.GetPrintStory)

		//Request
		router.GET("/request", controller.GetRequest)
		router.GET("/requesttype", controller.GetRequestType)
		router.GET("/statusRequest", controller.GetStatusRequest)
		router.PATCH("/add", controller.UpdateRequest)
		router.POST("/createrequest", controller.CreateRequest) 
		router.GET("/request/:student_id", controller.GetRequestByStudentID)

		router.GET("/activity")

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
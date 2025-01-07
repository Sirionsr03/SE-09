// package controller

// import (
// 	"net/http"
// 	"time"

// 	"github.com/sut67/team09/config"

// 	"github.com/gin-gonic/gin"
// 	"github.com/sut67/team09/entity"
// )

// // POST /Requests
// func CreateRequest(c *gin.Context) {
// 	var Request entity.Request

// 	// Bind the request data to the Request struct
// 	if err := c.ShouldBindJSON(&Request); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	db := config.DB()

// 	Request.RequestDate = time.Now()
// 	// Create the new Request
// 	newRequest := entity.Request{
// 		RequestDate: time.Now(),
// 		Note : Request.Note ,    
// 		StudentID:Request.StudentID, 
// 		RequestTypeID: Request.RequestTypeID,
// 		StatusRequestID:Request.StatusRequestID,
// 		CourseID: Request.CourseID,
// 	}

// 	// Save the new Request to the database
// 	if err := db.Create(&newRequest).Error; err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusCreated, gin.H{"message": "Created successfully", "data": newRequest})
// }


// // GET /request
// func GetRequest(c *gin.Context) { 
// 	var request []entity.Request

// 	db := config.DB()
// 	result := db.Preload("Request").Find(&request)
// 	if result.Error != nil {
// 		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
// 		return
// 	}
// 	c.JSON(http.StatusOK, request)
// }

// // PATCH /request
// func UpdateRequest(c *gin.Context) {
// 	var Request entity.Request
// 	RequestID := c.Param("id")

// 	db := config.DB()
// 	result := db.First(&Request, RequestID)
// 	if result.Error != nil {
// 		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
// 		return
// 	}

// 	if err := c.ShouldBindJSON(&Request); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
// 		return
// 	}

// 	result = db.Model(&Request).Updates(Request)
// 	if result.Error != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
// }









//code git
package controller

import (
	"net/http"
	"time"

	"github.com/sut67/team09/config"

	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/entity"
)

// POST /Requests
func CreateRequest(c *gin.Context) {
	var Request entity.Request

	// Bind the request data to the Request struct
	if err := c.ShouldBindJSON(&Request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := config.DB()

	Request.RequestDate = time.Now()
	// Create the new Request
	newRequest := entity.Request{
		RequestDate: time.Now(),
		Note : Request.Note ,    
		StudentID:Request.StudentID, 
		RequestTypeID: Request.RequestTypeID,
		StatusRequestID:Request.StatusRequestID,
		CourseID: Request.CourseID,
	}

	// Save the new Request to the database
	if err := db.Create(&newRequest).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Created successfully", "data": newRequest})
}


// GET /request
func GetRequest(c *gin.Context) { 
	var request []entity.Request

	db := config.DB()
	result := db.Preload("Request").Find(&request)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, request)
}

// PATCH /request
func UpdateRequest(c *gin.Context) {
	var Request entity.Request
	RequestID := c.Param("id")

	db := config.DB()
	result := db.First(&Request, RequestID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
		return
	}

	if err := c.ShouldBindJSON(&Request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}

	result = db.Model(&Request).Updates(Request)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
}


// GET /request/:student_id
func GetRequestByStudentID(c *gin.Context) {
    // Get the student ID from the URL parameters
    studentID := c.Param("student_id")

    // Validate if the student ID is provided
    if studentID == "" {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Student ID is required"})
        return
    }

    var requests []entity.Request

    // Query the database to find requests that match the student ID
    db := config.DB()
    result := db.Preload("Student").Preload("RequestType").Preload("StatusRequest").Preload("Course").Where("student_id = ?", studentID).Find(&requests)

    // If there is an error during the query, return it
    if result.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
        return
    }

    // Return the filtered requests
    c.JSON(http.StatusOK, requests)
}

package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
)

// GET /activity
func GetActivity(c *gin.Context) { // เข้าถึงข้อมูลกิจกรรม
	var activity []entity.Activity

	db := config.DB()
	result := db.Preload("Admin").Find(&activity)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, activity)
}

// POST /activity
func CreateActivity(c *gin.Context) {
	var activity entity.Activity

	// bind เข้าตัวแปร product
	if err := c.ShouldBindJSON(&activity); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db := config.DB()

	// สร้าง Activity พร้อมกับข้อมูล Seller
	a := entity.Activity{
		ActivityName:  activity.ActivityName,
		Description:   activity.Description,
		ActivityDate:  activity.ActivityDate,
		StartTime: activity.StartTime,
		EndTime: activity.EndTime,
		Location: activity.Location,
		Organizer: activity.Organizer,
		MaxParticipants: activity.MaxParticipants,

		// StudentID: activity.StudentID,
		AdminID: activity.AdminID,
		DormitoryID: activity.DormitoryID,
		StatusActivityID: activity.StatusActivityID,
	}

	// บันทึก Activity
	if err := db.Create(&a).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "Created success", "data": a})
}

// // GET /activity/:id
// func GetactivityBYID(c *gin.Context) {
// 	ID := c.Param("id")
// 	var product entity.Activity

// 	db := config.DB()

// 	// ใช้ Preload เพื่อนำข้อมูล Seller มาใน Product ด้วย
// 	result := db.Preload("Seller").First(&product, ID)
// 	if result.Error != nil {
// 		c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
// 		return
// 	}

// 	c.JSON(http.StatusOK, product)
// }

// PATCH /activity/:id
func UpdateActivity(c *gin.Context) { //อัพเดตข้อมูลตาม id
	var activity entity.Activity

	ActivityID := c.Param("id")

	db := config.DB()
	result := db.First(&activity, ActivityID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
		return
	}

	if err := c.ShouldBindJSON(&activity); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}

	result = db.Save(&activity)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
}


// DELETE /activity/:id
func DeleteActivity(c *gin.Context) { //ลบข้อมูลตาม id
	id := c.Param("id")
	db := config.DB()
	if tx := db.Exec("DELETE FROM activity WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "id not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Deleted successful"})
}



// func GetactivityByMemberID(c *gin.Context) {
//     memberID := c.Param("member_id")
//     var activity []entity.Activity

//     db := config.DB()

//     // Query to join tables and filter by member_id
//     result := db.
//         Joins("JOIN activity_orders ON activity_orders.product_id = activity.id").
//         Joins("JOIN orders ON orders.id = activity_orders.order_id").
//         Where("orders.member_id = ?", memberID).
//         Preload("Seller").
//         Find(&activity)

//     if result.Error != nil {
//         c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
//         return
//     }

//     c.JSON(http.StatusOK, gin.H{"activity": activity})
// }



// // GET /activity/search/:title
// func GetactivityByTitle(c *gin.Context) {
//     title := c.Param("title")  // รับค่าจาก URL พารามิเตอร์
//     var activity []entity.Activity

//     db := config.DB()

//     // ค้นหาสินค้าที่มี title คล้ายกับค่าที่รับมา โดยใช้ LIKE
//     result := db.Where("title LIKE ?", "%"+title+"%").Preload("Seller").Find(&activity)
//     if result.Error != nil {
//         c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
//         return
//     }

//     c.JSON(http.StatusOK, gin.H{"activity": activity})
// }




// // GET /activity/seller/:seller_id
// func GetactivityBySellerID(c *gin.Context) {
//     sellerID := c.Param("seller_id")  // รับค่าจาก URL พารามิเตอร์
//     var activity []entity.activity

//     db := config.DB()

//     // ค้นหาสินค้าที่มี SellerID ตรงกับค่าที่รับมา
//     result := db.Where("seller_id = ?", sellerID).Preload("Seller").Find(&activity)
//     if result.Error != nil {
//         c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
//         return
//     }

//     c.JSON(http.StatusOK, gin.H{"activity": activity})
// }


func UpdateActivityById(c *gin.Context) {
    var activity entity.Activity  // Ensure this is the correct struct

    ActivityID := c.Param("id")

    db := config.DB()
    result := db.First(&activity, ActivityID)
    if result.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Product ID not found"})
        return
    }

    if err := c.ShouldBindJSON(&activity); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
        return
    }

    result = db.Save(&activity)  // Save the updated product data

    if result.Error != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update product"})
        return
    }

    c.JSON(http.StatusOK, gin.H{"message": "Updated successfully"})
}


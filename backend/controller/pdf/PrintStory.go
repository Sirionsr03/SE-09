// package controller

// import (
// 	"bytes"
// 	"fmt"
// 	"net/http"
// 	"time"

// 	"github.com/gin-gonic/gin"
// 	"github.com/johnfercher/maroto/pkg/color"
// 	"github.com/johnfercher/maroto/pkg/consts"
// 	"github.com/johnfercher/maroto/pkg/pdf"
// 	"github.com/johnfercher/maroto/pkg/props"
// 	"github.com/sut67/team09/config"
// 	"github.com/sut67/team09/entity"
// 	// "github.com/sut67/team09/config"
// 	// "github.com/sut67/team09/entity"
// )

// type UpdateContentRequest struct {
// 	Contents [][]string `json:"contents"`
// }

// func PatchPDF(c *gin.Context) {
// 	var request UpdateContentRequest

// 	// ตรวจสอบข้อมูลที่เข้ามาใน Request
// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
// 		return
// 	}

// 	// สร้าง PDF ใหม่พร้อมเนื้อหาที่อัพเดต
// 	newContents := request.Contents
// 	pdfBuffer, err := GenerateUpdatedPDF(newContents)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating PDF"})
// 		return
// 	}

// 	// ส่ง PDF ที่อัปเดตแล้วกลับไป
// 	c.Header("Content-Type", "application/pdf")
// 	c.Header("Content-Disposition", "attachment; filename=updated_invoice.pdf")
// 	c.Data(http.StatusOK, "application/pdf", pdfBuffer.Bytes())
// }

// func GenerateUpdatedPDF(contents [][]string) (bytes.Buffer, error) {
// 	// กำหนดส่วนหัวใหม่
// 	header := getHeader()

// 	// ใช้ฟังก์ชัน GeneratePDF เดิม แต่แทนที่เนื้อหา
// 	m := pdf.NewMaroto(consts.Portrait, consts.A4)
// 	m.SetPageMargins(10, 15, 10)

// 	// ส่วนของ Header และ Footer
// 	m.RegisterHeader(func() {
// 		m.Row(20, func() {
// 			m.Col(12, func() {
// 				m.Text("Updated Invoice", props.Text{
// 					Size:  16,
// 					Style: consts.Bold,
// 					Align: consts.Center,
// 				})
// 			})
// 		})
// 	})
// 	m.RegisterFooter(func() {
// 		m.Row(10, func() {
// 			m.Col(12, func() {
// 				m.Text("Updated by API", props.Text{
// 					Top:   3,
// 					Style: consts.Italic,
// 					Size:  10,
// 					Align: consts.Center,
// 				})
// 			})
// 		})
// 	})

// 	// สร้างตารางใหม่
// 	m.TableList(header, contents, props.TableList{
// 		HeaderProp: props.TableListContent{
// 			Size:      9,
// 			GridSizes: []uint{3, 4, 2, 3},
// 		},
// 		ContentProp: props.TableListContent{
// 			Size:      8,
// 			GridSizes: []uint{3, 4, 2, 3},
// 		},
// 		// AlternatedBackground: &getGrayColor(),
// 		HeaderContentSpace:   1,
// 		Line:                 true,
// 	})

// 	// ส่งออก PDF
// 	return m.Output()
// }

// func GeneratePDF() (bytes.Buffer, error) {
// 	begin := time.Now()

// 	darkGrayColor := getDarkGrayColor()
// 	grayColor := getGrayColor()
// 	whiteColor := color.NewWhite()
// 	blueColor := getBlueColor()
// 	redColor := getRedColor()
// 	header := getHeader()
// 	contents := getContents()

// 	m := pdf.NewMaroto(consts.Portrait, consts.A4)
// 	m.AddUTF8Font("THSarabun", consts.Normal, "./font/THSarabun.ttf")
// 	m.AddUTF8Font("THSarabun", consts.Italic, "./font/THSarabun Italic.ttf")
// 	m.AddUTF8Font("THSarabun", consts.Bold, "./font/THSarabun Bold.ttf")
// 	m.AddUTF8Font("THSarabun", consts.BoldItalic, "./font/THSarabun Bold Italic.ttf")
// 	m.SetDefaultFontFamily("THSarabun")
// 	m.SetPageMargins(10, 15, 10)

// 	m.RegisterHeader(func() {
// 		m.Row(20, func() {
// 			m.Col(3, func() {
// 				_ = m.FileImage("Hotpot.png", props.Rect{
// 					Center:  true,
// 					Percent: 80,
// 				})
// 			})
// 			m.ColSpace(6)

// 			m.Col(3, func() {
// 				m.Text("บริษัทกล้วยหอม โฟน. 851 ดงแสนโน, บ้านหองแดง, อำนาจไม่สุด, 45123.", props.Text{
// 					Size:        8,
// 					Align:       consts.Right,
// 					Extrapolate: false,
// 					Color:       redColor,
// 				})
// 				m.Text("Tel: 55 024 12345-1234", props.Text{
// 					Top:   12,
// 					Style: consts.BoldItalic,
// 					Size:  8,
// 					Align: consts.Right,
// 					Color: blueColor,
// 				})
// 				m.Text("www.mycompany.com", props.Text{
// 					Top:   15,
// 					Style: consts.BoldItalic,
// 					Size:  8,
// 					Align: consts.Right,
// 					Color: blueColor,
// 				})
// 			})
// 		})
// 	})

// 	m.RegisterFooter(func() {
// 		m.Row(20, func() {
// 			m.Col(12, func() {
// 				m.Text("Tel: 55 024 12345-1234", props.Text{
// 					Top:   13,
// 					Style: consts.BoldItalic,
// 					Size:  8,
// 					Align: consts.Left,
// 					Color: blueColor,
// 				})
// 				m.Text("www.mycompany.com", props.Text{
// 					Top:   16,
// 					Style: consts.BoldItalic,
// 					Size:  8,
// 					Align: consts.Left,
// 					Color: blueColor,
// 				})
// 			})
// 		})
// 	})

// 	m.Row(10, func() {
// 		m.Col(12, func() {
// 			m.Text("หมายเลข Invoice BANANA-123456789", props.Text{
// 				Top:   3,
// 				Style: consts.Bold,
// 				Align: consts.Center,
// 			})
// 		})
// 	})

// 	m.SetBackgroundColor(darkGrayColor)

// 	m.Row(7, func() {
// 		m.Col(3, func() {
// 			m.Text("Transactions", props.Text{
// 				Top:   1.5,
// 				Size:  9,
// 				Style: consts.Bold,
// 				Align: consts.Center,
// 				Color: color.NewWhite(),
// 			})
// 		})
// 		m.ColSpace(9)
// 	})

// 	m.SetBackgroundColor(whiteColor)

// 	m.TableList(header, contents, props.TableList{
// 		HeaderProp: props.TableListContent{
// 			Size:      9,
// 			GridSizes: []uint{3, 4, 2, 3},
// 		},
// 		ContentProp: props.TableListContent{
// 			Size:      8,
// 			GridSizes: []uint{3, 4, 2, 3},
// 		},
// 		Align:                consts.Center,
// 		AlternatedBackground: &grayColor,
// 		HeaderContentSpace:   1,
// 		Line:                 false,
// 	})

// 	m.Row(20, func() {
// 		m.ColSpace(7)
// 		m.Col(2, func() {
// 			m.Text("Total:", props.Text{
// 				Top:   5,
// 				Style: consts.Bold,
// 				Size:  8,
// 				Align: consts.Right,
// 			})
// 		})
// 		m.Col(3, func() {
// 			m.Text("R$ 2.567,00", props.Text{
// 				Top:   5,
// 				Style: consts.Bold,
// 				Size:  8,
// 				Align: consts.Center,
// 			})
// 		})
// 	})

// 	m.Row(15, func() {
// 		m.Col(6, func() {
// 			_ = m.Barcode("5123.151231.512314.1251251.123215", props.Barcode{
// 				Percent: 0,
// 				Proportion: props.Proportion{
// 					Width:  20,
// 					Height: 2,
// 				},
// 			})
// 			m.Text("5123.151231.512314.1251251.123215", props.Text{
// 				Top:    12,
// 				Family: "",
// 				Style:  consts.Bold,
// 				Size:   9,
// 				Align:  consts.Center,
// 			})
// 		})
// 		m.ColSpace(6)
// 	})
// 	end := time.Now()
// 	fmt.Println("time generate", end.Sub(begin))
// 	return m.Output()
// }

// func getHeader() []string {
// 	return []string{"", "Product", "Quantity", "Price"}
// }

// func getContents() [][]string {
// 	return [][]string{
// 		{"1", "อะแดปเตอร์แปลงไฟ Apple USB-C ขนาด 20 วัตต์", "1", "R$ 4,00"},
// 		{"2", "iPad Air มีทั้งจอภาพ Liquid Retina ขนาด 10.9 นิ้ว", "1", "R$ 8,00"},
// 		{"3", "JBL GO 2 ลำโพงบลูทูธแบบพกพา", "1", "R$ 30,00"},
// 	}
// }

// func getDarkGrayColor() color.Color {
// 	return color.Color{
// 		Red:   55,
// 		Green: 55,
// 		Blue:  55,
// 	}
// }

// func getGrayColor() color.Color {
// 	return color.Color{
// 		Red:   200,
// 		Green: 200,
// 		Blue:  200,
// 	}
// }

// func getBlueColor() color.Color {
// 	return color.Color{
// 		Red:   10,
// 		Green: 10,
// 		Blue:  150,
// 	}
// }

// func getRedColor() color.Color {
// 	return color.Color{
// 		Red:   150,
// 		Green: 10,
// 		Blue:  10,
// 	}
// }

// func CreatePrintStory(c *gin.Context) {
// 	var request entity.PrintStory

// 	// Validate the incoming JSON
// 	if err := c.ShouldBindJSON(&request); err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
// 		return
// 	}
// 	db := config.DB()
// 	// Map DTO to Entity
// 	printStory := entity.PrintStory{
// 		PrintStoryCode: request.PrintStoryCode,
// 		DocumentPath:   request.DocumentPath,
// 		CreateAt:       request.CreateAt,
// 		RequestID:      request.RequestID,
// 	}

// 	// Save to database
// 	if err := db.Create(&printStory).Error; err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not save print story"})
// 		return
// 	}

// 	// Respond with the created record
// 	c.JSON(http.StatusCreated, gin.H{"data": printStory})
// }

//Test เฉยๆ

package pdf

import (
	"bytes"

	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/johnfercher/maroto/pkg/color"
	"github.com/johnfercher/maroto/pkg/consts"
	"github.com/johnfercher/maroto/pkg/pdf"
	"github.com/johnfercher/maroto/pkg/props"
	"github.com/sut67/team09/config"
	"github.com/sut67/team09/entity"
	// "github.com/sut67/team09/config"
	// "github.com/sut67/team09/entity"
)

type UpdateContentRequest struct {
	Contents [][]string `json:"contents"`
}

func PatchPDF(c *gin.Context) {
	var request UpdateContentRequest

	// ตรวจสอบข้อมูลที่เข้ามาใน Request
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
		return
	}

	// สร้าง PDF ใหม่พร้อมเนื้อหาที่อัพเดต
	newContents := request.Contents
	pdfBuffer, err := GenerateUpdatedPDF(newContents)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error generating PDF"})
		return
	}

	// ส่ง PDF ที่อัปเดตแล้วกลับไป
	c.Header("Content-Type", "application/pdf")
	c.Header("Content-Disposition", "attachment; filename=updated_invoice.pdf")
	c.Data(http.StatusOK, "application/pdf", pdfBuffer.Bytes())
}

func GenerateUpdatedPDF(contents [][]string) (bytes.Buffer, error) {
	// กำหนดส่วนหัวใหม่
	header := getHeader()

	// ใช้ฟังก์ชัน GeneratePDF เดิม แต่แทนที่เนื้อหา
	m := pdf.NewMaroto(consts.Portrait, consts.A4)
	m.SetPageMargins(10, 15, 10)

	// ส่วนของ Header และ Footer
	m.RegisterHeader(func() {
		m.Col(3, func() {
			_ = m.FileImage("sut.png", props.Rect{
				Center:  true,
				Percent: 80,
			})
		})
		m.ColSpace(6)

		m.Row(20, func() {
			m.Col(12, func() {
				m.Text("Updated Invoice", props.Text{
					Size:  16,
					Style: consts.Bold,
					Align: consts.Center,
				})
			})
		})
	})
	m.RegisterFooter(func() {
		m.Row(10, func() {
			m.Col(12, func() {
				m.Text("Updated by API", props.Text{
					Top:   3,
					Style: consts.Italic,
					Size:  10,
					Align: consts.Center,
				})
			})
		})
	})

	// สร้างตารางใหม่
	m.TableList(header, contents, props.TableList{
		HeaderProp: props.TableListContent{
			Size:      9,
			GridSizes: []uint{3, 4, 2, 3},
		},
		ContentProp: props.TableListContent{
			Size:      8,
			GridSizes: []uint{3, 4, 2, 3},
		},
		// AlternatedBackground: &getGrayColor(),
		HeaderContentSpace: 1,
		Line:               true,
	})

	// ส่งออก PDF
	return m.Output()
}

func GeneratePDF() (bytes.Buffer, error) {
	// begin := time.Now()
	darkGrayColor := getDarkGrayColor()
	// grayColor := getGrayColor()
	// whiteColor := color.NewWhite()
	// blueColor := getBlueColor()
	// redColor := getRedColor()
	// header := getHeader()
	// contents := getContents()

	m := pdf.NewMaroto(consts.Portrait, consts.A4)
	m.AddUTF8Font("THSarabun", consts.Normal, "./font/THSarabun.ttf")
	m.AddUTF8Font("THSarabun", consts.Italic, "./font/THSarabun Italic.ttf")
	m.AddUTF8Font("THSarabun", consts.Bold, "./font/THSarabun Bold.ttf")
	m.AddUTF8Font("THSarabun", consts.BoldItalic, "./font/THSarabun Bold Italic.ttf")
	m.SetDefaultFontFamily("THSarabun")
	m.SetPageMargins(10, 15, 10)

	inputName := "Sirion Srimueang"
	inputStudentID := "B6505066"
	Degree := "ปริญญาตรี"
	Institute := "สำนักวิชาศาสตร์และศิลป์ดิจิทัล"
	SchoolOf := "หลักสูตรการบริหารงานก่อสร้างและสาธารณูปโภค"
	Details := "เพิ่มรายวิชา Add more courses"
	CourseCode := "ENG23 3052"
	CourseTitle := "COMPUTER AND COMMUNICATION"
	Approved := "⬛ อนุญาต Approved"
	NotApproved := "⬛ ไม่อนุญาต Not Approved"

	// Form Header
	m.Row(15, func() {

		m.Col(1, func() { // Add space for the logo
			_ = m.FileImage("sut.jpg", props.Rect{
				Center:  false,
				Percent: 150, // Adjust size as necessary
			})
		})

		m.Col(12, func() {
			m.Text("คำร้องขอลงทะเบียนเพิ่ม / เปลี่ยนกลุ่ม / ลดรายวิชา                                                                    ท.1", props.Text{
				Top:   0,
				Size:  16,
				Style: consts.Bold,
				Align: consts.Left,
			})
			m.Text("Request to Register for Additional Credits / to Change Study Group / to Reduce Courses", props.Text{
				Top:   6,
				Size:  16,
				Style: consts.Bold,
				Align: consts.Left,
			})
			m.Row(8, func() {})
		})
	})

	// เส้นคั้นระหว่างส่วนหัวกับรายละเอียดคำร้อง
	m.Line(1, props.Line{

		Width: 0.5, // ความหนาของเส้น 2
	})
	m.Line(1, props.Line{

		Width: 0.5, // ความหนาของเส้น 2
	})

	m.Row(105, func() {
		m.Col(12, func() {
			m.Text("เรียน   อาจารย์ผู้สอน / อาจารย์ผู้รับผิดชอบวิชา    Dear Instructor / Course Coordinator", props.Text{
				Top:   1.5,
				Size:  11,
				Align: consts.Left,
				Left:  3,
				Style: consts.Bold,
			})
			m.Text("ข้าพเจ้า ( นาย / นาง / นางสาว ) I am (Mr. / Mrs. / Miss)", props.Text{
				Top:   7.5,
				Size:  11,
				Align: consts.Left,
				Left:  10, // Add a slight indentation to the left (move the text to the right)
			})

			m.Text(inputName, props.Text{
				Top:   7.5,
				Size:  11,
				Align: consts.Left,
				Left:  80,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("เลขประจำตัว Student code ", props.Text{
				Top:   7.5,
				Size:  11,
				Align: consts.Left,
				Left:  123, // Add a slight indentation to the left (move the text to the right)
			})
			m.Text(inputStudentID, props.Text{
				Top:   7.5,
				Size:  11,
				Align: consts.Left,
				Left:  157,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("เป็นนักศึกษาระดับ a student at ", props.Text{
				Top:   13.5,
				Size:  11,
				Align: consts.Left,
				Left:  3, // Indent the text slightly to the right
			})
			m.Text(Degree, props.Text{
				Top:   13.5,
				Size:  11,
				Align: consts.Left,
				Left:  42,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("สังกัดสำนักวิชา the Institute of  ", props.Text{
				Top:   13.5,
				Size:  11,
				Align: consts.Left,
				Left:  61, // Indent the text slightly to the right
			})
			m.Text(Institute, props.Text{
				Top:   13.5,
				Size:  11,
				Align: consts.Left,
				Left:  99,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("สาขาวิชา / หลักสูตร School of  ", props.Text{
				Top:   19.5,
				Size:  11,
				Align: consts.Left,
				Left:  3, // Indent the text slightly to the right
			})
			m.Text(SchoolOf, props.Text{
				Top:   19.5,
				Size:  11,
				Align: consts.Left,
				Left:  43,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("มีความประสงค์จะลงทะเบียน wish to register : ", props.Text{
				Top:   25.5,
				Size:  11,
				Align: consts.Left,
				Left:  3, // Indent the text slightly to the right
			})

			// Add some space before the "Transactions" section
			m.Row(33, func() {})

			m.SetBackgroundColor(darkGrayColor)

			m.Row(7, func() {
				m.Col(6, func() {
					m.Text("1. รายการ Details", props.Text{
						Top:   0.5,
						Size:  11,
						Style: consts.Bold,
						Align: consts.Center,
						Color: color.NewWhite(),
					})
				})
				m.Col(6, func() {
					m.Text("2. ผลการพิจารณา Decision Made", props.Text{
						Top:   0.5,
						Size:  11,
						Style: consts.Bold,
						Align: consts.Center,
						Color: color.NewWhite(),
					})

				})
				// m.ColSpace(3)
						
			})

			m.Row(0.5, func() {})
			m.Text("|", props.Text{
				Top:   0,
				Style: consts.Bold,
				Left:  155,
				Color: darkGrayColor,
			})

			m.Row(1, func() {})

			m.Text(Details, props.Text{
				Top:   1.5,
				Size:  11,
				Align: consts.Left,
				Left:  3,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("รหัสวิชำ Course Code  ", props.Text{
				Top:   1.5,
				Size:  11,
				Align: consts.Left,
				Style: consts.Bold,
				Left:  44, // Indent the text slightly to the right
			})
			m.Text(CourseCode, props.Text{
				Top:   1.5,
				Size:  11,
				Align: consts.Left,
				Left:  74,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})
			m.Text("|", props.Text{
				Top:   1,
				Style: consts.Bold,
				Left:  155,
				Color: darkGrayColor,
			})


			m.Row(3.5, func() {})
			m.Text("ชื่อวิชา(ภาษาอังกฤษ) Course Title", props.Text{
				Top:   20.5,
				Size:  11,
				Align: consts.Left,
				Style: consts.Bold,
				Left:  3, // Indent the text slightly to the right
			})
			m.Text(CourseTitle, props.Text{
				Top:   20.5,
				Size:  11,
				Align: consts.Left,
				Left:  55,
				Style: consts.Bold, // Bold inputName text
				Color: getBlueColor(),
			})

			m.Row(12, func() {})
			m.Text("|", props.Text{
				Top:   1,
				Style: consts.Bold,
				Left:  155,
				Color: darkGrayColor,
			})
			m.Text("|", props.Text{
				Top:   52.5,
				Style: consts.Bold,
				Left:  155,
				Color: darkGrayColor,
			})

			




			// Remove background color before this section
			m.SetBackgroundColor(color.NewWhite()) // Set background back to white

			m.Row(1, func() {
				m.Col(13, func() {
					m.Text(Approved + "   " + NotApproved, props.Text{
						Top:   1.5,
						Size:  11,
						Align: consts.Left,
						Style: consts.Bold,
						Left:  100, // Adjust positioning as needed
					})
				})
			})




			// m.SetBackgroundColor(whiteColor)

			// m.TableList(header, contents, props.TableList{
			//     HeaderProp: props.TableListContent{
			//         Size:      9,
			//         GridSizes: []uint{3, 4, 2, 3},
			//     },
			//     ContentProp: props.TableListContent{
			//         Size:      8,
			//         GridSizes: []uint{3, 4, 2, 3},
			//     },
			//     Align:                consts.Center,
			//     AlternatedBackground: &grayColor,
			//     HeaderContentSpace:   1,
			//     Line:                 false,
			// })

			// m.Row(20, func() {
			//     m.ColSpace(7)
			//     m.Col(2, func() {
			//         m.Text("Total:", props.Text{
			//             Top:   28.5,
			//             Style: consts.Bold,
			//             Size:  8,
			//             Align: consts.Right,
			//         })
			//     })
			//     m.Col(3, func() {
			//         m.Text("R$ 2.567,00", props.Text{
			//             Top:   28.5,
			//             Style: consts.Bold,
			//             Size:  8,
			//             Align: consts.Center,
			//         })
			//     })
			// })

			// // Table Data
			// headers := []string{"Course Code", "Course Name", "Credits", "Section"}
			// contents := [][]string{
			// 	{"CPE101", "Introduction to Computer Engineering", "3", "1"},
			// 	{"CPE102", "Programming Fundamentals", "4", "1"},
			// 	{"CPE103", "Discrete Mathematics", "3", "1"},
			// }

			// // Add a Title for Table Section
			// m.Row(50, func() {
			// 	m.Col(12, func() {
			// 		m.Text("ตารางแสดงรายวิชาที่ขอลงทะเบียน Table of Requested Courses:", props.Text{
			// 			Top:   200,
			// 			Size:  12,
			// 			Style: consts.Bold,
			// 			Align: consts.Left,
			// 		})
			// 	})
			// })

			// // Create Table
			// m.TableList(headers, contents, props.TableList{
			// 	HeaderProp: props.TableListContent{
			// 		Size:      11,
			// 		GridSizes: []uint{3, 7, 2, 2}, // Width proportions for each column
			// 		Style:     consts.Bold,
			// 	},
			// 	ContentProp: props.TableListContent{
			// 		Size:      10,
			// 		GridSizes: []uint{3, 7, 2, 2},
			// 	},
			// 	Align: consts.Left,
			// })

			// m.Line(1, props.Line{Width: 0.5})

		})

	})

	return m.Output()
}

func getHeader() []string {
	return []string{"", "Product", "Quantity", "Price"}
}

func getContents() [][]string {
	return [][]string{
		{"1", "อะแดปเตอร์แปลงไฟ Apple USB-C ขนาด 20 วัตต์", "1", "R$ 4,00"},
		{"2", "iPad Air มีทั้งจอภาพ Liquid Retina ขนาด 10.9 นิ้ว", "1", "R$ 8,00"},
		{"3", "JBL GO 2 ลำโพงบลูทูธแบบพกพา", "1", "R$ 30,00"},
	}
}

func getDarkGrayColor() color.Color {
	return color.Color{
		Red:   55,
		Green: 55,
		Blue:  55,
	}
}

func getGrayColor() color.Color {
	return color.Color{
		Red:   200,
		Green: 200,
		Blue:  200,
	}
}

func getBlueColor() color.Color {
	return color.Color{
		Red:   10,
		Green: 10,
		Blue:  150,
	}
}

func getRedColor() color.Color {
	return color.Color{
		Red:   150,
		Green: 10,
		Blue:  10,
	}
}

func CreatePrintStory(c *gin.Context) {
	var request entity.PrintStory

	// Validate the incoming JSON
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	db := config.DB()
	// Map DTO to Entity
	printStory := entity.PrintStory{
		PrintStoryCode: request.PrintStoryCode,
		DocumentPath:   request.DocumentPath,
		CreateAt:       request.CreateAt,
		RequestID:      request.RequestID,
	}

	// Save to database
	if err := db.Create(&printStory).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Could not save print story"})
		return
	}

	// Respond with the created record
	c.JSON(http.StatusCreated, gin.H{"data": printStory})
}

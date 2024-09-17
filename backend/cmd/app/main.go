package main

import(
	"github.com/gin-gonic/gin"
	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/database"
	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/api"
)

func main() { 
	database.InitBD()

	r := gin.Default()

	r.GET("/post/get", api.GetPosts)
	r.GET("/post/delete", api.DeletePosts)
	r.Run(":8080")
}

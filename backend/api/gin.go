package api

import (
	"net/http"

	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/database"
	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/models"
	"github.com/gin-gonic/gin"
)

// post/get
func GetPosts(c *gin.Context) {
	var posts []models.Post

	result := database.DB.Find(&posts) // Получаем все записи из таблицы Post
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	
	if len(posts) == 0 {
		c.JSON(http.StatusOK, gin.H{"posts": []models.Post{}})
		return
	}
	// Возвращаем JSON с постами
	c.JSON(http.StatusOK, gin.H{
		"posts": posts,
	})
}

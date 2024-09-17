package api

import (
	"net/http"
	"strconv"

	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/database"
	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/models"
	"github.com/gin-gonic/gin"
)

// post/delete
func DeletePosts(c *gin.Context) {
	idParam := c.Query("id")
	if idParam == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID not provided"})
		return
	}

	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid ID format"})
		return
	}

	var post models.Post
	result := database.DB.First(&post, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
		return
	} else {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
	}

	if err := database.DB.Delete(&post).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Post deleted successfully"})
}

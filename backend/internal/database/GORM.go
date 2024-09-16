package main

import (
	"log"
	"os"

	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error load .env file")
	}
}

func main() {
	dns := os.Getenv("DNS")

	db, err := gorm.Open(postgres.Open(dns), &gorm.Config{})
	if err != nil {
		log.Fatal("Faild to connect to the database:", err)
	}

	db.AutoMigrate(&models.Model{})
}

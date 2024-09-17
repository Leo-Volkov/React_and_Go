package database

import (
	"log"
	"os"
	"fmt"

	"github.com/Leo-Volkov/React_and_Go/tree/master/backend/server/internal/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func InitBD() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error load .env file")
	}
	dns := os.Getenv("DNS")

	var err error
	db, err := gorm.Open(postgres.Open(dns), &gorm.Config{}); if err != nil {
		log.Fatal("Failed to connect to the database:", err)
	}
	DB = db
	
	log.Println("Database connection established successfully")
	// Проверка активного соединения
	if err := checkConnection(); err != nil {
			log.Fatal("Database connection check failed:", err)
	} else {
			log.Println("Database connection check passed")
	}

	DB.AutoMigrate(&models.Post{})
}

func checkConnection() error {
	log.Println("Checking database connection...")

	if DB == nil {
			return fmt.Errorf("database.DB is nil")
	}

	sqlDB, err := DB.DB()
	if err != nil {
			return err
	}

	if err := sqlDB.Ping(); err != nil {
			return err
	}

	return nil
}
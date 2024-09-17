package models

type Post struct {
    ID    uint   `gorm:"primaryKey" json:"id"`
    Title string
    Body  string 
}
package models

type Model struct {
	Id    uint 	`gorm:"primaryKey"`
	Title string
	Bode  string
}

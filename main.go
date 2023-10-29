package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./")))

	fmt.Println("starting up")
	http.ListenAndServe(":3000", nil)
}

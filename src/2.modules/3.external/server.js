const express = require("express")
const dotenv = require("dotenv")

const app = express()
dotenv.config()

app.get("/", function(request, response){
    response.send("Welcome to Express API")
})

app.get("/users", function(request, response){
    const users = [
        {id:1, name:"Scott"},
        {id:2, name:"Adam"},
        {id:3, name:"Tuan"},
    ]
    response.json(users)
})

app.get("/employee",(request, response) => {
    response.json("Here is your employee data")
})

app.get("*", (request, response) => {
    response.json("Please contact your administrator")
})

const PORT = parseInt(process.env.PORT) || 4200

app.listen(PORT, function(){
    console.log(`Server Listening at PORT ${PORT}`)
})
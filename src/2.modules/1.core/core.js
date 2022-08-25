const http = require("http") // CommonJS
//import http from "http" // ModuleJS

http.createServer(function(request, response){
    // console.log(request.url)
    // console.log(request.headers.referer)
    
    if(request.url == "/"){
        response.end("Welcome to NodeJS http API")
    }
    else if(request.url == "/user"){
        response.end("Here is your user data")
    }
    else if(request.url =="/employee"){
        response.end("Here is your employee data")
    } else {
        response.end("Please contact your administrator")
    }
}).listen(3001)


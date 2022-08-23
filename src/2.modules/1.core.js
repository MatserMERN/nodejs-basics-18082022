const http = require("http") // CommonJS
//import http from "http" // ModuleJS

http.createServer(function(request, response){
    console.log(request.url)
    console.log(request.headers.referer)
    response.end("Welcome to NodeJS http API")
}).listen(3001)


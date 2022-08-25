const fs = require("fs")
const path = require("path")

fs.readFile("sample.txt", function(err, data){
    if(err){
        throw err
    }
    console.log(data.toString())
})
console.log(__dirname + "\\test.txt")
console.log(path.join(__dirname, "test.txt", "sample"))
fs.readFile(path.join(__dirname, "test.txt"), function(err, data){
    if(err){
        throw err
    }
    console.log(data.toString())
})
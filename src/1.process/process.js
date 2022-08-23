//ES5 / CommonJS
const dotenv = require("dotenv")
dotenv.config()

 //ES6 / ModuleJS
//  import dotenv from "dotenv"
//  dotenv.config()

console.log(process.pid)
console.log(process.execPath)
console.log(process.cwd())

console.log(process.env.USERDOMAIN)
console.log(process.env.USERNAME)
console.log(process.env.USERPROFILE)

const VERSION = process.env.VERSION
const PORT = process.env.PORT

console.log(VERSION, typeof VERSION)
console.log(PORT, typeof PORT)


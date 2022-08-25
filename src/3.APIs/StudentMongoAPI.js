import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"

import { Student } from "./models/StudentMongo.js";

const app = express()
dotenv.config()

// mongoose.connect("mongodb://localhost:27017/studentdb", function(err){
//     if(err){
//         throw err
//     } else {
//         console.log('Connected to MongoDB Sucessfully')
//     }
// })

mongoose.connect("mongodb://localhost:27017/studentdb")
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch(err => console.log(err))

app.get("/", function (req, res) {
    res.json("Welcome to Student Mongo API")
})

app.get("/students", async (req, res) => {
    const students = await Student.find()
    res.json(students)
})

const PORT = parseInt(process.env.PORT) || 4200

app.listen(PORT, () => {
    console.log(`Server Listening at PORT ${PORT}`)
})
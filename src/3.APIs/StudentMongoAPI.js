import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import { Student } from "./models/StudentMongo.js";

const app = express()
const router = express.Router()
dotenv.config()
app.use(express.json())
app.use(cors())

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

router.get("/", function (req, res) {
    res.json("Welcome to Student Mongo API")
})

router.get("/students", async (req, res) => {
    const students = await Student.find().catch(err => console.log(err))
    res.json(students)
})

router.get("/students/:id", async (req, res) => {
    const { id } = req.params
    // const student = await Student.find({_id: id})
    const student = await Student.findById(id)
    res.json(student)
})

router.post("/students", async (req, res) => {
    const studentObj = req.body
    const student = new Student(studentObj)
    await student.save()
    .then(data => res.json(data))
    .catch(err => res.send(err).status(500))
})

router.put("/students/:id", async (req, res) => {
    const { id } = req.params
    const { name, email, city } = req.body
    await Student.updateOne({ _id: id }, { $set: { name, email, city } })
        .then(data =>  res.json(data))
        .catch(err => res.send(err).status(500))
})

router.delete("/students/:id", async(req, res) => {
    const { id } = req.params
    await Student.deleteOne({_id: id})
    .then(data =>  res.json(data))
    .catch(err =>  res.send(err).status(500))
})

app.use("/api", router)


const PORT = parseInt(process.env.PORT) || 4200

app.listen(PORT, () => {
    console.log(`Server Listening at PORT ${PORT}`)
})
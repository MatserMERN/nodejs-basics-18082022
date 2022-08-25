import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"

import { User } from "./models/UserMongo.js";

const app = express()
const router = express.Router()
dotenv.config()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/studentdb")
    .then(() => console.log("Connected to MongoDB Successfully"))
    .catch(err => consolelog(err))

const PORT = process.env.PORT || 4001

router.get("/", (req, res) => {
    res.json("Welcome to the User Mongo API")
})

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body
    //const userObj = new User(user)
    const SALT = parseInt(process.env.SALT)

    // bcrypt.genSalt(SALT, function(err, salt) {
    //     bcrypt.hash(password, salt, async function(err, hash) {
    //         // Store hash in your password DB.
    //         await User.create({username, password: hash, email})
    //         .then(data => res.json(data))
    //         .catch(err => res.send(err).status(500))
    //     });
    // });  

    const hash = bcrypt.hashSync(password, SALT);
    await User.create({ username, password: hash, email })
        .then(data => res.json(data))
        .catch(err => res.send(err).status(500))
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body

    const user = await User.find({ username })

    // bcrypt.compare(password, user[0].password, function(err, isValid) {
    //     if(isValid){
    //         return res.json("User Logged in successfully")
    //     } else {
    //         return res.json("Invalid Login")
    //     }
    // });

    bcrypt.compare(password, user[0].password)
        .then(isValid => {
            if (isValid) {
                return res.json("User Logged in successfully")
            } else {
                return res.send("Invalid Login")
            }
        }).catch(err => res.send(err).status(500))
    // if(isValid){
    //     return res.json("User Logged in successfully")
    // } else {
    //     return res.json("Invalid Login")
    // }
})


app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server Listen at PORT ${PORT}`)
})

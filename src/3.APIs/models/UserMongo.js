import mongoose from "mongoose";
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
}, {versionKey: false})

export const User = mongoose.model("user",userSchema, "user")
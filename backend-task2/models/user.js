const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA AND MODEL FOR USER COLLECTION
//STORES USERNAME AND PASSWORD IN DB & ASSIGNS AN UNIQUE ID TO EACH

const userSchema = new Schema({
    uid: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User

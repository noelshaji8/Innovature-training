const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

const accessSecret = "8d245805079f46dd71f9a436adab2153456cd759f2463841e647c1dbf669a18e5119b4131780fd47c7a26eaceecba249a189150615b235353e43a11a4434eafb"

let users = []

//CREATE USER AND STORED IN LIST
//PASSWORD ENCODED

router.post("/signup", async (req, res) => {

    const checkUsers = users.find(user => user.username === req.body.username);

    if (checkUsers) {
        return res.status(400).json('User already exists');
    }
    
    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body["password"], salt)
        const user = { "username": req.body["username"], "password": hashPassword }
        users.push(user)
        res.status(201).send(users)
    } catch {
        res.status(500).send("error")
    }
});

//LOGIN WITH ENCODED PASSWORD CHECK AND JWT GENERATION

router.post("/login", async (req, res) => {

    const checkFunction = (user) => {
        if (user["username"] === req.body["username"]) {
            return user
        }
    }

    const user = users.find(checkFunction)
    if (user == null) {
        return res.status(400).send("No user")
    }

    try {
        if (await bcrypt.compare(req.body["password"], user["password"])) {
            console.log("successful login")
        }
        else {
            return res.status(404).send("failed login")
        }
    } catch (err) {
        return res.status(500).send("Invalid input")
    }

    //TOKEN GENERATION & SET AS COOKIE (TOKEN VALID FOR 15 MINS)

    const userjwt = req.body
    const accessToken = jwt.sign(userjwt, accessSecret,{expiresIn: "900s"})
    res.cookie("token", accessToken)
    return res.send({accessToken: accessToken, requiredUser: req.body.username})
})

module.exports = router
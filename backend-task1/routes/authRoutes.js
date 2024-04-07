const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const accessSecret = "8d245805079f46dd71f9a436adab2153456cd759f2463841e647c1dbf669a18e5119b4131780fd47c7a26eaceecba249a189150615b235353e43a11a4434eafb"
let users = []

router.post("/signup", async (req, res) => {

    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body["password"], salt)
        const user = { "username": req.body["username"], "password": hashPassword }
        users.push(user)
        res.status(201).send(users)
    } catch {
        res.status(500).send()
    }

});

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
            console.log("success")
        }
        else {
            return res.status(404).send("failed")
        }
    } catch (err) {
        res.status(500).send(err)
    }

    const userjwt = req.body
    const accessToken = jwt.sign(userjwt, accessSecret)
    res.json({ accessToken: accessToken })
})

module.exports = router
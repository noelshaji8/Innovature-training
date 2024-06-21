const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const User = require("../models/user");

const accessSecret = "8d245805079f46dd71f9a436adab2153456cd759f2463841e647c1dbf669a18e5119b4131780fd47c7a26eaceecba249a189150615b235353e43a11a4434eafb"


//SIGNUP USERS & CREATE USER IN DB
router.post("/signup", async (req, res) => {

    try {

        //PASSWORD ENCODED
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const uid = Math.floor(Math.random() * 100)
        const user = new User({ uid: uid, username: req.body.username, password: hashPassword })
        user.save()
            .then((result) => { res.send(result);
                console.log(result)
             })
            .catch(() => { res.status(400).send("User exists");console.log("error") })
    } catch {
        console.log("error2")
        res.status(500).send()
    }
});


//LOGIN USERS
router.post("/login", async (req, res) => {

    const checkFunction = (user) => {
        if (user["username"] === req.body["username"]) {
            return user
        }
    }

    const users = await User.find()
    const requiredUser = users.find(checkFunction)
    if (requiredUser == null) {
        return res.status(400).send("No user")
    }
    try {
        if (await bcrypt.compare(req.body["password"], requiredUser.password)) {
            console.log("successful login")
        }
        else {
            return res.status(404).send("failed login")
        }
    } catch (err) {
        return res.status(500).send("Invalid input")
    }

    //TOKEN GENERATION & SET AS COOKIE (TOKEN VALID FOR 15 MINS)

    const tokenUser = { username: requiredUser.username, password: requiredUser.password, uid: requiredUser.uid }
    const userjwt = tokenUser
    const accessToken = jwt.sign(userjwt, accessSecret)
    res.cookie("token", accessToken)
    return res.send({ accessToken: accessToken, requiredUser: requiredUser })
})

module.exports = router
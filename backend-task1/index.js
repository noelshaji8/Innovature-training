const express = require("express");
const dotenv = require("dotenv")
const arithmeticRoutes = require("./routes/arithmeticRoutes")
const authRoutes = require("./routes/authRoutes")
const jwt = require("jsonwebtoken")

dotenv.config()
const app = express();
app.use(express.json())

const accessSecret = "8d245805079f46dd71f9a436adab2153456cd759f2463841e647c1dbf669a18e5119b4131780fd47c7a26eaceecba249a189150615b235353e43a11a4434eafb"

function authenticateToken(req, res, next) {

    const authHeader = req.headers["authorization"]
    const token = authHeader.split(" ")[1]
    if (token == null) {
        return res.status(400).send("no token")
    }
    jwt.verify(token, accessSecret, (err, user) => {
        if (err) { return res.status(403).send("token invalid") }
        req.user = user

    })
    next()
}

app.use(authRoutes)

app.use(authenticateToken)

app.use(arithmeticRoutes)

app.listen(4000, function () {
    console.log("Server up and running!");
})




const express = require("express");
const dotenv = require("dotenv")
const arithmeticRoutes = require("./routes/arithmeticRoutes")
const authRoutes = require("./routes/authRoutes")
const authenticateToken = require("./middleware/authenticateToken")
const cookieParser = require("cookie-parser");
const cors = require("cors")

dotenv.config();
const app = express();
app.use(express.json())
app.use(cookieParser());

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    }))

app.use(authRoutes)

app.use(authenticateToken) //JWT AUTHENTICATION MIDDLEWARE RUNS BEFORE EVERY REQUEST

app.use(arithmeticRoutes)

app.listen(3000, function () {
    console.log("Server up and running!");
})




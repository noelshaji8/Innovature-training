const express = require("express");
const dotenv = require("dotenv")
const arithmeticRoutes = require("./routes/arithmeticRoutes")
const authRoutes = require("./routes/authRoutes")
const authenticateToken = require("./middleware/authenticateToken")
const cookieParser = require("cookie-parser");

dotenv.config();

const cors = require("cors")
const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
}

const app = express();
app.use(express.json())
app.use(cookieParser());

app.use(cors(corsOptions));

app.use(authRoutes)

app.use(authenticateToken) //JWT AUTHENTICATION MIDDLEWARE RUNS BEFORE EVERY REQUEST

app.use(arithmeticRoutes)

app.listen(4000, function () {
    console.log("Server up and running!");
})




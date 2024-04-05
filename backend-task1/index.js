const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json())

let users = []

app.post("/signup", async (req, res) => {

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

app.post("/login", async (req, res) => {

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
            res.status(200).send("success")
        }
        else{
            res.status(404).send("failed")
        }       
        
    } catch {
        
    }
})

app.listen(4000, function () {
    console.log("Server up and running!");
})




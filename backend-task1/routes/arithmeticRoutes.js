const express = require("express")
const router = express.Router()

//ADD ENDPOINT
router.post("/add",  (req, res) => {
    const num1 = req.body.num1 * 1
    const num2 = req.body.num2 * 1

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 + num2
        return res.status(200).send({ result: result })
    }
    else {
        return res.status(400).send("invalid parameters")
    }

})

//SUBTRACT ENDPOINT
router.post("/subtract",  (req, res) => {
    const num1 = req.body.num1 * 1
    const num2 = req.body.num2 * 1

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 - num2
        return res.status(200).send({ result: result })
    }
    else {
        return res.status(400).send("invalid parameters")
    }

})

//MULTIPLY ENDPOINT
router.post("/multiply",  (req, res) => {
    const num1 = req.body.num1 * 1
    const num2 = req.body.num2 * 1

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 * num2
        return res.status(200).send({ result: result })
    }
    else {
        return res.status(400).send("invalid parameters")
    }

})

//DIVIDE ENDPOINT
router.post("/divide",  (req, res) => {
    const num1 = req.body.num1 * 1
    const num2 = req.body.num2 * 1

    if (!isNaN(num1) && !isNaN(num2)) {
        const result = num1 / num2
        return res.status(200).send({ result: result })
    }
    else {
        return res.status(400).send("invalid parameters")
    }

})

module.exports = router;
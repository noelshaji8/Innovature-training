const express = require("express")
const router = express.Router()
const Recipe = require("../models/recipes")
const User = require("../models/user")
const upload = require("../middleware/fileHandler")

//CREATE A RECIPE WITH INFO AND OPTIONAL IMAGE UPLOAD

router.post("/recipe-create", upload.single("file"), (req, res) => {
    const recipe = new Recipe({
        uid: req.user.uid,
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients,
        method: req.body.method,
    })
    if(req.file){
        recipe.file = req.file.path
    }
    recipe.save()
        .then((result) => { res.send(result) })
        .catch(() => { res.status(400).send("error") })

})

//READ ALL RECIPES

router.get("/recipe-read-all", (req, res) => {
    Recipe.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

//READ OWN RECIPES

router.post("/recipe-read-own", (req, res) => {
    Recipe.find({
        uid: { $eq: req.user.uid }
    })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

//READ SEPCIFIC USER'S RECIPES

router.post("/recipe-read-other", async (req, res) => {

    const user = await User.find({
        username: { $eq: req.body.username }
    })
    console.log(user)

    Recipe.find({
        uid: { $eq: user[0].uid }
    })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

//READ A SINGLE QUERIED RECIPE 

router.post("/recipe-read-queried", (req, res) => {
    Recipe.find({
        title: { $eq: req.body.title }
    })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

//UPDATE QUERIED RECIPE

router.patch("/recipe-update-queried", upload.single("file"), (req, res) => {

    Recipe.findOneAndUpdate({ title: req.body.title, uid: req.user.uid }, req.body, { new: true })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send("err")
        })
})

//DELETE QUERIED RECIPE

router.delete("/recipe-delete-queried", (req, res) => {

    Recipe.deleteOne({ title: req.body.title, uid: req.user.uid })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = router



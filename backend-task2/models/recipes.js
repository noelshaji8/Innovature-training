const mongoose = require("mongoose")
const Schema = mongoose.Schema

//SCHEMA AND MODEL FOR RECIPE COLLECTION
//STORES INFO IN DB

const recipeSchema = new Schema({
    uid: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    file: {
        type: String
    }
}, { timestamps: true })

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe

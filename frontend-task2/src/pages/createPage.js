import React, { useState, useEffect } from 'react';
import '../styles.css';
import { TextArea, Button } from '@radix-ui/themes';
import { createRecipe, updateRecipe } from "../Api"
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function CreatePage() {

    let location = useLocation();
    let { pathname } = location;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [method, setMethod] = useState('');

    const recipes = useSelector((state) => state.recipe)
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (pathname === "/update") {
            setTitle(recipes.recipe.title);
            setDescription(recipes.recipe.description);
            setIngredients(recipes.recipe.ingredients);
            setMethod(recipes.recipe.method)
        }
    }, [pathname])

    const handleRecipeSubmit = async () => {
        try {
            const data = await createRecipe({
                "title": title,
                "description": description,
                "ingredients": ingredients,
                "method": method,
            });

        } catch (error) {
            console.log(error)
        }
    }

    const handleRecipeUpdate = async () => {
        try {
            const data = await updateRecipe({
                "_id": recipes.recipe._id,
                "title": title,
                "description": description,
                "ingredients": ingredients,
                "method": method,
            });
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='recipe-container'>
            <h2>Enter your recipe</h2>
            <TextArea className='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <TextArea className='title' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <TextArea className='info' value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" />
            <TextArea className='info' value={method} onChange={(e) => setMethod(e.target.value)} placeholder="Method of cooking" />
            <Button onClick={pathname === "/update" ? handleRecipeUpdate : handleRecipeSubmit} size="4">
                {pathname === "/update" ? "Update" : "Submit"}
            </Button>
        </div>
    );
}

export default CreatePage;
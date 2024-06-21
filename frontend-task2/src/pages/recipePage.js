import React, { useState ,  useEffect} from 'react';
import '../styles.css';
import { Button } from '@radix-ui/themes';
import { deleteRecipe, readOwnRecipes } from '../Api';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { readRecipe } from "../redux/recipeSlice"

function RecipePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recipes = useSelector((state) => state.recipe)
    const user = useSelector((state) => state.user)  

    const handleRecipeDelete = async () => {
        try {
            const data = await deleteRecipe({
                "_id": recipes.recipe._id,
            });            
            const recipesData = await readOwnRecipes();
            dispatch(readRecipe(recipesData))
            navigate("/display")

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleRecipeUpdate = async () => {
        try {
            navigate("/update")
        } catch (error) {
            console.log(error)
        }
    }
    

    return (
        <div className="recipe-container">
            {
                user.uid === recipes.recipe.uid ? (<div id='top-right'>
                    <Button size="3" onClick={handleRecipeUpdate}>Update</Button>
                    <Button onClick={handleRecipeDelete} size="3">Delete</Button>
                </div>) : (null)
            }

            <div className="recipe-title">{recipes.recipe.title}</div>
            <div className="recipe-description">
                {recipes.recipe.description}
            </div>
            <div className="recipe-section">
                <h3>Ingredients</h3>
                <div className='recipe-info'>
                    {recipes.recipe.ingredients}
                </div>
            </div>
            <div className="recipe-section">
                <h3>Method of Cooking</h3>
                <div className='recipe-info'>
                    {recipes.recipe.method}
                </div>
            </div>
        </div>
    );
}

export default RecipePage;
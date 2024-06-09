import React, { useEffect } from 'react';
import '../styles.css';
import NavBar from '../components/navBar';
import { Route, Routes, useLocation } from "react-router-dom";
import SearchPage from '../pages/searchPage';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCard from '../components/recipeCard';
import { readAllRecipes, readOwnRecipes, searchRecipe, searchUser } from "../Api"
import { readAll, readOwn, searchRecipeAction, searchUserRecipes } from "../redux/recipeSlice"

function DisplayPage() {

    const dispatch = useDispatch();

    let location = useLocation();
    let { pathname } = location;

    const user = useSelector((state) => state.user)
    const recipes = useSelector((state) => state.recipe)
    console.log(recipes.recipe)

    return (
        <div className="container">
            {recipes.recipe[0] == null ? (<h1 style={{alignContent:'center', height:"60vh"}}>{`Welcome ${user.username}!`}</h1>) : pathname === "/display" ? (<h1>{`${user.username}'s Recipes`}</h1>) : (<h1>All Recipes</h1>)
            }
            <div className="card-grid">
                {
                    recipes.recipe.map((recipe, i) => (<RecipeCard key={i} recipe={recipe} />))
                }
            </div>

        </div>);
}

function MainPage() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/display' element={<DisplayPage />} >
                </Route>
                <Route path='/recipes' element={<DisplayPage />} >
                </Route>
                <Route path='/search' element={<SearchPage />}>
                </Route>
            </Routes>
        </div>
    );

}

export default MainPage;
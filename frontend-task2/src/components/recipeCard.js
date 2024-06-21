import React from 'react';
import '../styles.css';
import { Box, Card, Text } from '@radix-ui/themes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { readRecipe } from "../redux/recipeSlice"

// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
// import * as Avatar from '@radix-ui/react-avatar';

// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../redux/userSlice';

function RecipeCard({ recipe }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSingleRecipe = async () => {
        
        dispatch(readRecipe(recipe))
        console.log(recipe)
        navigate("/single-recipe")
    }

    return (
        <Box maxWidth="350px">
            <Card className="card" onClick={handleSingleRecipe} >

                <Text className="card-h" as="div" size="2" weight="bold">
                    {recipe.title}
                </Text>
                <Text className="card-p" as="div" color="gray" size="2">
                    {recipe.description}
                </Text>

            </Card>
        </Box>
    );
}

export default RecipeCard;
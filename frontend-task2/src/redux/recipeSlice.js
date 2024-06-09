import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipe: [],
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        readAll: (state, action) => {
            state.recipe = action.payload;
        },
        readOwn: (state, action) => {
            state.recipe = action.payload;
            
        },
        searchUserRecipes: (state, action) => {
            state.recipe = action.payload;
            
        },
        searchRecipe: (state, action) => {
            state.recipe = action.payload;
            
        },
        logoutRecipe: (state)=>{
            state.recipe = []
        }
    }
});

export const { readAll, readOwn, searchUserRecipes, searchRecipe, logoutRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
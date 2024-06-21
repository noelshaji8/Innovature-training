import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipe: [],
};

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        readRecipe: (state, action) => {
            state.recipe = action.payload;
        },
        logoutRecipe: (state)=>{
            state.recipe = []
        }
    }
});

export const { readRecipe, logoutRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
import React, { useState } from 'react';
import '../styles.css';
import { TextArea, Button } from '@radix-ui/themes';
import { createRecipe } from "../Api"

function UpdatePage() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [method, setMethod] = useState('');

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
    return (
        <div className='recipe-container'>
            <h2>Update your recipe</h2>
            <TextArea className='title' onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <TextArea className='title' onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <TextArea className='info' onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients" />
            <TextArea className='info' onChange={(e) => setMethod(e.target.value)} placeholder="Method of cooking" />
            <Button onClick={handleRecipeSubmit} size="4">
                Submit
            </Button>
        </div>
    );
}

export default UpdatePage;
import './index.css'
import React from 'react';
import RecipeTitle from './RecipeTitle'
// TODO: Import IngredientList


function App() {
    // TODO: Add recipe object
    const recipe = {
        title: 'Mashed potatoes',
        feedback: {
            rating: 3,
            reviews: 20
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: false },
            { name: 'Pepper', prepared: false },
        ],
    };
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title} feedback= { recipe.feedback } />
            {/* TODO: Add IngredientList component */}

        </article>
    )
}

export default App;

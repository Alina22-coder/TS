"use strict";
// #whXxOBlYS0H
const recipesDiv = document.createElement('div');
recipesDiv.className = 'recipes';
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObj => {
    const { recipes } = recipesObj;
    console.log(recipes);
    for (const recipe of recipes) {
        const recipeInfo = document.createElement('div');
        recipeInfo.className = 'recipe-info';
        recipeInfo.innerText = `
            caloriesPerServing: ${recipe.caloriesPerServing},
            cookTimeMinutes: ${recipe.cookTimeMinutes},
            cuisine: "${recipe.cuisine}",
            difficulty:"${recipe.difficulty}",
            id: ${recipe.id},
            mealType: ${recipe.mealType}
            name: "${recipe.name},"
            prepTimeMinutes: ${recipe.prepTimeMinutes},
            rating: ${recipe.rating},
            reviewCount: ${recipe.reviewCount},
            servings: ${recipe.servings},
            tags: ${recipe.tags},
            userId: ${recipe.userId}
            `;
        recipesDiv.appendChild(recipeInfo);
        const recipeImg = document.createElement('img');
        recipeImg.className = 'recipe-img';
        recipeImg.src = recipe.image;
        recipeInfo.appendChild(recipeImg);
        const ingredientInfo = document.createElement('ol');
        ingredientInfo.className = 'ingredients';
        for (const ingredient of recipe.ingredients) {
            const ingredientItem = document.createElement('li');
            ingredientItem.className = 'ingredient';
            ingredientItem.innerText = ingredient;
            ingredientInfo.appendChild(ingredientItem);
            recipeInfo.appendChild(ingredientInfo);
        }
        const instructionsText = document.createElement('p');
        instructionsText.className = 'instructions';
        instructionsText.innerText = recipe.instructions;
        recipeInfo.appendChild(instructionsText);
    }
});
document.body.appendChild(recipesDiv);

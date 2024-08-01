import React from "react";

const recipes = [
  {
    id: 1,
    title: "Grilled Asparagus with Onions",
    highlight: "Cook with Asparagus",
    imageUrl: "/images/fridge-contents/asparagus.jpg",
    ingredients: ["Asparagus", "Onion", "Onion", "Cheese", "Tomato", "Tomato"],
  },
  {
    id: 2,
    title: "Chicken Salad",
    highlight: "Cook with chicken",
    imageUrl: "/path/to/chicken-salad.jpg",
    ingredients: ["Chicken", "Lettuce", "Tomatoes", "Cucumber"],
  },
  // Add more recipes as needed
];

function RecipesPage() {
  const currentRecipe = recipes[0];

  return (
    <div className="recipes-page">
      <div className="content">
        <div className="header">Recipes with Expiring Soon Items</div>
        <div className="ingredients-grid">
          {currentRecipe.ingredients.slice(0, 6).map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <img
                src={`/images/fridge-contents/${ingredient.toLowerCase()}.png`}
                alt={ingredient}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="recipe-section">
        <img
          src={currentRecipe.imageUrl}
          alt={currentRecipe.title}
          className="recipe-image"
        />
        <div className="overlay">
          <div className="highlight">{currentRecipe.highlight}</div>
          <div className="title">{currentRecipe.title}</div>
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;

import { useParams } from "react-router-dom";
import { useState } from "react";

const recipes = {
  "Creamy Cajun Chicken Pasta": {
    title: "Creamy Cajun Chicken Pasta",
    prepTime: "5min",
    cookTime: "25min",
    ingredients: [
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
      {
        name: "2 Tbsp smoked paprika",
        image: "/images/meal-plan/ingredients/paprika.png",
      },
    ],
    method: [
      "Boil the spaghetti according to package instructions",
      "Heat oil in a pan and saute the onions and garlic until golden brown",
      "Add ground beef and cook until browned",
      "Pour in tomato sauce and simmer for 20 minutes",
      "Serve the sauce over the spaghetti and enjoy!",
    ],
  },
  //   add other recipes here
};

const Recipes = () => {
  const { title } = useParams();
  const recipe = recipes[title] || {};
  const [view, setView] = useState("ingredients");

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="recipe-page">
      <h1>{recipe.title}</h1>
      <div className="view-buttons">
        <button
          className={`filter-button ${view === "ingredients" ? "active" : ""}`}
          onClick={() => handleViewChange("ingredients")}
        >
          Ingredients
        </button>
        <button
          className={`filter-button ${view === "method" ? "active" : ""}`}
          onClick={() => handleViewChange("method")}
        >
          Methods
        </button>
      </div>
      <div className="recipe-time">
        <p>
          Prep: {recipe.prepTime} Cook: {recipe.cookTime}
        </p>
      </div>
      {view === "ingredients" && (
        <div className="ingredients-list">
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient">
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className="ingredient-image"
                />
                <p className="ingredient-name">{ingredient.name}</p>
              </div>
            ))}
        </div>
      )}
      {view === "method" && (
        <div className="method-list">
          {recipe.method &&
            recipe.method.map((step, index) => (
              <div key={index} className="method-step">
                <h3>
                  {index + 1}. {step}
                </h3>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;

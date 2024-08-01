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
  "Grilled Asparagus with Onions": {
    title: "Grilled Asparagus with Onions",
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
      "Heat oil in a pan and saute the onions and garlic until golden brown",
      "Add asparagus and cook until browned",
      "Season with salt and garlic and simmer for 20 minutes",
      "Serve with sauce and enjoy!",
    ],
  },
  "Chicken Taco Lettuce Wraps": {
    title: "Chicken Taco Lettuce Wraps",
    prepTime: "10min",
    cookTime: "30min",
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
      "Peel the lettuce and rise to wash. ",
      "Cut chicken into bite sized pieces.",
      "Season chicken with parika and salt.",
      "Stir fry with cajun seasoning until brown.",
      "Serve over lettuce and enjoy!",
    ],
  },"5 Minute Mediterranean Bowl": {
    title: "5 Minute Mediterranean Bowl",
    prepTime: "2min",
    cookTime: "5min",
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
      "Prep the cauliflower and wash ingredients.",
      "Cut chicken into bite sized pieces.",
      "Season chicken with parika and salt.",
      "Stir fry with cajun seasoning until brown.",
      "Serve over lettuce and enjoy!",
    ],
  },"Sweet Potato Fries": {
    title: "Sweet Potato Fries",
    prepTime: "10min",
    cookTime: "30min",
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
      "Cut sweet potato into pieces.",
      "Season sweet potato with parika and salt.",
      "Cook in oven until brown and crispy",
      "Serve with ketchup and enjoy!",
    ],
  },"10 Minute Braised Celery": {
    title: "10 Minute Braised Celery",
    prepTime: "5min",
    cookTime: "10min",
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
      "Cut celery into pieces.",
      "Season sweet potato with parika and salt.",
      "Cook in oven until brown and crispy",
      "Serve with ketchup and enjoy!",
    ],
  },"Brownies": {
    title: "Brownies",
    prepTime: "5min",
    cookTime: "10min",
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
      "Mix flour, cocoa powder, and sugar in a large bowl.",
      "Cut into squares.",
      "Cook in oven until brown and crispy",
      "Serve with powdered sugar and enjoy!",
    ],
  },"Strawberry Cake": {
    title: "Strawberry Cake",
    prepTime: "20min",
    cookTime: "40min",
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
      "Mix flour, cocoa powder, and sugar in a large bowl.",
      "Chop strawberries into small pieces.",
      "Cook in oven until brown and crispy",
      "Serve with powdered sugar and enjoy!",
    ],
  },
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
      <h2 className="title-recipe">{recipe.title}</h2>
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
          Prep: {recipe.prepTime} | Cook: {recipe.cookTime}
        </p>
      </div>
      {view === "ingredients" && (
        <div className="ingredients-list">
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              // <div key={index} className="ingredient">
              //   <img
              //     src={ingredient.image}
              //     alt={ingredient.name}
              //     className="ingredient-image"
              //   />
              //   <p className="ingredient-name">{ingredient.name}</p>
              // </div>
              <img
                src="/images/meal-plan/ingredients.png"
                alt="ingredients"
                className="ingredients-pic"
              />
            ))}
        </div>
      )}
<div className="s-posts-container">
      {view === "method" && (
        
        <div className="s-post-section ">
          {recipe.method &&
            recipe.method.map((step, index) => (
              <div key={index}>
                <div className="step">
                  <h2>Step {index + 1}</h2>
                  <p className="step-text">{step}</p>
                </div>
              </div>
            ))}
        </div>
        
      )}
    </div>
    </div>
  );
};

export default Recipes;

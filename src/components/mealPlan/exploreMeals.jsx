import React, { useState } from "react";
import { Link } from "react-router-dom";

const posts = {
  "Main Dishes": [
    {
      title: "Creamy Cajun Chicken Pasta",
      image: "/images/meal-plan/pasta.jpg",
      time: "30min",
      ingredients: 10,
    },
    {
      title: "Chicken Taco Lettuce Wraps",
      image: "/images/meal-plan/pasta.jpg",
      time: "30min",
      ingredients: 15,
    },
    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
  ],
  "Side Dishes": [
    {
      title: "10 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },

    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
  ],
  Desserts: [
    {
      title: " Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/pasta.jpg",
      time: "5min",
      ingredients: 7,
    },
  ],
};

const MealPlan = () => {
  const [filter, setFilter] = useState("Main Dishes");

  return (
    <div className="meal-plan">
      <h1 className="meal-title">Evening Suggestions</h1>
      <div className="filters">
        {Object.keys(posts).map((category) => (
          <button
            key={category}
            className={`filter-button ${filter === category ? "active" : ""}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="posts-container">
        {posts[filter].map((post, index) => (
          <Link
            key={index}
            to={`/recipe/${encodeURIComponent(post.title)}`}
            className="post-link"
          >
            <div key={index} className="post">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-info">
                <h2 className="post-title">{post.title}</h2>
                <h4 className="post-time">
                  {post.ingredients} Ingredients, {post.time}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;

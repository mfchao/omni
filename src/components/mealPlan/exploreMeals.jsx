import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";
import {

  Navigate,
} from "react-router-dom";

const posts = {
  "Main Dishes": [
    {
      title: "Creamy Cajun Chicken Pasta",
      image: "/images/meal-plan/pasta.png",
      time: "30min",
      ingredients: 10,
    },
    {
      title: "Chicken Taco Lettuce Wraps",
      image: "/images/meal-plan/lettuce.png",
      time: "30min",
      ingredients: 15,
    },
    {
      title: "5 Minute Mediterranean Bowl",
      image: "/images/meal-plan/meditteranean.png",
      time: "5min",
      ingredients: 7,
    },
  ],
  "Side Dishes": [
    {
      title: "Sweet Potato Fries",
      image: "/images/meal-plan/potato.jpg",
      time: "30min",
      ingredients: 4,
    },
    {
      title: "10 Minute Braised Celery",
      image: "/images/meal-plan/celery.jpg",
      time: "10min",
      ingredients: 7,
    },
  ],
  Desserts: [
    {
      title: " 5 Ingredient Brwonies",
      image: "/images/meal-plan/brownie.jpg",
      time: "20min",
      ingredients: 5,
    },
    {
      title: "Strawberry Cake",
      image: "/images/meal-plan/cake.jpg",
      time: "30min",
      ingredients: 15,
    },
  ],
};

const MealPlan = () => {
  const [filter, setFilter] = useState("Main Dishes");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [navigateToChicken, setNavigateToChicken] = useState(false);

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  // const { transcript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (
      transcript.toLowerCase().includes("chicken")
    ) {
      setNavigateToChicken(true);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  if (navigateToChicken) {
    return <Navigate to="/recipe/Creamy%20Cajun%20Chicken%20Pasta" />;
  }

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
            <div className="post-section">
              <img src={post.image} alt={post.title} className="recipe-image" />
              <div className="post-overlay">
                <div className="highlight">
                  {post.ingredients} Ingredients, {post.time}
                </div>
                <div className="title">{post.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MealPlan;

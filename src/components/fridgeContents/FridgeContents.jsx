import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";

const foods = [
  {
    id: 1,
    name: "Green Beans",
    daysLeft: 1,
    imageUrl: "/images/fridge-contents/green-beans.png",
  },
  {
    id: 2,
    name: "Asparagus",
    daysLeft: 3,
    imageUrl: "/images/fridge-contents/asparagus.png",
  },
  {
    id: 3,
    name: "Onion",
    daysLeft: 3,
    imageUrl: "/images/fridge-contents/onion.png",
  },
  {
    id: 4,
    name: "Cheese",
    daysLeft: 5,
    imageUrl: "/images/fridge-contents/cheese.png",
  },
  {
    id: 5,
    name: "Tomato",
    daysLeft: 7,
    imageUrl: "/images/fridge-contents/tomato.png",
  },
  {
    id: 6,
    name: "Cucumber",
    daysLeft: 10,
    imageUrl: "/images/fridge-contents/cucumber.png",
  },
  {
    id: 7,
    name: "Apple",
    daysLeft: 10,
    imageUrl: "/images/fridge-contents/apple.png",
  },
  {
    id: 8,
    name: "Eggplant",
    daysLeft: 10,
    imageUrl: "/images/fridge-contents/eggplant.png",
  },
  {
    id: 9,
    name: "Lemon",
    daysLeft: 14,
    imageUrl: "/images/fridge-contents/lemon.png",
  },
];

const FridgeContents =({filter, setFilter}) => {
  const navigate = useNavigate();
  const { transcript, resetTranscript } = useSpeechRecognition();


  const filteredFoods =
    filter === "all" ? foods : foods.filter((food) => food.daysLeft <= 3);

  const handleClick = () => {
    navigate("/recipes");
  };

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);
  // console.log(transcript);

  useEffect(() => {
    // fridge
    if (
      transcript.toLowerCase().includes("expiring")
    ) {
      setFilter("expiring")
      resetTranscript();
    }

  }, [transcript, resetTranscript]);
 

  return (
    <div className="fridge-contents">
      <div className="filter-labels">
        <div
          className={`filter-label ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Items
        </div>
        <div
          className={`filter-label ${filter === "expiring" ? "active" : ""}`}
          onClick={() => setFilter("expiring")}
        >
          Expiring Soon Items
        </div>
      </div>
      <div className="background">
        <div className="grid-container">
          {filteredFoods.map((food) => (
            <div key={food.id} className="grid-item">
              <img src={food.imageUrl} alt={food.name} />
              <div className="description">{food.name}</div>
              <div className="days-left">{food.daysLeft} days left</div>
            </div>
          ))}
        </div>
        {filter === "expiring" && (
          <button className="see-recipes-button" onClick={handleClick}>
            See Recipes
          </button>
        )}
      </div>
    </div>
  );
}

export default FridgeContents;

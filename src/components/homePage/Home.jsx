import Weather from "../weather/Weather";
import AppCard from "./AppCard";
import DateTime from "./DateTime";

import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Routes,
  useNavigate,
  HashRouter,
  Navigate,
} from "react-router-dom";
const apps = [
  {
    name: "Fridge Contents",
    icon: "/app-icons/fridge-contents.svg",
    route: "/fridge-contents",
  },
  { name: "Timer", icon: "/app-icons/timer.svg", route: "/timer" },
  // { name: "To-Do", icon: "/app-icons/to-do-icon.svg", route: "/todo" },
  { name: "Meal Plan", icon: "/app-icons/meal-plan.svg", route: "/meal-plan" },
  // { name: "Music", icon: "/app-icons/to-do-icon.svg", route: "/music" },
  { name: "Calendar", icon: "/app-icons/calendar.svg", route: "/calendar" },
  // {
  //   name: "Smart Home",
  //   icon: "/app-icons/to-do-icon.svg",
  //   route: "/smart-home",
  // },
  { name: "Memos", icon: "/app-icons/memo.svg", route: "/memos" },
];

const HomePage = ({ isTransitioning }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [navigateToFridge, setNavigateToFridge] = useState(false);
  const [navigateToTimer, setNavigateToTimer] = useState(false);
  const [navigateToMealPlanner, setNavigateToMealPlanner] = useState(false);
  const [navigateToMemo, setNavigateToMemo] = useState(false);
  const [navigateToCalendar, setNavigateToCalendar] = useState(false);
  const [navigateToChicken, setNavigateToChicken] = useState(false);

  const navigate = useNavigate();


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
      transcript.toLowerCase().includes("fridge")
    ) {
      setNavigateToFridge(true);
      resetTranscript();
    }

    if (
      transcript.toLowerCase().includes("expiring")
    ) {

      setNavigateToFridge(true);
      resetTranscript();
    }

    // meal planner
    if (
      transcript.toLowerCase().includes("recipes") ||
      transcript.toLowerCase().includes("chicken")
    ) {
      setNavigateToMealPlanner(true);
      resetTranscript();
    }

    //recipe
    if (
      transcript.toLowerCase().includes("chicken")
    ) {
      setNavigateToChicken(true);
      resetTranscript();
    }

    // timer
    if (
      transcript.toLowerCase().includes("timer")
    ) {
      setNavigateToTimer(true);
      resetTranscript();
    }

    // Memo
    if (
      transcript.toLowerCase().includes("memo")
    ) {
      setNavigateToMemo(true);
      resetTranscript();
    }

    // Calendar
    if (
      transcript.toLowerCase().includes("events")
    ) {
      setNavigateToCalendar(true);
      resetTranscript();
    }



  }, [transcript, resetTranscript]);
  if (navigateToFridge) {
    navigate("/fridge-contents");
  }
  if (navigateToMealPlanner) {
    navigate("/meal-plan");
  }
  if (navigateToTimer) {
    navigate("/timer");
  }
  if (navigateToMemo) {
    navigate("/memos");
  }

  if (navigateToCalendar) {
    navigate("/calendar");
  }

  if (navigateToChicken) {
    navigate("/meal-plan/recipe/Creamy%20Cajun%20Chicken%20Pasta");
  }
  

  return (
    <div className={`home-layout ${isTransitioning ? "transitioning" : ""}`}>
      <div className="top-bar">
        <DateTime classNameDate="home-date" classNameTime="home-time" />
        <div className="home-weather">
          <Weather
            classNameLocation="home-weather-location"
            classNameDes="home-weather-des"
            classNameTemp="home-weather-temp"
          />
          <img
            src="/images/weather/weather.png"
            alt="weather"
            className="home-weather-image"
          />
        </div>
      </div>

      <div className="home-page-apps">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            icon={app.icon}
            name={app.name}
            link={app.route}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

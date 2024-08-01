import React, { useEffect, useRef, useState } from "react";
import Cover from "./components/Cover";
import {
  BrowserRouter,
  Route,
  useLocation,
  Routes,
  useNavigate,
  HashRouter,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/homePage/Home";
import FridgeContents from "./components/fridgeContents/FridgeContents";
import MealPlan from "./components/mealPlan/exploreMeals";
import Recipes from "./components/mealPlan/recipes";
import TimerDashboard from "./components/timer/TimerDashboard";
import MemoBoard from "./components/memo/MemoBoard";
import Calendar from "./components/calendar/Calendar";
import RecipesPage from "./components/fridgeContents/RecipesPage";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition/lib/SpeechRecognition";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(450);
  const [topbarHeight, setTopbarHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);
  const [resizingDirection, setResizingDirection] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [navigateToFridge, setNavigateToFridge] = useState(false);
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  
  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  // const { transcript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (transcript.toLowerCase().includes("hey")) {
      setShowOverlay(true);
      resetTranscript();

      setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
    }
  }, [transcript, resetTranscript]);

  // console.log(transcript);
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "cover"];
  const urls = {
    home: "/",
    cover: "/cover",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition) {
    console.log("Speech Recognition not supported in this browser");
    return null;
  }

  // if (navigateToFridge) {
  //   return <Navigate to="/fridge-contents" />;
  // }

  let Redirect;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      Redirect = <Navigate to={urls[redirectUrl]} replace={true} />;
      console.log("redirected to " + urls[redirectUrl]);
    } else {
      Redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  const startResizing = (clientX, clientY, direction) => {
    setIsResizing(true);
    setResizingDirection(direction);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      if (resizingDirection === "horizontal") {
        setSidebarWidth(e.clientX);
      } else if (resizingDirection === "vertical") {
        setTopbarHeight(e.clientY);
      }
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    setResizingDirection(null);
  };

  const handleTouchMove = (e) => {
    if (isResizing) {
      if (resizingDirection === "horizontal") {
        setSidebarWidth(e.touches[0].clientX);
      } else if (resizingDirection === "vertical") {
        setTopbarHeight(e.touches[0].clientY);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsResizing(false);
    setResizingDirection(null);
  };

  const handleTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <>
      <div
        className="app"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* <div className="controls" style={{ width: sidebarWidth }}>
          <div
            className="resize-handle"
            onMouseDown={(e) =>
              startResizing(e.clientX, e.clientY, "horizontal")
            }
            onTouchStart={(e) =>
              startResizing(
                e.touches[0].clientX,
                e.touches[0].clientY,
                "horizontal"
              )
            }
          ></div>
        </div> */}

        {/* <HashRouter> */}
        <div className="display">
          <div className="app-content">
            {/* <div className="top-bar-black" style={{ height: topbarHeight }}>
              <div
                className="resize-handle-top"
                onMouseDown={(e) =>
                  startResizing(e.clientX, e.clientY, "vertical")
                }
                onTouchStart={(e) =>
                  startResizing(
                    e.touches[0].clientX,
                    e.touches[0].clientY,
                    "vertical"
                  )
                }
              ></div>
              
            </div> */}
            <SideMenu />

            {showOverlay && (
              <div className="ai-overlay">
                <img src="/nav-icons/stars.gif" alt="animation" />
              </div>
            )}

            <Routes>
              <Route
                exact
                path="/"
                element={<Cover onTransition={handleTransition} />}
              />
              <Route
                path="/home"
                element={<HomePage isTransitioning={isTransitioning} />}
              />
              <Route path="/fridge-contents" element={<FridgeContents />} />
              <Route path="/meal-plan" element={<MealPlan />} />
              <Route path="/recipe/:title" element={<Recipes />} />
              <Route path="/timer" element={<TimerDashboard />} />
              <Route path="/memos" element={<MemoBoard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
          </div>
        </div>
        {/* </HashRouter> */}
      </div>
    </>
  );
}

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (
    location.pathname &&
    location.pathname !== "/" &&
    location.pathname !== "/home"
  ) {
    return (
      <div className="side-menu">
        <button className="menu-button" onClick={() => navigate("/home")}>
          <img src="/nav-icons/Home.svg" alt="Home" className="home-button" />
        </button>
        <button className="menu-button" onClick={() => navigate(-1)}>
          <img src="/nav-icons/Back.svg" alt="Back" className="back-button" />
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default App;

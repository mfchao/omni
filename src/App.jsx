import React, { useEffect, useRef, useState } from "react";
import Cover from "./components/Cover";
import {
  BrowserRouter,
  Route,
  useLocation,
  Routes,
  useNavigate,
  HashRouter,
} from "react-router-dom";
import HomePage from "./components/homePage/Home";
import FridgeContents from "./components/fridgeContents/FridgeContents";
import MealPlan from "./components/mealPlan/exploreMeals";
import Recipes from "./components/mealPlan/recipes";
import TimerDashboard from "./components/timer/TimerDashboard";
import MemoBoard from "./components/memo/MemoBoard";

function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);

  // const handleMouseDown = (e) => {
  //   isResizing.current = true;
  // };

  // const handleMouseMove = (e) => {
  //   if (!isResizing.current) return;
  //   setSidebarWidth(e.clientX);
  // };

  // const handleMouseUp = () => {
  //   isResizing.current = false;
  // };

  const startResizing = (clientX) => {
    setIsResizing(true);
    setInitialX(clientX);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      setSidebarWidth(e.clientX);
      setInitialX(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleTouchMove = (e) => {
    if (isResizing) {
      setSidebarWidth(e.touches[0].clientX);
      setInitialX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsResizing(false);
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
        <div className="controls" style={{ width: sidebarWidth }}>
          <div
            className="resize-handle"
            onMouseDown={(e) => startResizing(e.clientX)}
            onTouchStart={(e) => startResizing(e.touches[0].clientX)}
          ></div>
        </div>

        {/* <HashRouter> */}
        <div className="display">
          <SideMenu />

          <div className="app-content">
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
        <div className="menu-separator"></div>
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

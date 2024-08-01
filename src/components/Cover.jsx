import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Weather from "./weather/Weather";
import DateTime from "./homePage/DateTime";

const Cover = ({ onTransition }) => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    onTransition();
    setTimeout(() => {
      navigate("/home");
    }, 300);
  };

  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="cover-page" onClick={() => handleClick()}>
      <div className="cover-time">
        {formattedTime} <span className="cover-am"> AM</span>
      </div>
      <div className="sections">
        <div className="section weather">
          <div className="header">
            <img
              src="/images/weather/weather-icon.png"
              alt="Weather Logo"
              className="logo"
            />
            <div className="title">Weather</div>
          </div>
          <div className="content">
            <img
              src="/images/weather/weather.png"
              alt="weather"
              className="cover-weather"
            />
            <div className="cover-temp">70°</div>
            <div className="cover-desc">Partly Sunny</div>
            <div className="cover-location">San Francisco</div>
          </div>
        </div>
        <div className="section spotify">
          <div className="header">
            <img
              src="/images/audio/spotify.png"
              alt="Spotify Logo"
              className="logo"
            />
            <div className="title">Spotify</div>
          </div>
          <div className="content">
            <img
              src="/images/audio/plantasia.jpg"
              alt="music"
              className="plantasia"
            />
            <div className="audio-title">Plantasia</div>
            <div className="cover-location">Nora Jones</div>
            <img src="/images/audio/play.png" alt="music" className="play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
